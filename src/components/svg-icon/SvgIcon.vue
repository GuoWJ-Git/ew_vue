<template>
  <svg class="svg-icon" :class="svgClass" v-bind="$attrs" :style="{ color: color }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.name}`);
    const svgClass = computed(() => (props.name ? `icon-${props.name}` : ''));

    return {
      iconName,
      svgClass,
    };
  },
});
</script>

<style lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
}
</style>
