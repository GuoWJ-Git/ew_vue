<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { ElConfigProvider } from 'element-plus';
import en from 'element-plus/lib/locale/lang/en';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { computed, defineComponent } from 'vue';

import { useLocaleStore } from '@/store/modules/locale';

export default defineComponent({
  name: 'App',
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
    const useLocale = useLocaleStore();
    const locale = computed(() => {
      const currentLocale = useLocale.getLocale;
      if (currentLocale === 'zh_CN') {
        return zhCn;
      } else if (currentLocale === 'en') {
        return en;
      }
      return zhCn;
    });

    return {
      locale,
    };
  },
});
</script>

<style>
#welllog-micro-admin {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
