<template>
  <div class="icon-wrapper" :style="{ ...style }">
    <svg class="icon-svg">
      <use :href="iconName"></use>
    </svg>
  </div>
</template>
<!-- <script>
export default {
  name: "Icon",
  props: {
    name: String,
    style: Object,
    prefix: {
      type: String,
      default: "icon",
    },
  },
  setup(ctx) {
    const iconName = `#${ctx.name}`;
    console.log("iconName", iconName);
    return {
      iconName,
    };
  },
};
</script> -->
<script setup>
defineOptions({ name: "Icon" });
const props = defineProps({
  name: String,
  style: Object,
  prefix: {
    type: String,
    default: "icon",
  },
});
const iconName = props.prefix
  ? `#${props.prefix}-${props.name}`
  : `#${props.name}`;
</script>
<style lang="scss" scoped>
.icon-wrapper {
  display: inline-block;
}
.icon-svg {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
