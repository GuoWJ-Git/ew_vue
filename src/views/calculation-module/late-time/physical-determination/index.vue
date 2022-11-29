<template>
  <div class="physical-determination">
    <div class="add-btn">
      <el-button class="custom-button" type="primary" size="small" @click="dialogVisible = true">
        计算
      </el-button>
    </div>
    <div ref="tableContainerRef" class="table-container">
      <el-table
        v-if="tableHeight"
        v-loading="tableLoading"
        :data="tableData"
        style="width: 100%"
        :height="tableHeight"
        stripe
      >
        <template v-for="item in tableColumn" :key="item.label">
          <el-table-column v-bind="item" />
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

    <el-dialog
      custom-class="custom-dialog"
      :visible="dialogVisible"
      title="实物测定法"
      width="810px"
      append-to-body
      @close="resetForm('formRef')"
    >
      <el-form ref="formRef" :model="formModel" :rules="formRules" label-width="160px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="井名:" prop="wid">
              <el-select
                v-model="formModel.wid"
                popper-class="config-dialog-select"
                placeholder="请选择井名"
                style="width: 100%"
              >
                <el-option
                  v-for="item in wellNameOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="开泵时间(min):" prop="openPumpTime">
              <el-input v-model="formModel.openPumpTime" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="实物指标剂返出井口时间(min):" prop="physicalTime">
              <el-input v-model="formModel.physicalTime" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="加重钻杆内容积(L):" prop="heavyWeightDrillPipeVolume">
              <el-input
                v-model="formModel.heavyWeightDrillPipeVolume"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="钻杆内容积(L):" prop="drillPipeVolume">
              <el-input v-model="formModel.drillPipeVolume" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="钻杆外容积(L):" prop="drillCollarVolume">
              <el-input v-model="formModel.drillCollarVolume" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="排量(L/min):" prop="flowpump">
              <el-input v-model="formModel.flowpump" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <div class="calculate-result">{{ calculateResult }}</div>
          <el-button type="primary" @click="calculate">
            计算迟到时间
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import {
  getPhysicalDeterminationList,
  physicalDeterminationCalculate,
} from '@/api/calculationModule/lateTime';
import { getAuthWell } from '@/api/realTimeMonitor/all';
import { pageCountCalculate } from '@/utils/numbers';

import { tableColumn } from './model';

export default {
  name: 'PhysicalDetermination',
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
        wid: '',
        openPumpTime: '',
        physicalTime: '',
        heavyWeightDrillPipeVolume: '',
        drillPipeVolume: '',
        drillCollarVolume: '',
        flowpump: '',
      },
      formRules: {
        wid: [
          {
            required: true,
            message: '请选择',
            trigger: 'change',
          },
        ],
        openPumpTime: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur',
          },
        ],
        physicalTime: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur',
          },
        ],
        drillPipeVolume: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur',
          },
        ],
        heavyWeightDrillPipeVolume: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur',
          },
        ],
        drillCollarVolume: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur',
          },
        ],
        flowpump: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur',
          },
        ],
      },
      wellNameOptions: [],
      calculateResult: '',
    };
  },
  computed: {
    pageTotalsTxt() {
      const pageNoTotal = pageCountCalculate(this.total, this.paginationParams.pageSize);
      return `共${this.total}条记录  第 ${this.paginationParams.pageNo}/${pageNoTotal} 页`;
    },
  },
  mounted() {
    console.log(11)
    this.getTableData();
    const tableContainerHeight = this.$refs['tableContainerRef']?.offsetHeight;
    tableContainerHeight && (this.tableHeight = tableContainerHeight - 88);

    this.getWellNameOptions();
  },
  methods: {
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
        const userName = localStorage.getItem('username');
        const params = {
          ...this.paginationParams,
          userId: userName,
          systemId: 'cc004f80-e7ed-432e-b633-afb8cf05a288',
        };
        console.log(params);
        const { data, code, message } = await getPhysicalDeterminationList(params);
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
      this.calculateResult = '';
    },

    calculate() {
      this.$refs['formRef']?.validate(async (valid) => {
        if (!valid) return;
        try {
          const params = {
            ...this.formModel,
          };
          const { code, message, data } = await physicalDeterminationCalculate(params);
          if (code === 200) {
            this.calculateResult = data.lateTime + ' min';
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
        const userName = localStorage.getItem('username');
        const params = {
          systemId: 'cc004f80-e7ed-432e-b633-afb8cf05a288',
          userId: userName,
          wellState: 1,
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
};
</script>

<style lang="scss" scoped>
.physical-determination {
  display: flex;
  flex-direction: column;

  .add-btn {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 60px;
    padding: 0 20px;
    margin-bottom: 10px;
    background: #fff;
  }

  .table-container {
    height: calc(100% - 70px);
    padding: 20px;
    background: #fff;
  }
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
    display: flex;
    align-items: center;
    padding: 15px 30px;
    background-color: #1688d3;

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
  align-items: center;
  justify-content: flex-end;

  .calculate-result {
    margin-right: 30px;
    color: red;
  }
}
</style>
