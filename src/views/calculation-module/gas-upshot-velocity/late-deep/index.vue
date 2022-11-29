<template>
  <div class="late-deep">
    <div class="add-btn">
      <el-button
        class="custom-button"
        type="primary"
        @click="dialogVisible = true"
        size="small"
        >计算</el-button
      >
    </div>
    <div class="table-container" ref="tableContainerRef">
      <el-table
        v-if="tableHeight"
        v-loading="tableLoading"
        :data="tableData"
        style="width: 100%"
        :height="tableHeight"
        stripe
      >
        <template v-for="item in tableColumn">
          <el-table-column :key="item.label" v-bind="item" />
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
          layout="prev, pager, next, sizes, jumper"
          :total="total"
          background
        >
        </el-pagination>
      </div>
    </div>

    <el-dialog
      custom-class="custom-dialog"
      :visible="dialogVisible"
      title="迟到深度法"
      width="810px"
      @close="resetForm('formRef')"
      append-to-body
    >
      <el-form
        ref="formRef"
        :model="formModel"
        :rules="formRules"
        label-width="160px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="井名:" prop="wid">
              <el-select
                popper-class="config-dialog-select"
                v-model="formModel.wid"
                placeholder="请选择井名"
                style="width: 100%"
              >
                <el-option
                  v-for="item in wellNameOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="油层深度(m):" prop="oilDepth">
              <el-input
                v-model="formModel.oilDepth"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="气体最高点时迟到深度(m):" prop="logDepth">
              <el-input
                v-model="formModel.logDepth"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="泥浆静止时间(min):" prop="mudStaticVolume">
              <el-input
                v-model="formModel.mudStaticVolume"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <div class="calculate-result">
            {{ calculateResult }}
          </div>
          <el-button type="primary" @click="calculate">
            计算上窜速度
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { pageCountCalculate } from "@/utils/number";
import { tableColumn } from "./model";
import {
  getLogDepthList,
  logDepthCalculate,
} from "@/api/calculationModule/gasUpshotVelocity";
import { getAuthWell } from "@/api/realTimeMonitor/all";

export default {
  name: "LateDeep",
  data() {
    return {
      tableHeight: 0,
      tableColumn,
      tableLoading: false,
      total: 0,
      paginationParams: {
        pageNo: 1,
        pageSize: 20,
      },
      tableData: [],

      dialogVisible: false,
      formModel: {
        wid: "",
        oilDepth: "",
        logDepth: "",
        mudStaticVolume: "",
      },
      formRules: {
        wid: [
          {
            required: true,
            message: "请选择",
            trigger: "change",
          },
        ],
        oilDepth: [
          {
            required: true,
            message: "请输入",
            trigger: "blur",
          },
        ],
        logDepth: [
          {
            required: true,
            message: "请输入",
            trigger: "blur",
          },
        ],
        mudStaticVolume: [
          {
            required: true,
            message: "请输入",
            trigger: "blur",
          },
        ],
      },
      wellNameOptions: [],
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
    headClass() {
      return "background: #A9DDFF; color: #000; font-weight: 600; height: 54px;";
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
    async getTableData() {
      try {
        this.tableLoading = true;
        const userName = localStorage.getItem("username");
        const params = {
          ...this.paginationParams,
          userId: userName,
          systemId: "cc004f80-e7ed-432e-b633-afb8cf05a288",
        };
        const { data, code, message } = await getLogDepthList(params);
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

    resetForm(formEl) {
      this.$refs?.[formEl]?.resetFields();
      this.dialogVisible = false;
      this.calculateResult = "";
    },

    calculate() {
      this.$refs["formRef"]?.validate(async (valid) => {
        if (!valid) return;
        try {
          const params = {
            ...this.formModel,
          };
          const { code, message, data } = await logDepthCalculate(params);
          if (code === 200) {
            this.calculateResult = data.oilGasUpwardFlowVelocity + " m/min";
            this.paginationParams.pageNo = 1;
            this.getTableData();
          } else {
            this.$message.error(message);
          }
        } catch (error) {
          console.log(error);
        }
      });
    },
    async getWellNameOptions() {
      try {
        const userName = localStorage.getItem("username");
        const params = {
          systemId: "cc004f80-e7ed-432e-b633-afb8cf05a288",
          userId: userName,
          wellState: 1
        };
        const { data, code, message } = await getAuthWell(params);
        if (code === 200) {
          this.wellNameOptions = data.map((item) => ({
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
    this.getWellNameOptions();
  },
};
</script>

<style lang="scss" scoped>
.late-deep {
  display: flex;
  flex-direction: column;

  .add-btn {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 10px;
    background: #fff;
    height: 60px;
    padding: 0 20px;
  }

  .table-container {
    height: calc(100% - 70px);
    background: #fff;
    padding: 20px;
  }
}

.el-table {
  font-size: 16px;
}

:deep .custom-dialog {
  &__content {
    padding: 0 20px;
  }

  .el-dialog__body {
    padding-top: 20px;
    padding-bottom: 5px;
    padding-left: 20px;
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

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .calculate-result {
    margin-right: 30px;
    color: red;
  }
}
</style>
