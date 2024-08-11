<template>
  <div class="loading-wrapper">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 50 50"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- stroke-dasharray=2PI*R = 2*3.1415*22/4=34 分成4截，2截画出来，2截是空白的 -->
      <!-- stroke-linecap="round" 让圆的边缘是圆形 -->
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="transparent"
        stroke-width="3"
        :stroke="outSideColor"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <!-- from、to可以用values代替; 0 25 25是表示绕圆半径(25)旋转, 0是旋转角度-->
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        />
        <!-- 边框颜色渐变 -->
        <animate
          attributeName="stroke"
          :values="outGradientColor"
          :dur="`${duration * 2}s`"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="25"
        cy="25"
        r="12"
        fill="transparent"
        stroke-width="3"
        :stroke="inSideColor"
        stroke-dasharray="18"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 25 25; 0 25 25"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          :values="inGradientColor"
          :dur="`${duration * 2}s`"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <div class="loading-tip">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
defineOptions({ name: "Loading" });
const props = defineProps({
  width: {
    type: String,
    default: "50",
  },
  height: {
    type: String,
    default: "50",
  },
  outSideColor: {
    type: String,
    default: "#3be6cb",
  },
  inSideColor: {
    type: String,
    default: "#02bcfe",
  },
  duration: {
    type: Number,
    default: 2,
  },
});
const outGradientColor = computed(
  () => `${props.outSideColor};${props.inSideColor};${props.outSideColor}`
);
const inGradientColor = computed(
  () => `${props.inSideColor};${props.outSideColor};${props.inSideColor}`
);
</script>

<style lang="scss" scoped>
.loading-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .loading-tip {
    font-size: 15px;
  }
}
</style>
