<template>
  <div class="fly-box" :ref="refName">
    <svg :width="width" :height="height">
      <defs>
        <!-- M5 5 L395 5 L395 395 L5 395 Z 四个点的坐标，M是移动，起始点，L是画线，M和L后面是带x、y坐标，Z是闭合 -->
        <path :id="pathId" :d="path" fill="none" />
        <!-- 光点，且光点位置放在头部fx=100%; cx、cy是外圆(终点圆)；fx、fy是内圆(起点圆)； r是终点圆的半径 -->
        <radialGradient
          :id="radialGradientId"
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
          r="50%"
        >
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <!-- path跟模板(圆)的交叉部分就显示出来（滑动的轨迹）， r半径越大，轨迹就越长 -->
        <mask :id="maskId">
          <circle
            :r="starLen"
            cx="0"
            cy="0"
            :fill="`url(#${radialGradientId})`"
          >
            <!-- SMIL动画，路径动画; rotate: auto -> 0 可以更加流畅; 多个 animateMotion 并行时，后者会覆盖前者 -->
            <animateMotion
              :dur="`${duration}s`"
              :path="path"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>

      <use :href="`#${pathId}`" stroke-width="1" :stroke="lineColor"></use>
      <!-- 使用模板，制作轨迹动画和光点 -->
      <use
        :href="`#${pathId}`"
        stroke-width="3"
        :stroke="starColor"
        :mask="`url(#${maskId})`"
      ></use>
    </svg>
    <div class="fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance, computed, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
defineOptions({ name: "FlyBox" });
defineProps({
  lineColor: {
    type: String,
    default: "#235fa7",
  },
  starColor: {
    type: String,
    default: "#3be6cb",
  },
  starLen: {
    type: [String, Number],
    default: 50,
  },
  duration: {
    type: [String, Number],
    default: 3,
  },
});

const uuid = uuidv4();
const refName = "flyBox";
console.log("uuid", uuid);
const pathId = `${refName}-path-${uuid}`;
const radialGradientId = `${refName}-gradient-${uuid}`;
const maskId = `${refName}-mask-${uuid}`;
const width = ref(0);
const height = ref(0);
// M5 5 L395 5 L395 395 L5 395 Z
const path = computed(
  () =>
    `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${
      height.value - 5
    } Z`
);

const init = () => {
  const instance = getCurrentInstance();
  const dom = instance.ctx.$refs[refName];
  width.value = dom.clientWidth;
  height.value = dom.clientHeight;
};
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.fly-box {
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .fly-box-content {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
