<template>
  <div class="leakage-overflow-statistics">
    <div class="leakage-overflow-statistics__form">
      <el-form
        class="custom-form"
        :inline="true"
        :model="formInline"
        ref="formInline"
        size="small"
        label-width="50px"
      >
        <el-form-item prop="wids" label="井名">
          <el-select
            class="custom-input"
            popper-class="config-dialog-select"
            v-model="formInline.wids"
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
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="searchTime" label="时间">
          <el-date-picker
            style="width: 360px"
            v-model="formInline.searchTime"
            type="datetimerange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button
            class="custom-button"
            type="primary"
            @click="submitForm"
            size="small"
            >查询</el-button
          >
          <el-button
            class="custom-button"
            @click="resetForm('formInline')"
            size="small"
            >重置</el-button
          >
        </el-form-item>
        <el-form-item class="add-btn">
          <el-button
            class="custom-button"
            type="primary"
            @click="addHandler"
            size="small"
            >新增</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <div class="leakage-overflow-statistics__table" ref="tableContainerRef">
      <el-table
        v-if="tableHeight"
        v-loading="tableLoading"
        :data="tableData"
        style="width: 100%"
        :height="tableHeight"
        stripe
      >
        <template v-for="item in tableColumn">
          <el-table-column :key="item.label" v-if="!item.slot" v-bind="item" />
          <el-table-column
            :key="item.prop"
            :label="item.label"
            :width="item.width"
            v-else
          >
            <template slot-scope="scope">
              <div v-if="item.prop === 'switchState'">
                <el-switch
                  v-model="scope.row.switchState"
                  :active-value="1"
                  :inactive-value="0"
                  @change="changeSwitchHandler($event, scope.row)"
                >
                </el-switch>
              </div>
              <div v-else>
                <el-button
                  type="text"
                  style="color: #00b994"
                  @click="detailHandler(scope.row)"
                  class="table-custom-button"
                  >详情</el-button
                >
                <el-button
                  type="text"
                  style="color: #ff6c47"
                  @click="deleteHandler(scope.row)"
                  class="table-custom-button"
                  >删除</el-button
                >
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <div v-if="tableData.length > 0 && total" class="pagination-container">
        <div class="custom-pagination-totals">{{ pageTotalsTxt }}</div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="paginationParams.pageNo"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="paginationParams.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          background
        >
        </el-pagination>
      </div>
    </div>

    <el-dialog
      custom-class="custom-dialog"
      :visible="dialogVisible"
      title="新增"
      width="540px"
      @close="resetDialogForm('formRef')"
      append-to-body
    >
      <el-form
        ref="formRef"
        :model="formModel"
        :rules="formRules"
        label-width="100px"
      >
        <el-row>
          <el-col>
            <el-form-item label="井号:" prop="wid">
              <el-select
                popper-class="config-dialog-select"
                v-model="formModel.wid"
                placeholder="请选择井号"
                style="width: 100%"
                filterable
              >
                <el-option
                  v-for="item in wellNameList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col>
            <el-form-item label="开口状态:" prop="openClose">
              <el-radio-group v-model="formModel.openClose">
                <el-radio label="open" style="margin-right: 30px"
                  >开口</el-radio
                >
                <el-radio label="close">闭口</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <el-col>
            <el-form-item label="类型:" prop="code">
              <el-select
                popper-class="config-dialog-select"
                v-model="formModel.code"
                placeholder="请选择类型"
                style="width: 100%"
              >
                <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button
            size="small"
            icon="el-icon-circle-close"
            @click="resetDialogForm('formRef')"
          >
            取消
          </el-button>
          <el-button
            icon="el-icon-circle-check"
            type="primary"
            size="small"
            @click="submit"
          >
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { LEAKAGE_OVERFLOW_CRITERIA } from "@/enums/cache";
import { pageCountCalculate } from "@/utils/number";
import { useStorage, getStorage } from "@/utils/storage";
import { tableColumn } from "./model";
import { getAuthWell } from "@/api/realTimeMonitor/all";
import {
  getLeakageOverflowStatisticsList,
  addLeakageOverflowStatistics,
  deleteLeakageOverflowStatistics,
  leakageOverflowStatisticsSwitch,
} from "@/api/calculationModule/leakageOverflowStatistics";
import { getDictionaryList } from "@/api/wellsiteManage/exceptionManage";

