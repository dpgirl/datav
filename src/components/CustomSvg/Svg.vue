<template>
  <!-- 缩放比例：200/100 viewBox可视区域 svg里面的标签是相对于viewBox绘图的 -->
  <!-- <svg width="200px" height="200px" viewBox="0 0 100 100">
    <line
      x1="0"
      y1="50"
      x2="100"
      y2="50"
      stroke-width="8"
      stroke="currentColor"
    ></line>
    <line
      x1="50"
      y1="0"
      x2="50"
      y2="100"
      stroke-width="8"
      stroke="currentColor"
    ></line>
  </svg> -->
  <svg width="0" height="0">
    <defs>
      <symbol id="more" viewBox="0 0 100 100">
        <circle r="5" cx="20" cy="25" fill="currentColor"></circle>
        <circle r="5" cx="20" cy="50" fill="currentColor"></circle>
        <circle r="5" cx="20" cy="75" fill="currentColor"></circle>
        <line
          x1="40"
          y1="25"
          x2="90"
          y2="25"
          stroke-width="8"
          stroke="currentColor"
        ></line>
        <line
          x1="40"
          y1="50"
          x2="90"
          y2="50"
          stroke-width="8"
          stroke="currentColor"
        ></line>
        <line
          x1="40"
          y1="75"
          x2="90"
          y2="75"
          stroke-width="8"
          stroke="currentColor"
        ></line>
      </symbol>
      <symbol id="arrow" viewBox="0 0 100 100">
        <polyline
          points="30 20, 70 50, 30 80"
          fill="transparent"
          stroke="currentColor"
          stroke-width="3"
        ></polyline>
      </symbol>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "CustomSvg",
};
</script>

<style lang="scss" scoped></style>
