<template>
  <el-form ref="formRef" class="free-form" :model="model" :rules="rules" @submit.prevent="submit">
    <el-row v-bind="row">
      <el-col v-for="item in fieldItems" :key="item.prop" v-bind="item.col || defaultCol">
        <el-form-item
          :label="item.label"
          :prop="item.prop"
          :size="item?.size || 'small'"
          :label-width="item.labelWidth"
          :show-message="item.showMessage"
          :inline-message="item.inlineMessage"
          :class="item.className"
        >
          <template v-if="item.labelRender" #label>
            <free-render :scope="item" :render="item.labelRender" />
          </template>
          <slot name="before" :item="item"></slot>
          <component
            v-bind="getComponentAttr(item)"
            :is="getComponentNode(item.type)"
            v-if="item.props?.trim"
            v-model.trim="getModelValue[item.prop]"
            v-on="item.event || {}"
          >
            {{ model[item.prop] }}
          </component>
          <component
            v-bind="getComponentAttr(item)"
            :is="getComponentNode(item.type)"
            v-else
            v-model="getModelValue[item.prop]"
            value-key="id"
            v-on="item.event || {}"
          >
            {{ model[item.prop] }}
          </component>
          <slot name="after" :item="item"></slot>
        </el-form-item>
      </el-col>

      <slot name="buttons"></slot>

      <el-col v-if="showButtons" v-bind="buttonsCol || defaultCol" class="footer-buttons-col">
        <el-form-item class="form-footer">
          <el-button
            v-if="confirmText"
            icon="el-icon-circle-check"
            size="small"
            v-bind="buttonsProps"
            @click="submit"
          >
            {{ confirmText }}
          </el-button>
          <el-button
            v-if="resetText"
            size="small"
            icon="el-icon-circle-close"
            type="plain"
            v-bind="buttonsProps"
            @click="reset"
          >
            {{ resetText }}
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import ElForm from 'element-plus/lib/el-form';
import {
  computed,
  defineComponent,
  PropType,
  ref,
  unref,
  watchEffect,
  WritableComputedRef,
} from 'vue';

import FreeRender from '@/components/free-render';

import FreeCheckbox from './FreeCheckbox.vue';
import FreeRadio from './FreeRadio.vue';
import FreeSelect from './FreeSelect.vue';
import { COMPONENT_NODE } from './model';
import type { Data, FieldItem } from './types'

export default defineComponent({
  name: 'FreeForm',

  components: {
    FreeRadio,
    FreeSelect,
    FreeCheckbox,
    FreeRender,
  },

  props: {
    row: {
      type: Object as PropType<Data>,
      default: () => ({}),
    },
    model: {
      type: Object as PropType<Data>,
      default: () => ({}),
    },
    fields: {
      type: Array as PropType<FieldItem[]>,
      default: () => [],
    },
    showButtons: {
      type: Boolean,
      default: false,
    },
    buttonsProps: {
      type: Object as PropType<Data>,
      default: () => ({}),
    },
    resetText: {
      type: String,
      default: '重置',
    },
    confirmText: {
      type: String,
      default: '提交',
    },
    defaultCol: {
      type: Object,
      default: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 }),
    },
    buttonsCol: {
      type: Object,
      default: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 }),
    },
  },

  emits: ['reset', 'submit', 'input:update'],

  setup(props, { emit }) {
    const rules = ref({});
    const formRef = ref<InstanceType<typeof ElForm>>();
    const getComponentNode = (key: string) => COMPONENT_NODE[key] || key;

    const getModelValue: WritableComputedRef<Data> = computed({
      get() {
        return props.model;
      },
      set(value) {
        emit('input:update', value);
      },
    });

    const getComponentAttr = (item: Recordable) => {
      const attrs = {
        ...item.props,
        placeholder: item.placeholder,
        render: item.render,
      };
      item?.options && (attrs.options = item.options)
      if (item.type === 'render') {
        attrs.scope = { model: props.model };
      }
      return attrs;
    };

    const fieldItems = computed(() => props.fields.filter((item) => !item?.hidden));

    const getRules = (items: FieldItem[]) =>
      items.reduce((r, o) => Object.assign(r, { [o.prop]: o.rules }), {});

    const validate = async () => {
      const form = unref(formRef);
      if (!form) return;
      try {
        await form.validate();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    const reset = () => {
      unref(formRef)?.resetFields();
      emit('reset');
    };

    const submit = async () => (await validate()) && emit('submit');

    watchEffect(() => (rules.value = getRules(props.fields)));

    return {
      formRef,
      rules,
      fieldItems,
      reset,
      submit,
      validate,
      getComponentNode,
      getComponentAttr,
      getModelValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.free-form {
  .footer-buttons-col {
    display: flex;
    align-items: center;

    .form-footer {
      :deep(.el-form-item__content) {
        display: flex !important;
        align-items: flex-start !important;
      }
    }
  }

  :deep(.el-input-number--small) {
    .el-input-number__increase {
      top: 3px;
    }
  }
}
</style>
