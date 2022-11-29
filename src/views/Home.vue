<template>
  <div class="home-container">
    <free-form v-bind="formQuery" @submit="submit">
      <template #buttons>
        <div style=" margin-left: 10px;">
          <el-button size="medium" icon="el-icon-edit" @click="clickHandler">
            {{ t('demo.demo.demo') }}
          </el-button>
          <el-button type="plain" size="medium" icon="el-icon-circle-plus-outline">
            新增行
          </el-button>
          <el-button type="plain" size="medium" icon="el-icon-remove-outline">
            删除行
          </el-button>
        </div>
      </template>
    </free-form>
    <free-table
      v-model:page="params.page"
      v-model:limit="params.limit"
      v-loading="loading"
      class="home-table"
      pagination
      border
      :data="tableData"
      :column="column"
      :total="total"
      :header-cell-style="{ background: '#F9F9FA' }"
      @pagination="getData"
    ></free-table>
  </div>
</template>

<script lang="tsx">
import axios from 'axios';
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';

import { useI18n } from '@/hooks/web/useI18n';

export default defineComponent({
  name: 'Home',
  setup() {
    const { t } = useI18n();
    const formQuery = reactive({
      labelWidth: 80,
      row: { gutter: 20 },
      // showButtons: true,
      buttonsProps: {
        size: 'medium',
      },
      model: {
        projectId: '',
        time: '',
      },
      fields: [
        {
          label: '下拉框',
          prop: 'projectId',
          type: 'select',
          size: 'medium',
          placeholder: '请选择',
          col: { span: 4 },
          options: [
            { value: 1, label: 'aaa' },
            { value: 2, label: 'bbb' },
          ],
        },
        {
          label: '日期',
          prop: 'time',
          type: 'datePicker',
          size: 'medium',
          placeholder: '请选择',
          props: { style: { width: '100%' } },
          col: { span: 4 },
        },
      ],
    });

    const submit = () => {
      console.log(formQuery);
    };

    const column = ref([
      { prop: 'title', label: '名称', minWidth: 200 },
      {
        prop: 'author',
        label: '作者',
        render: ({ row }) => {
          return <span>{row?.author?.loginname}</span>;
        },
      },
      { prop: 'tab', label: '类目' },
      { prop: 'reply_count', label: '回复数', width: 100 },
      { prop: 'visit_count', label: '预览量', width: 100 },
    ]);

    const body = reactive({
      loading: false,
      total: 0,
      params: {
        tab: 'share',
        page: 1,
        limit: 10,
      },
    });

    const tableData = ref([]);

    const getData = async () => {
      try {
        body.loading = true;
        const url = 'https://cnodejs.org/api/v1/topics';
        const { data } = await axios({ method: 'get', url, params: body.params });
        tableData.value = data.data || [];
        body.total = 500;
        body.loading = false;
      } catch (error) {
        console.log(error);
      }
    };

    const clickHandler = () => {
      console.log('点击保存月计划', formQuery);
    };

    onMounted(() => getData());

    return {
      t,
      ...toRefs(body),
      column,
      formQuery,
      submit,
      tableData,
      getData,
      clickHandler,
    };
  },
});
</script>
