<template>
  <svg
    id="iconBase"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    role="presentation"
    :style="`transform: scale(${scaleVal})`"
  >
    <title :id="iconName" lang="en">{{ iconName }}</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box",
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
    scaleVal: {
      type: [Number, String],
      default: 1,
    },
  },
};
</script>

<style>
.iconBase :hover {
  scale: 1.2;
}
</style>
