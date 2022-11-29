<template>
  <free-exception icon="500" title="500" description="抱歉，服务器报告错误" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServiceError',
});
</script>
