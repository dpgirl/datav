<template>
  <div id="datav-container" :ref="refName">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, onMounted, onUnmounted, nextTick } from "vue";
defineOptions({ name: "datavContainer" });
// import * as vm from "vue"; // 打印vue, 查看有哪些方法
const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
});
const refName = "datavContainer";
const width = ref(0);
const height = ref(0);
// 视口宽高
const originalWidth = ref(0);
const originalHeight = ref(0);
const ready = ref(false);

let context, dom, observer;

// 初始化
const initSize = () => {
  return new Promise((resolve) => {
    // 避免初始化时，dom还没渲染加载好；加nextTick会有异步问题，所以用Promise改成同步
    nextTick(() => {
      dom = context.$refs[refName];
      console.log("initSize", dom);
      // 用户传入宽高，则用用户定义的；否则用dom的宽高【获取大屏真实尺寸】
      if (props.options && props.options.width && props.options.height) {
        width.value = props.options.width;
        height.value = props.options.height;
      } else {
        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
      }

      // 视口宽高【获取画布尺寸】
      if (!originalWidth.value || !originalHeight.value) {
        // window.screen.width用户屏幕的总宽度，值是固定的，不会随着浏览器窗口大小变化；反映的是整个屏幕的分辨率
        originalWidth.value = window.screen.width;
        originalHeight.value = window.screen.height;
      }
      resolve();
    });
  });
};

// 更新容器的size
const updateSize = () => {
  if (width.value && height.value) {
    dom.style.width = `${width.value}px`;
    dom.style.height = `${height.value}px`;
  } else {
    dom.style.width = `${originalWidth.value}px`;
    dom.style.height = `${originalHeight.value}px`;
  }
};

const updateScale = () => {
  // 获取真实的视口尺寸【html，body和#app必须初始化为全屏，才能随着浏览器窗口变化而变化】
  const currentWidth = document.body.clientWidth;
  const currentHeight = document.body.clientHeight;
  // 获取大屏最终的宽高
  const realWidth = width.value || originalWidth.value;
  const realHeight = height.value || originalHeight.value;
  // 缩放比例
  const widthScale = currentWidth / realWidth;
  const heightScale = currentHeight / realHeight;
  dom.style.transform = `scale(${widthScale}, ${heightScale})`;
};

/**
 * 突破chrome 12px字体的显示极限：用到scale让字体可以缩放到小于12px;
 * 浏览器缩放时锁定屏幕宽高比： 缩放时，字体要保持不变，不能随着一起放大缩小；
 */
const onResize = async (e) => {
  console.log("onResize", e);
  await initSize();
  updateScale();
};

/** 监听dom变化: 更新resize */
const initMutationObserver = () => {
  const MutationObserver = window.MutationObserver;
  observer = new MutationObserver(onResize);
  observer.observe(dom, {
    attributes: true,
    attributeFilter: ["style"],
    attributeOldValue: true,
  });
};

const removeMutationObserver = () => {
  if (observer) {
    observer.disconnect();
    observer.taskRecords();
    observer = null;
  }
};

onMounted(async () => {
  ready.value = false;
  context = getCurrentInstance().ctx;
  await initSize();
  updateSize();
  updateScale();

  window.addEventListener("resize", onResize);
  initMutationObserver();
  ready.value = true;
});

// 组件销毁
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  removeMutationObserver();
});
</script>

<style lang="scss">
/** 容器组件：一般只有1个 */
#datav-container {
  /** 容器锁定宽高比：让容器原点是在左上方 */
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 999;
  transform-origin: left top;
}
</style>
