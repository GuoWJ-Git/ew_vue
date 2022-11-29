<template>
  <div v-loading="loading" class="iframe-container">
    <iframe
      ref="iframeRef"
      class="iframe-container__main"
      :src="iframeSrc"
      :frameborder="0"
      scrolling="auto"
      @load="hideLoading"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Iframe',
  setup() {
    const route = useRoute();
    const loading = ref(true);
    const iframeRef = ref<HTMLElement>();
    const iframeSrc = computed(() => route?.meta?.iframeSrc);

    const hideLoading = () => {
      loading.value = false;
    };

    return {
      iframeRef,
      iframeSrc,
      loading,
      hideLoading,
    };
  },
});
</script>

<style lang="scss" scoped>
.iframe-container {
  @include singleCardContainerStyle();
  height: 100%;

  &__main {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