export default {
  name: "LeakageOverflowStatistics",
  data() {
    return {
      formInline: {
        wids: getStorage(LEAKAGE_OVERFLOW_CRITERIA)?.wids ?? "",
        searchTime: getStorage(LEAKAGE_OVERFLOW_CRITERIA)?.searchTime ?? [],
      },
      paginationParams: {
        pageNo: 1,
        pageSize: 20,
      },
      total: 0,
      tableHeight: 0,
      tableColumn,
      tableLoading: false,
      tableData: [],
      dialogVisible: false,
      formModel: {
        wid: "",
        status: 1,
        openClose: "open",
        code: "",
      },
      wellNameList: [],
      typeOptions: [],
      typeList: [],
      formRules: {
        wid: [
          {
            required: true,
            message: "请选择",
            trigger: "change",
          },
        ],
        status: [
          {
            required: true,
            message: "请选择",
            trigger: "change",
          },
        ],
        openClose: [
          {
            required: true,
            message: "请选择",
            trigger: "change",
          },
        ],
        code: [
          {
            required: true,
            message: "请选择",
            trigger: "change",
          },
        ],
      },
    };
  },
  computed: {
    pageTotalsTxt() {
      const pageNoTotal = pageCountCalculate(
        this.total,
        this.paginationParams.pageSize
      );
      return `共${this.total}条记录  第 ${this.paginationParams.pageNo}/${pageNoTotal} 页`;
    },
  },
  methods: {
    submitForm() {
      const cacheValue = {
        value: {
          [LEAKAGE_OVERFLOW_CRITERIA]: {
            ...this.formInline,
          },
        },
      };
      useStorage(cacheValue);
      this.paginationParams.pageNo = 1;
      this.getTableData();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.submitForm();
    },
    addHandler() {
      this.dialogVisible = true;
    },
    async getTableData() {
      try {
        this.tableLoading = true;
        const userName = localStorage.getItem("username");
        const params = {
          ...this.paginationParams,
          userId: userName,
          systemId: "cc004f80-e7ed-432e-b633-afb8cf05a288",
        };
        this.formInline.wids?.length &&
          (params.wids = this.formInline.wids?.join(","));
        params.searchBeginTime = this.formInline.searchTime?.[0];
        params.searchEndTime = this.formInline.searchTime?.[1];
        const { data, code, message } = await getLeakageOverflowStatisticsList(
          params
        );
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

    resetDialogForm(formEl) {
      this.$refs?.[formEl]?.resetFields();
      this.dialogVisible = false;
    },

    submit() {
      this.$refs["formRef"]?.validate(async (valid) => {
        if (!valid) return;
        const userName = localStorage.getItem("username");
        const { value = null } = this.typeList?.find(
          (item) => item.code === this.formModel.code
        );
        const data = {
          ...this.formModel,
          userId: userName,
          value,
        };
        const { code, message } = await addLeakageOverflowStatistics(data);
        if (code === 200) {
          this.$message.success("新增成功!");
          this.submitForm();
          this.resetDialogForm("formRef");
        } else {
          this.$message.error(message);
        }
      });
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

    detailHandler(row) {
      const cacheValue = {
        value: {
          WID: row.wid,
          GROUT_ID: row.id,
          useWid: false,
          useGroutId: true,
        },
      };
      useStorage(cacheValue);
      this.$router.push({
        path: "/real-time-monitor/grout-record-curve",
        query: {
          type: "statistics",
        },
      });
    },
    async deleteHandler(row) {
      this.$confirm("确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        try {
          const { code, message } = await deleteLeakageOverflowStatistics(row);
          if (code === 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.submitForm();
          } else {
            this.$message.error(message);
          }
        } catch (error) {
          console.log(error);
        }
      });
    },

    async changeSwitchHandler(value, row) {
      const arr = [0, 1];
      try {
        const params = {
          id: row.id,
          status: value,
        };
        const { code, message } = await leakageOverflowStatisticsSwitch(params);
        if (code === 200) {
          this.$message.success("编辑成功!");
          this.getTableData();
        } else {
          this.$message.error(message);
          row.switchState = arr.find((item) => item !== value);
        }
      } catch (error) {
        row.switchState = arr.find((item) => item !== value);
        console.log(error);
      }
    },

    async getTypeOptions() {
      try {
        const params = {
          typeId: 400,
        };
        const { data, message, code } = await getDictionaryList(params);
        if (code === 200) {
          this.typeList = data;
          this.typeOptions = data.map((item) => ({
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
    async getWellNameList() {
      try {
        const userName = localStorage.getItem("username");
        const params = {
          systemId: "cc004f80-e7ed-432e-b633-afb8cf05a288",
          userId: userName,
          wellState: 1
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
  },
  mounted() {
    this.getTableData();
    const tableContainerHeight = this.$refs["tableContainerRef"]?.offsetHeight;
    tableContainerHeight && (this.tableHeight = tableContainerHeight - 88);

    this.getWellNameList();
    this.getTypeOptions();
  },
};
</script>

<style lang="scss" scoped>
.leakage-overflow-statistics {
  display: flex;
  flex-direction: column;

  &__form {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background: #fff;
    height: 60px;
    padding-left: 20px;

    .add-btn {
      position: absolute;
      right: 10px;
    }

    :deep .el-form {
      .el-form-item {
        margin-bottom: 0;
      }
    }
  }

  &__table {
    height: calc(100% - 70px);
    box-sizing: border-box;
    background: #fff;
    padding: 20px;
  }
}

:deep .custom-dialog {
  &__content {
    padding: 0 20px;
  }

  .el-dialog__body {
    padding-top: 20px;
    padding-bottom: 5px;
  }

  .el-dialog__header {
    background-color: #1688d3;
    display: flex;
    align-items: center;
    padding: 15px 30px;

    .el-dialog__title {
      color: #fff;
    }
  }

  .el-dialog__footer {
    padding-top: 0;
  }

  .el-icon-close {
    color: #fff;
  }

  .el-col {
    margin-bottom: 20px;
  }
}
</style>
