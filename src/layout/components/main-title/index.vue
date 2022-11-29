<template>
  <div class="main-title">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped lang="scss">
.main-title {
  height: 25px;
  margin: -8px 0 20px -8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  color: #363636;
}
</style>
