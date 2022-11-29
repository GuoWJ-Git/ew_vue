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
          type="primary"
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

<script>
export default {
  name: 'EditorInformation',
  inheritAttrs: false,
  props: {
    width: {
      type: String,
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

  methods: {
    onConfirm() {
      this.$emit('on-confirm');
    },
    onCancel() {
      this.$emit('on-cancel');
    },
    onClose() {
      this.$emit('on-close');
    },
  },
};
</script>
