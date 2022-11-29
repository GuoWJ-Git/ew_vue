<template>
  <div class="exception-manage">
    <div class="exception-manage__form">
      <el-form
        ref="formInline"
        class="custom-form"
        :model="formInline"
        size="small"
        label-width="90px"
      >
        <el-row>
          <el-col :span="4">
            <el-form-item prop="companyId" label="作业者">
              <el-select
                v-model="formInline.companyId"
                style="width: 100%"
                popper-class="config-dialog-select"
                filterable
                placeholder="请选择"
                clearable
                @change="companyChange"
              >
                <el-option
                  v-for="item in companyList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item prop="blockNames" label="区块">
              <el-select
                v-model="formInline.blockNames"
                style="width: 100%"
                placeholder="请选择"
                popper-class="config-dialog-select"
                clearable
                filterable
                multiple
                collapse-tags
              >
                <el-option
                  v-for="item in blockOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item prop="wids" label="井名">
              <el-select
                v-model="formInline.wids"
                style="width: 100%"
                popper-class="config-dialog-select"
                filterable
                placeholder="请选择"
                clearable
                multiple
                collapse-tags
              >
                <el-option
                  v-for="item in wellNameList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item prop="startTime" label="开始日期">
              <el-date-picker
                v-model="formInline.startTime"
                type="datetime"
                style="width: 100%"
                value-format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item prop="endTime" label="结束日期">
              <el-date-picker
                v-model="formInline.endTime"
                type="datetime"
                style="width: 100%"
                value-format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item prop="condTypes" label="工况">
              <el-select
                v-model="formInline.condTypes"
                style="width: 100%"
                popper-class="config-dialog-select"
                filterable
                placeholder="请选择"
                clearable
                multiple
                collapse-tags
              >
                <el-option
                  v-for="item in condTypesList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item prop="riskTypes" label="工程风险">
              <el-select
                v-model="formInline.riskTypes"
                style="width: 100%"
                popper-class="config-dialog-select"
                filterable
                placeholder="请选择"
                clearable
                multiple
                collapse-tags
              >
                <el-option
                  v-for="item in riskTypesList"
                  :key="item.value"
                  :label="item.value"
                  :value="item.code"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item prop="abnormalTypes" label="单参数异常">
              <el-select
                v-model="formInline.abnormalTypes"
                style="width: 100%"
                popper-class="config-dialog-select"
                filterable
                placeholder="请选择"
                clearable
                multiple
                collapse-tags
              >
                <el-option
                  v-for="item in abnormalTypesList"
                  :key="item.value"
                  :label="item.value"
                  :value="item.code"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item prop="warnStates" label="警报结果">
              <el-select
                v-model="formInline.warnStates"
                style="width: 100%"
                popper-class="config-dialog-select"
                filterable
                placeholder="请选择"
                clearable
                multiple
                collapse-tags
              >
                <el-option
                  v-for="item in warnStatesList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item prop="warnSources" label="警报来源">
              <el-select
                v-model="formInline.warnSources"
                style="width: 100%"
                popper-class="config-dialog-select"
                filterable
                placeholder="请选择"
                clearable
                multiple
                collapse-tags
              >
                <el-option
                  v-for="item in warnSourceList"
                  :key="item.code"
                  :label="item.value"
                  :value="item.code"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item class="custom-form-item">
              <el-button class="exception-button" type="primary" @click="submitForm">
                查询
              </el-button>
              <el-button class="exception-button" @click="resetForm">
                重置
              </el-button>
              <el-button type="primary" class="exception-button" size="small" @click="exportExcel">
                导出
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div ref="tableContainerRef" class="exception-manage__table">
      <el-table
        v-if="tableHeight"
        v-loading="tableLoading"
        :data="tableData"
        style="width: 100%"
        :height="tableHeight"
        stripe
      >
        <template v-for="item in tableColumn">
          <el-table-column v-if="!item.slot" :key="item.label" v-bind="item" />
          <el-table-column v-else :key="item.prop" :label="item.label" :width="item.width">
            <template #default="scope">
              <el-button
                type="text"
                class="table-custom-button"
                @click="abnormalRecordsDetail(scope.row)"
              >
                详情
              </el-button>
              <el-button
                type="text"
                style="color: #00b994"
                class="table-custom-button"
                @click="abnormalRecordsSeeCurve(scope.row)"
              >
                查看曲线
              </el-button>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <div v-if="tableData.length > 0 && total" class="pagination-container">
        <div class="custom-pagination-totals">
          {{ pageTotalsTxt }}
        </div>
        <el-pagination
          :current-page="paginationParams.pageNo"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="paginationParams.pageSize"
          layout="prev, pager, next, sizes, jumper"
          :total="total"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>

    <free-dialog
      custom-class="custom-dialog"
      :title="exceptionDetailsConfig.dialogTitle"
      width="70%"
      :visible="exceptionDetailsConfig.isDialogShow"
      :showFooterButton="false"
      @on-confirm="closeExceptionDetailsDialogHandler"
      @on-cancel="closeExceptionDetailsDialogHandler"
      @on-close="closeExceptionDetailsDialogHandler"
    >
      <div class="exception-details-content">
        <div class="basic-information">
          <div
            v-for="item in exceptionDetailsBasicList"
            :key="item.prop"
            class="basic-information__item"
          >
            <div>{{ item.label }}</div>
            <div>{{ transformTxt(item) }}</div>
          </div>
        </div>
        <div class="table-container">
          <el-descriptions :column="1" border style="margin-bottom: 20px">
            <el-descriptions-item
              v-for="item in exceptionDetailsTableColumn"
              :key="item.prop"
              label-class-name="my-label"
              content-class-name="my-content"
            >
              <template #label>
                {{ item.label }}
              </template>
              <div v-if="item.prop === 'showDic' && dicTableData?.length" class="special-handling">
                <div v-for="v in dicTableData" :key="v.key" class="special-handling-item">
                  {{ transformDetails(v) }}
                </div>
              </div>
              <div v-else class="msg">
                {{ showMsg }}
              </div>
            </el-descriptions-item>
          </el-descriptions>

          <el-table
            :data="exceptionDetailsTableData"
            style="width: 100%"
            :max-height="200"
            stripe
            class="border-table"
          >
            <template v-for="item in exceptionDetailsTableColumn2">
              <el-table-column v-if="!item.slot" :key="item.label" v-bind="item" />
              <el-table-column v-else :key="item.prop" :label="item.label">
                <template #default="scope">
                  <div class="file-list-content">
                    <div
                      v-for="v in scope.row.fileList"
                      :key="v.id"
                      class="file-list-content__item"
                      @click="downloadHandler(v)"
                    >
                      {{ v.fileOriginName }}
                    </div>
                  </div>
                </template>
              </el-table-column>
            </template>
            <el-table-column label="操作" align="center">
              <template #default="scope">
                <el-button
                  type="text"
                  class="table-custom-button"
                  @click="exceptionDetailsEditor(scope.row)"
                >
                  编辑
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="modify-record">
          <div class="title">
            修改记录
          </div>
          <div class="modify-record-table">
            <div
              v-for="(item, index) in modifyTableData"
              :key="item.id"
              class="modify-record-table__item"
            >
              <div v-for="iItem in modifyRecordTableColumn" :key="iItem.prop">
                <span class="label">{{ iItem.label }}</span>
                <span>{{ modifyTableData[index]?.[iItem.prop] ?? '-' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </free-dialog>

    <free-dialog
      :key="dialogKey"
      custom-class="custom-dialog"
      :title="handleDialogConfig.dialogTitle"
      width="740px"
      :visible="handleDialogConfig.isDialogShow"
      :show-close="false"
      :btn-loading="handleBtnLoading"
      append-to-body
      @on-confirm="handleConfirmHandler"
      @on-cancel="handleCloseHandler"
      @on-close="handleCloseHandler"
    >
      <div class="custom-dialog__content">
        <exception-handle-form
          ref="handleFormRef"
          :row-scope="abnormalRowScope"
          @on-success="uploadSuccess"
        />
      </div>
    </free-dialog>

    <free-dialog
      :key="curveKey"
      custom-class="custom-dialog"
      :title="curveDialogConfig.dialogTitle"
      width="85%"
      top="3vh"
      :visible="curveDialogConfig.isDialogShow"
      :showFooterButton="false"
      @on-confirm="curveConfirmHandler"
      @on-cancel="curveCloseHandler"
      @on-close="curveCloseHandler"
    >
      <div class="curve-container">
        <curve-template
          ref="curveTemplateRef"
          canvas-id="exception-curve"
          :well-id="rowScope?.wid"
          :use-switch-status="true"
          :show-audio="false"
        />
      </div>
    </free-dialog>

    <free-dialog
      custom-class="custom-dialog"
      title="导出"
      width="600px"
      :visible="exportDialogShow"
      :btn-loading="exportBtnLoading"
      @on-confirm="exportConfirmHandler"
      @on-cancel="exportCloseHandler"
      @on-close="exportCloseHandler"
    >
      <div class="curve-container">
        <el-form
          ref="exportFormRef"
          class="custom-form"
          :inline="true"
          :model="exportForm"
          :rules="formRules"
          :style="{ 'margin-bottom': '20px' }"
        >
          <el-form-item
            label="文件名:"
            prop="fileName"
            :style="{ 'margin-top': '10px', 'margin-bottom': '25px' }"
          >
            <el-input
              v-model="exportForm.fileName"
              :style="{ width: '470px' }"
              placeholder="请输入文件名"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </free-dialog>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { isArray } from 'lodash-es';

import { instance } from '@/api/config';
import { getAuthBlock, getAuthCompany, getAuthWell } from '@/api/realTimeMonitor/all';
import {
  deleteFile,
  downloadFile,
  getExceptionDetail,
  getExceptionPageList,
  updateException,
} from '@/api/realTimeMonitor/realTimeCurve';
import { cancel, downloadExceptionManage } from '@/api/wellsiteManage/exceptionManage';
import { exportFile } from '@/utils/exportFile';
import { pageCountCalculate } from '@/utils/number';
import CurveTemplate from '@/views/real-time-monitor/components/curve-template';
import ExceptionHandleForm from '@/views/real-time-monitor/components/exception-handle-form';

import {
  exceptionDetailsBasicList,
  exceptionDetailsTableColumn,
  exceptionDetailsTableColumn2,
  modifyRecordTableColumn,
  tableColumn,
} from './model';

export default {
  name: 'ExceptionManage',
  components: {
    ExceptionHandleForm,
    CurveTemplate,
  },
  data() {
    return {
      curveKey: 0,
      tableContainerRef: null,
      tableHeight: 0,
      tableColumn,
      tableLoading: false,
      paginationParams: {
        pageNo: 1,
        pageSize: 20,
      },
      total: 0,
      tableData: [],
      blockOptions: [],
      rebaseKey: 0,
      formInline: {
        companyId: '',
        blockNames: '',
        wids: '',
        // time: "",
        startTime: '',
        endTime: '',
        condTypes: '',
        riskTypes: '',
        abnormalTypes: '',
        warnStates: '',
        warnSources: '',
      },
      companyList: [],
      locationList: [],
      condTypesList: [],
      riskTypesList: [],
      abnormalTypesList: [],
      warnSourceList: [],
      warnStatesList: [
        {
          label: '未处理',
          value: 0,
        },
        {
          label: '正确',
          value: 1,
        },
        {
          label: '错误',
          value: 2,
        },
      ],

      checkAll: false,
      isIndeterminate: false,
      exportBtnLoading: false,

      chooseRiskCategories: '',

      exceptionDetailsConfig: {
        dialogTitle: '',
        isDialogShow: false,
      },
      exceptionDetailsBasicList,
      exceptionDetails: [],
      exceptionDetailsTableData: [],
      exceptionDetailsTableColumn,
      exceptionDetailsTableColumn2,
      modifyRecordTableColumn,

      handleDialogConfig: {
        dialogTitle: '',
        dialogType: '',
        isDialogShow: false,
      },
      handleFormRef: null,
      handleBtnLoading: false,

      basicInformationDetail: [],

      riskResultCheckModel: [],
      abnormalResultCheckModel: [],

      rowScope: null,

      detailData: null,
      lineList: [],
      curveDialogConfig: {
        dialogTitle: '',
        isDialogShow: false,
      },

      showMsg: '',
      dicTableData: [],
      modifyTableData: [],
      abnormalRowScope: null,
      dialogKey: 0,
      wellNameList: [],
      exportForm: {
        fileName: '',
        exportNumber: '',
      },
      formRules: {
        fileName: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur',
          },
        ],
        exportNumber: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur',
          },
        ],
      },
      exportDialogShow: false,
    };
  },
  computed: {
    pageTotalsTxt() {
      const pageNoTotal = pageCountCalculate(this.total, this.paginationParams.pageSize);
      return `共${this.total}条记录  第 ${this.paginationParams.pageNo}/${pageNoTotal} 页`;
    },
  },
  mounted() {
    this.init();
    const tableContainerHeight = this.$refs['tableContainerRef']?.offsetHeight;
    tableContainerHeight && (this.tableHeight = tableContainerHeight - 88);
  },
  methods: {
    submitForm() {
      this.paginationParams.pageNo = 1;
      this.getTableData();
    },
    resetForm() {
      this.$refs['formInline'].resetFields();
      this.checkAll = false;
      this.submitForm();
    },
    exportCloseHandler() {
      this.$refs['exportFormRef'].resetFields();
      this.exportDialogShow = false;
      cancel();
    },
    exportConfirmHandler() {
      this.$refs['exportFormRef']?.validate(async (valid) => {
        if (!valid) return;
        try {
          this.exportBtnLoading = true;
          const userName = localStorage.getItem('username');
          const params = {
            pageNo: 1,
            pageSize: this.total,
            systemId: 'cc004f80-e7ed-432e-b633-afb8cf05a288',
            userId: userName,
            fileName: this.exportForm.fileName,
          };
          if (this.formInline.startTime && this.formInline.endTime) {
            params.searchBeginTime = this.formInline.startTime;
            params.searchEndTime = this.formInline.endTime;
          }
          Object.keys(this.formInline).forEach((item) => {
            if (isArray(this.formInline[item]) && this.formInline[item]?.length) {
              params[item] = this.formInline[item]?.join(',');
            }
          });
          this.formInline.companyId && (params.companyId = this.formInline.companyId);
          const resData = await downloadExceptionManage(params);
          exportFile(resData);
          this.exportCloseHandler();
        } catch (error) {
          console.log(error);
        } finally {
          this.exportBtnLoading = false;
        }
      });
    },
    async exportExcel() {
      this.exportDialogShow = true;
      let txt = '';
      let timeTxt = '';
      const useKeyArr = ['companyId', 'blockNames', 'wids'];

      const timeKeyArr = ['startTime', 'endTime'];
      for (const prop in this.formInline) {
        if (useKeyArr.includes(prop)) {
          if (prop === 'companyId' && this.formInline[prop]) {
            const companyName = this.companyList.find(
              (item) => item.value === this.formInline[prop]
            )?.label;
            txt += `${companyName}_`;
          } else if (isArray(this.formInline[prop]) && this.formInline[prop]?.length) {
            txt += `${this.formInline[prop][0]}_`;
          }
        }
        if (timeKeyArr.includes(prop) && this.formInline[prop]) {
          const transformTime = dayjs(this.formInline[prop]).format('YYYYMMDDHH');
          timeTxt += `${transformTime}-`;
        }
      }
      if (!timeTxt) {
        txt = txt.substr(0, txt.length - 1);
      }
      txt += `${timeTxt}报警记录`;
      this.exportForm.fileName = txt;
    },
    transformTxt(item) {
      if (item.prop === 'warnState') {
        const txtArr = new Map([
          [0, '未处理'],
          [1, '正确'],
          [2, '错误'],
        ]);
        return txtArr.get(this.exceptionDetails[item.prop]) ?? '-';
      } else {
        return this.exceptionDetails[item.prop] ?? '-';
      }
    },
    async downloadHandler(item) {
      try {
        const params = { id: item.id };
        const resData = await downloadFile(params);
        exportFile(resData);
      } catch (error) {
        console.log(error);
      }
    },
    async getTableData() {
      try {
        const userName = localStorage.getItem('username');
        this.tableLoading = true;
        const params = {
          ...this.paginationParams,
          systemId: 'cc004f80-e7ed-432e-b633-afb8cf05a288',
          userId: userName,
        };
        if (this.formInline.startTime) {
          params.searchBeginTime = this.formInline.startTime;
        }
        if (this.formInline.endTime) {
          params.searchEndTime = this.formInline.endTime;
        }
        Object.keys(this.formInline).forEach((item) => {
          if (isArray(this.formInline[item]) && this.formInline[item]?.length) {
            params[item] = this.formInline[item]?.join(',');
          }
        });
        this.formInline.companyId && (params.companyId = this.formInline.companyId);
        let excTypes = '';
        if (params?.riskTypes) excTypes += params.riskTypes;
        if (params?.abnormalTypes) {
          excTypes += `${excTypes ? ',' : ''}${params.abnormalTypes}`;
        }
        if (excTypes) params.excTypes = excTypes;
        delete params.riskTypes;
        delete params.abnormalTypes;
        const { data, code, message } = await getExceptionPageList(params);
        if (code === 200) {
          this.tableData = data?.rows || [];
          this.total = data.totalRows;
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.tableLoading = false;
      }
    },
    handleSizeChange(value) {
      this.paginationParams.pageNo = 1;
      this.paginationParams.pageSize = value;
      this.getTableData();
    },
    handleCurrentChange(value) {
      this.paginationParams.pageNo = value;
      this.getTableData();
    },
    transformDetails({ dic, dataCodeName }) {
      const {
        start_value = '',
        start_datetime = '',
        end_value = '',
        end_datetime = '',
        unit = '',
        change_value = '',
        change_sign = '',
        msg = '',
      } = dic;

      const startTime = start_datetime.substring(8, 12);
      const endTime = end_datetime.substring(8, 12);

      const iconMap = new Map([
        ['+', '▲'],
        ['-', '▼'],
        ['*', '✱'],
      ]);

      let str;

      if (change_sign === '*') {
        str = `${dataCodeName}: ${msg}`;
      } else {
        str = `${dataCodeName}: ${msg} ${start_value}${unit}(${startTime.substring(
          0,
          2
        )}:${startTime.substring(2, 4)}) ${change_value}${iconMap.get(
          change_sign
        )}   ${end_value}${unit}(${endTime.substring(0, 2)}:${endTime.substring(2, 4)})`;
      }

      return str;
    },
    async getLineList() {
      const resData = await instance.get('/api/cfbgc-warning/CurveUnit/list');
      if (resData.code == 200) {
        this.lineList = resData.data;
      }
    },
    getLineName(key) {
      const name = this.lineList.find((item) => item.dataCode == key)?.englishDesc || key;
      return name;
    },
    async abnormalRecordsDetail(row) {
      await this.getLineList();
      this.exceptionDetails = [];
      const params = {
        id: row.id,
      };
      const { code, message, data } = await getExceptionDetail(params);
      if (code === 200) {
        this.exceptionDetails = data;

        if (data?.showDic) {
          const showDicData = JSON.parse(data.showDic);
          if (showDicData) {
            const chooseCurveList = Object.keys(showDicData);
            chooseCurveList.forEach((item, index) => {
              this.dicTableData[index] = {
                dataCodeName: this.getLineName(item),
                dic: showDicData[item],
                key: Math.random(),
              };
            });
          }
        }

        this.showMsg = data.showMsg;

        const { id, excResultValue, updateTime, excMsg, wellEditRecordList, fileList } = data;

        this.exceptionDetailsTableData = [
          {
            id,
            excResultValue: excResultValue ?? '-',
            updateTime: updateTime ?? '-',
            excMsg: excMsg ?? '-',
            createUser: wellEditRecordList?.[0]?.createUser ?? '-',
            fileList,
          },
        ];

        if (wellEditRecordList.length) {
          this.modifyTableData = wellEditRecordList;
        } else {
          this.modifyTableData = [{ createUser: '-', createTime: '-' }];
        }

        this.exceptionDetailsConfig.isDialogShow = true;
        this.exceptionDetailsConfig.dialogTitle = '异常详情';
      } else {
        this.$message.error(message);
      }
    },
    closeExceptionDetailsDialogHandler() {
      this.exceptionDetailsConfig.isDialogShow = false;
      this.exceptionDetails = [];
      this.dicTableData = [];
      this.showMsg = '';
    },
    abnormalRecordsSeeCurve(row) {
      this.rowScope = row;
      this.curveDialogConfig.dialogTitle = '查看曲线';
      this.curveDialogConfig.isDialogShow = true;
      this.$nextTick(async () => {
        setTimeout(async () => {
          await this.getWarnDetails(row.id);
          const { sdatetime } = row;
          if (sdatetime) {
            const startTime = dayjs(sdatetime)
              .subtract(1, 'hours')
              .valueOf();
            const endTime = dayjs(sdatetime)
              .add(1, 'hours')
              .valueOf();
            this.$refs['curveTemplateRef'].abnormalRowScope = this.abnormalRowScope;
            this.$refs['curveTemplateRef'].isRealTime = true;
            await this.$refs['curveTemplateRef']?.changeStatusHandler(
              null,
              startTime,
              endTime,
              true
            );
            this.$nextTick(() => {
              setTimeout(() => {
                this.$refs['curveTemplateRef']?.widgetScroll(dayjs(sdatetime).valueOf());
              }, 2000);
            });
          }
        }, 1000);
      });
    },
    curveConfirmHandler() {},
    curveCloseHandler() {
      this.curveKey++;
      this.curveDialogConfig.isDialogShow = false;
    },
    async getWarnDetails(id) {
      const params = { id };
      const { code, message, data } = await getExceptionDetail(params);
      if (code === 200) {
        this.abnormalRowScope = data;
      } else {
        this.$message.error(message);
      }
    },
    async exceptionDetailsEditor(row) {
      try {
        await this.getWarnDetails(row.id);
        this.handleDialogConfig.dialogTitle = '异常处理';
        this.handleDialogConfig.isDialogShow = true;
      } catch (error) {
        console.log(error);
      }
    },

    handleConfirmHandler() {
      this.$refs['handleFormRef']?.$refs?.ruleForm?.validate(async (valid) => {
        if (!valid) return;
        const excResultValue = this.$refs['handleFormRef']?.excResultValue;
        const data = {
          ...this.abnormalRowScope,
          ...this.$refs['handleFormRef']?.ruleForm,
          excResultValue,
        };
        for (const prop in data) {
          if (data[prop] == null) delete data[prop];
        }
        const copyFile = data.file;
        delete data.file;
        delete data.fileList;
        const { code, message } = await updateException(data);
        if (code === 200) {
          const fileList = this.$refs['handleFormRef']?.fileList;
          const oldFileList = this.abnormalRowScope.fileList;
          let deleteList;
          if (fileList.length !== oldFileList.length) {
            deleteList = oldFileList.filter((item) => {
              let bool = true;
              fileList.forEach((v) => {
                if (v.id === item.id) bool = false;
              });
              return bool;
            });
          }
          if (copyFile?.length || deleteList?.length) {
            if (deleteList?.length) {
              deleteList.forEach(async (item) => {
                const idParams = {
                  id: item.id,
                };
                await deleteFile(idParams);
              });
            }

            if (copyFile.length) {
              const realFileList = copyFile.filter((item) => !item.id);
              if (realFileList.length) {
                this.$refs['handleFormRef'].fileList = realFileList;
                this.handleBtnLoading = true;
                this.$refs['handleFormRef'].warnId = this.abnormalRowScope.id;
                setTimeout(() => {
                  this.$refs['handleFormRef']?.$refs?.uploadRef?.submit();
                });
              } else {
                this.uploadSuccess();
              }
            } else {
              this.uploadSuccess();
            }
          } else {
            this.uploadSuccess();
          }
        } else {
          this.$message.error(message);
        }
      });
    },
    uploadSuccess() {
      this.$message.success('编辑成功!');
      this.handleCloseHandler();
      this.closeExceptionDetailsDialogHandler();
      this.submitForm();
    },
    handleCloseHandler() {
      this.handleBtnLoading = false;
      this.$refs['handleFormRef'].rebaseKey++;
      this.$refs['handleFormRef']?.$refs?.ruleForm?.resetFields();
      this.$refs['handleFormRef']?.$refs?.uploadRef?.abort();
      this.handleDialogConfig.isDialogShow = false;
      this.dialogKey++;
    },
    async companyChange(value) {
      if (value) {
        const arr = [];
        const findBlockNames = this.companyList.find((i) => i.value === value)?.blockNames;
        if (findBlockNames?.length) {
          findBlockNames?.forEach((v) => {
            const vItem = {
              label: v.name,
              value: v.shortName,
            };
            arr.push(vItem);
          });
        }
        this.blockOptions = arr;
      } else {
        this.getBlockOptions();
      }
    },
    async getCompanyList() {
      try {
        const userName = localStorage.getItem('username');
        const params = {
          systemId: 'cc004f80-e7ed-432e-b633-afb8cf05a288',
          userId: userName,
        };
        const { data, code, message } = await getAuthCompany(params);
        if (code === 200) {
          this.companyList = data.map((item) => ({
            label: item.bindName,
            value: item.id,
            blockNames: item.blockNameVos,
          }));
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getCondTypesList() {
      try {
        const params = {
          typeId: 100,
        };
        const { code, message, data } = await instance.get('/api/cfbgc-warning/sysDictData/list', {
          params,
        });
        if (code === 200) {
          this.condTypesList = data.map((item) => ({
            label: item.value,
            value: item.code,
          }));
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getRiskTypesList() {
      try {
        const params = {
          typeId: 200,
        };
        const { code, message, data } = await instance.get('/api/cfbgc-warning/sysDictData/list', {
          params,
        });
        if (code === 200) {
          this.riskTypesList = data;
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getAbnormalTypesList() {
      try {
        const params = {
          typeId: 300,
        };
        const { code, message, data } = await instance.get('/api/cfbgc-warning/sysDictData/list', {
          params,
        });
        if (code === 200) {
          this.abnormalTypesList = data;
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getWellNameList() {
      try {
        const userName = localStorage.getItem('username');
        const params = {
          systemId: 'cc004f80-e7ed-432e-b633-afb8cf05a288',
          userId: userName,
        };
        const { data, code, message } = await getAuthWell(params);
        if (code === 200) {
          this.wellNameList = data.map((item) => ({
            label: item.bindName,
            value: item.bindName,
          }));
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getBlockOptions() {
      const userName = localStorage.getItem('username');
      const params = {
        systemId: 'cc004f80-e7ed-432e-b633-afb8cf05a288',
        userId: userName,
      };
      const { data, code, message } = await getAuthBlock(params);
      if (code === 200) {
        this.blockOptions = data.map((item) => ({
          label: item.bindName,
          value: item.bindName,
        }));
      } else {
        this.$message.error(message);
      }
    },
    async getWarnSourceList() {
      try {
        const params = {
          typeId: 120,
        };
        const { code, message, data } = await instance.get('/api/cfbgc-warning/sysDictData/list', {
          params,
        });
        if (code === 200) {
          this.warnSourceList = data;
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    init() {
      this.getTableData();
      this.getCompanyList();
      this.getCondTypesList();
      this.getRiskTypesList();
      this.getAbnormalTypesList();
      this.getBlockOptions();
      this.getWellNameList();
      this.getWarnSourceList();
    },
  },
};
</script>

<style lang="scss" scoped>
.exception-manage {
  &__form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    padding: 0 20px;
    margin-bottom: 10px;
    background: #fff;

    :deep .el-form {
      width: 100%;

      .el-form-item {
        margin-bottom: 0;
      }
    }
  }

  &__checkbox {
    height: 90px;
    padding: 15px 20px;
    background: #fff;

    .condition-form-item {
      :deep .el-form-item__content {
        display: flex;

        .check-all {
          margin-right: 45px;
        }

        .condition-check-group {
          display: flex;
          flex-wrap: wrap;

          label {
            margin-right: 45px;
          }
        }
      }
    }
  }

  &__detail-checkbox {
    display: flex;
    height: 120px;
    padding: 20px 20px;
    margin-top: 10px;
    background: #fff;

    .risk {
      display: flex;
      flex-direction: column;
      width: 55%;

      .condition-form-item {
        :deep .el-form-item__content {
          display: flex;

          .condition-check-group {
            display: flex;
            overflow: auto;

            label {
              margin-right: 5px;
            }
          }
        }
      }

      :deep .el-checkbox.is-bordered.is-checked {
        border-color: #ff6c47;
      }

      :deep .el-checkbox__input.is-checked + .el-checkbox__label {
        color: #ff6c47;
      }

      :deep .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: #ff6c47;
        border-color: #ff6c47;
      }
    }

    .abnormal {
      display: flex;
      flex-direction: column;
      width: 45%;

      .condition-form-item {
        :deep .el-form-item__content {
          display: flex;

          .condition-check-group {
            display: flex;
            overflow: auto;

            label {
              margin-right: 5px;
            }
          }
        }
      }

      .special-treatment {
        :deep .el-form-item__content {
          display: flex;

          .condition-check-group {
            display: flex;
            overflow: auto;

            label {
              margin-right: 0;
            }
          }
        }
      }

      :deep .el-checkbox.is-bordered.is-checked {
        border-color: #ff6c47;
      }

      :deep .el-checkbox__input.is-checked + .el-checkbox__label {
        color: #ff6c47;
      }

      :deep .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: #ff6c47;
        border-color: #ff6c47;
      }
    }
  }

  &__table {
    height: calc(100% - 130px);
    padding: 20px;
    margin-top: 10px;
    font-size: 16px;
    background: #fff;
  }
}

.pagination-container {
  padding: 10px 0;
  text-align: right;
}

.exception-details-content {
  .basic-information {
    display: flex;
    flex-wrap: wrap;
    padding-left: 30px;

    &__item {
      width: 14%;
      margin-bottom: 20px;

      div:first-child {
        font-weight: 600;
        color: #a9b5c3;
      }

      div:last-child {
        font-weight: 600;
      }
    }
  }

  .table-container {
    .border-table {
      margin-bottom: 20px;
      border: 1px solid #ebeef5;
    }
  }

  .modify-record {
    padding-bottom: 30px;
    margin-top: 20px;
    overflow: hidden;

    .title {
      margin-bottom: 10px;
      font-weight: 600;
    }

    &-table {
      border: 1px solid #ebeef5;

      &__item {
        display: flex;
        align-items: center;
        height: 48px;
        border-bottom: 1px solid #ebeef5;

        &:last-child {
          border-bottom: none;
        }

        div:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30%;
          height: 100%;
          border-right: 1px solid #ebeef5;
        }

        div:nth-child(2) {
          display: flex;
          align-items: center;
          width: 70%;
          height: 100%;
          padding-left: 50px;
        }

        .label {
          font-weight: 600;
        }
      }
    }
  }

  :deep .my-label {
    width: 15%;
    font-weight: 600;
    color: #000;
    text-align: center;
    background: #fff;
  }

  :deep .my-content {
    padding: 0;

    .special-handling {
      display: flex;
      flex-direction: column;

      &-item {
        height: 40px;
        padding: 0 15px;
        line-height: 40px;
        border-top: 1px solid #ebeef5;

        &:first-child {
          border: none;
        }
      }
    }

    .msg {
      padding: 0 15px;
    }
  }
}

.file-list-content {
  display: flex;
  flex-direction: column;

  &__item {
    color: #1688d3;
    cursor: pointer;
  }
}

:deep .el-dialog__close {
  color: #fff;

  &:hover {
    color: #fff;
  }
}

:deep .el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

:deep .custom-form-item {
  .el-form-item__content {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 0 10px !important;

    .exception-button {
      width: calc(33% - 9px);
    }
  }
}
</style>
