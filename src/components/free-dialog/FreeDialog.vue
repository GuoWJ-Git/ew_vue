<template>
  <el-dialog
    v-bind="$attrs"
    :title="title"
    :width="width"
    :before-close="onClose"
    :close-on-click-modal="onCloseModal"
    append-to-body
  >
    <slot></slot>
    <template v-if="showFooterButton" #footer>
      <span class="dialog-footer">
        <el-button
          type="plain"
          size="small"
          :icon="showFooterBtnIcon ? 'el-icon-circle-close' : ''"
          @click="onCancel"
        >
          {{ cancelText }}
        </el-button>
        <el-button
          size="small"
          :icon="showFooterBtnIcon ? 'el-icon-circle-check' : ''"
          :loading="btnLoading"
          :disabled="confirmDisabled"
          @click="onConfirm"
        >
          {{ confirmText }}
        </el-button>
      </span>
    </template>
    <slot name="footer"></slot>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FreeDialog',

  inheritAttrs: false,

  props: {
    width: {
      type: [String, Number],
      default: '50%',
    },
    title: {
      type: String,
      default: '',
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    onCloseModal: {
      type: Boolean,
      default: false,
    },
    showFooterButton: {
      type: Boolean,
      default: true,
    },
    showFooterBtnIcon: {
      type: Boolean,
      default: true,
    },
    btnLoading: {
      type: Boolean,
      default: false,
    },
    confirmDisabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['on-confirm', 'on-cancel', 'on-close'],

  setup(props, { emit }) {
    const onConfirm = () => emit('on-confirm');
    const onCancel = () => emit('on-cancel');
    const onClose = () => emit('on-close');

    return {
      onConfirm,
      onCancel,
      onClose,
    };
  },
});
</script>
