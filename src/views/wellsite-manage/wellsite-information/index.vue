<template>
  <div class="wellsite-information">
    <div v-if="!showAbnormal" class="wellsite-information__form">
      <el-form
        ref="formInline"
        class="custom-form"
        :inline="true"
        :model="formInline"
        size="small"
        label-width="60px"
      >
        <el-form-item prop="companyName" label="作业者">
          <el-select
            v-model="formInline.companyName"
            class="custom-input"
            popper-class="config-dialog-select"
            filterable
            multiple
            collapse-tags
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
        <el-form-item prop="blockNames" label="区块">
          <el-select
            v-model="formInline.blockNames"
            class="custom-input"
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
        <el-form-item prop="wids" label="井名">
          <el-select
            v-model="formInline.wids"
            class="custom-input"
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
        <el-form-item>
          <el-form-item prop="wellState" label="井状态">
            <el-select
              v-model="formInline.wellState"
              class="custom-input"
              placeholder="请选择"
              popper-class="config-dialog-select"
              @change="changeWellState"
            >
              <el-option
                v-for="item in wellTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-button class="custom-button" type="primary" @click="submitForm">
            查询
          </el-button>
          <el-button class="custom-button" @click="resetForm('formInline')">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="!showAbnormal" ref="tableContainerRef" class="wellsite-information__table">
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
              <div v-if="item.prop === 'wellState'">
                <el-switch
                  v-model="scope.row.wellState"
                  :active-value="1"
                  :inactive-value="0"
                  @change="changeSwitchHandler($event, scope.row)"
                ></el-switch>
              </div>
              <div v-else>
                <el-button
                  type="text"
                  class="table-custom-button"
                  @click="editorHandler(scope.row)"
                >
                  编辑
                </el-button>
                <el-button
                  type="text"
                  style="color: #00b994"
                  class="table-custom-button"
                  @click="detailHandler(scope.row)"
                >
                  详情
                </el-button>
                <el-button
                  type="text"
                  style="color: #ff6c47"
                  class="table-custom-button"
                  @click="abnormalHandler(scope.row)"
                >
                  异常记录
                </el-button>
              </div>
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

    <div v-if="showAbnormal" class="abnormal-records">
      <div class="abnormal-records__form">
        <el-form ref="abnormalRecordsForm" :inline="true" :model="abnormalRecordsForm" size="small">
          <el-form-item prop="searchBeginTime" label="开始日期">
            <el-date-picker
              v-model="abnormalRecordsForm.searchBeginTime"
              type="datetime"
              style="width: 100%"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
          </el-form-item>
          <el-form-item prop="searchEndTime" label="结束日期">
            <el-date-picker
              v-model="abnormalRecordsForm.searchEndTime"
              type="datetime"
              style="width: 100%"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
          </el-form-item>

          <el-form-item>
            <el-button
              class="custom-button"
              type="primary"
              size="small"
              @click="abnormalRecordsSubmitForm"
            >
              查询
            </el-button>
            <el-button
              class="custom-button"
              size="small"
              @click="abnormalRecordsResetForm('abnormalRecordsForm')"
            >
              重置
            </el-button>
          </el-form-item>
        </el-form>

        <div>
          <el-button class="custom-button" type="warning" size="small" @click="abnormalBackHandler">
            返回
          </el-button>
        </div>
      </div>

      <div class="abnormal-records__table">
        <el-table
          v-if="tableHeight"
          v-loading="tableLoading"
          :data="abnormalRecordsTableData"
          style="width: 100%"
          :height="tableHeight"
          stripe
        >
          <template v-for="item in abnormalRecordsTableColumn">
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
        <div
          v-if="abnormalRecordsTableData.length > 0 && abnormalRecordsTotal"
          class="pagination-container"
        >
          <el-pagination
            :current-page="abnormalPaginationParams.pageNo"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="abnormalPaginationParams.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="abnormalRecordsTotal"
            background
            @size-change="abnormalHandleSizeChange"
            @current-change="abnormalHandleCurrentChange"
          ></el-pagination>
        </div>
      </div>
    </div>

    <free-dialog
      custom-class="custom-dialog"
      :title="editorDialogConfig.dialogTitle"
      width="1700px"
      top="5vh"
      :visible="editorDialogConfig.isDialogShow"
      @on-confirm="editorConfirmHandler"
      @on-cancel="closeEditorHandler"
      @on-close="closeEditorHandler"
    >
      <div class="editor-information-content">
        <div class="basic-information">
          <div class="title">
            基本信息
          </div>
          <div class="basic-information-content">
            <el-form
              ref="basicForm"
              :inline="true"
              :model="basicForm"
              size="small"
              :rules="basicRules"
              class="basic-form"
              :validate-on-rule-change="false"
            >
              <el-row>
                <el-col :span="3">
                  <el-form-item prop="wid" label="井名:">
                    <div>{{ rowScope?.wid ?? '-' }}</div>
                  </el-form-item>
                </el-col>
                <el-col :span="3">
                  <el-form-item prop="platformName" label="平台:">
                    <el-select
                      v-model="basicForm.platformName"
                      placeholder="请选择"
                      popper-class="config-dialog-select"
                    >
                      <el-option
                        v-for="item in platformNameOptions"
                        :key="item.id"
                        :label="item.platformConfigName"
                        :value="item.platformConfigName"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="3">
                  <el-form-item prop="blockName" label="区块:">
                    <el-select
                      v-model="basicForm.blockName"
                      placeholder="请选择"
                      popper-class="config-dialog-select"
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
                <el-col :span="7">
                  <el-form-item label="纬度" class="lat-form-item" required>
                    <el-form-item prop="latd">
                      <el-input
                        v-model="basicForm.latd"
                        :style="{ width: '70px' }"
                        class="custom-input"
                      ></el-input>
                      °
                    </el-form-item>
                    <el-form-item prop="latf">
                      <el-input
                        v-model="basicForm.latf"
                        :style="{ width: '70px' }"
                        class="custom-input"
                      ></el-input>
                      '
                    </el-form-item>

                    <el-form-item prop="latm">
                      <el-input
                        v-model="basicForm.latm"
                        :style="{ width: '70px' }"
                        class="custom-input"
                      ></el-input>
                      ''
                    </el-form-item>

                    <el-form-item prop="ns">
                      <el-select v-model="basicForm.ns" popper-class="config-dialog-select">
                        <el-option label="N" value="N"></el-option>
                        <el-option label="S" value="S"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="经度" class="lat-form-item" required>
                    <el-form-item prop="lngd">
                      <el-input
                        v-model="basicForm.lngd"
                        :style="{ width: '70px' }"
                        class="custom-input"
                      ></el-input>
                    </el-form-item>
                    <el-form-item prop="lngf">
                      <el-input
                        v-model="basicForm.lngf"
                        :style="{ width: '70px' }"
                        class="custom-input"
                      ></el-input>
                    </el-form-item>
                    '
                    <el-form-item prop="lngm">
                      <el-input
                        v-model="basicForm.lngm"
                        :style="{ width: '70px' }"
                        class="custom-input"
                      ></el-input>
                    </el-form-item>
                    ''
                    <el-form-item prop="ew">
                      <el-select v-model="basicForm.ew" popper-class="config-dialog-select">
                        <el-option label="E" value="E"></el-option>
                        <el-option label="W" value="W"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
        <div class="assembly">
          <div class="title">
            <span>钻具组合</span>
            <span style="color: red">
              (请按照顺序添加钻具组合: DC -> HWDP-> DP)
            </span>
          </div>
          <div class="assembly-content">
            <div class="assembly-content__form">
              <el-form
                ref="editorAssemblyForm"
                :inline="true"
                :model="editorAssemblyForm"
                size="small"
              >
                <el-form-item prop="type" label="钻具类型">
                  <el-select
                    v-model="editorAssemblyForm.type"
                    placeholder="请选择"
                    popper-class="config-dialog-select"
                    @change="assemblyTypeChange"
                  >
                    <el-option
                      v-for="item in assemblyTypeList"
                      :key="item"
                      :label="item"
                      :value="item"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="name" label="钻具名">
                  <el-select
                    v-model="editorAssemblyForm.name"
                    placeholder="请选择"
                    popper-class="config-dialog-select"
                  >
                    <el-option
                      v-for="item in assemblyNameList"
                      :key="item"
                      :label="item"
                      :value="item"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="length" label="长度(m)">
                  <el-input v-model="editorAssemblyForm.length" placeholder="请输入"></el-input>
                </el-form-item>
              </el-form>
              <el-button type="text" @click="editorAddHandler">
                添加
              </el-button>
            </div>
            <div v-if="assemblyEditorTableData.length" class="assembly-content__table">
              <el-table
                ref="assemblyTableRef"
                :data="assemblyEditorTableData"
                style="width: 100%"
                :max-height="170"
                stripe
                class="border-table"
              >
                <template v-for="item in assemblyTableColumn" :key="item.label">
                  <el-table-column v-bind="item" />
                </template>
                <el-table-column label="操作">
                  <template #default="scope">
                    <el-button
                      type="text"
                      class="table-custom-button"
                      @click="deleteEditorHandler(scope)"
                    >
                      移除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="well-depth-structure">
          <div class="title">
            井身结构
          </div>
          <div class="well-depth-structure-content">
            <div>
              <el-form
                ref="editorDiaForm"
                :inline="true"
                :model="editorDiaForm"
                size="small"
                :rules="editorDiaRules"
              >
                <el-form-item prop="nakedEyeDiameter" label="裸眼直径(in)">
                  <el-input
                    v-model="editorDiaForm.nakedEyeDiameter"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="well-depth-structure-content__form">
              <el-form ref="editorDepthForm" :inline="true" :model="editorDepthForm" size="small">
                <el-form-item prop="name" label="套管类型">
                  <el-select
                    v-model="editorDepthForm.name"
                    placeholder="请选择"
                    popper-class="config-dialog-select"
                    value-key="name"
                  >
                    <el-option
                      v-for="item in casingTypeList"
                      :key="item.name"
                      :label="item.name"
                      :value="item"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="startHighly" label="开始高度(m)">
                  <el-input v-model="editorDepthForm.startHighly" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item prop="endHighly" label="结束高度(m)">
                  <el-input v-model="editorDepthForm.endHighly" placeholder="请输入"></el-input>
                </el-form-item>
              </el-form>
              <el-button type="text" @click="editorDepthHandler">
                添加
              </el-button>
            </div>
            <div v-if="depthEditorTableData.length" class="well-depth-structure-content__table">
              <el-table
                :data="depthEditorTableData"
                style="width: 100%"
                :max-height="170"
                stripe
                class="border-table"
              >
                <template v-for="item in wellDepthStructureTableColumn" :key="item.prop">
                  <el-table-column v-bind="item" />
                </template>
                <el-table-column label="操作">
                  <template #default="scope">
                    <el-button
                      type="text"
                      class="table-custom-button"
                      @click="deleteDepthHandler(scope)"
                    >
                      移除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="mud-pools">
          <div class="title">
            泥浆池
          </div>
          <div class="mud-pools-content">
            <el-form
              ref="editorMudForm"
              :inline="true"
              :model="editorMudForm"
              size="small"
              :rules="editorMudRules"
            >
              <el-form-item prop="circularPoolCheckList" label="循环池：">
                <el-checkbox-group v-model="editorMudForm.circularPoolCheckList">
                  <el-checkbox v-for="item in checkboxModel" :key="item.value" :label="item.value">
                    {{ item.label }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item prop="meteringTankCheckList" label="计量罐：">
                <el-checkbox-group v-model="editorMudForm.meteringTankCheckList">
                  <el-checkbox v-for="item in checkboxModel" :key="item.value" :label="item.value">
                    {{ item.label }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="address-risk">
          <div class="title">
            地质风险记录
          </div>
          <div class="address-risk-content">
            <div class="address-risk-content__form">
              <el-form
                ref="editorAddressForm"
                :inline="true"
                :model="editorAddressForm"
                size="small"
              >
                <el-form-item prop="depth" label="井深">
                  <el-input v-model="editorAddressForm.depth" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item prop="verticalDepth" label="垂深">
                  <el-input
                    v-model="editorAddressForm.verticalDepth"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="horizon" label="层位">
                  <el-input v-model="editorAddressForm.horizon" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item prop="description" label="描述信息">
                  <el-input v-model="editorAddressForm.description" placeholder="请输入"></el-input>
                </el-form-item>
              </el-form>
              <el-button type="text" @click="editorAddressHandler">
                添加
              </el-button>
            </div>
            <div class="address-risk-content__table">
              <el-table
                :data="addressEditorTableData"
                style="width: 100%"
                :max-height="170"
                stripe
                class="border-table"
              >
                <template v-for="item in addressRiskTableColumn" :key="item.label">
                  <el-table-column v-bind="item" />
                </template>
                <el-table-column label="操作">
                  <template #default="scope">
                    <el-button
                      type="text"
                      class="table-custom-button"
                      @click="deleteAddressHandler(scope)"
                    >
                      移除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </free-dialog>

    <free-dialog
      custom-class="custom-dialog"
      :title="dialogConfig.dialogTitle"
      width="50%"
      top="5vh"
      :visible="dialogConfig.isDialogShow"
      :showFooterButton="false"
      @on-confirm="closeDialogHandler"
      @on-cancel="closeDialogHandler"
      @on-close="closeDialogHandler"
    >
      <div class="wellsite-information-detail-content">
        <div class="basic-information">
          <div
            v-for="item in basicInformationList"
            :key="item.prop"
            class="basic-information__item"
          >
            <span>{{ item.label }}</span>
            <span>{{ transformBasicDetail(item.prop) }}</span>
          </div>
        </div>
        <div class="assembly">
          <div class="title">
            钻具组合
          </div>
          <el-table
            class="assembly-table"
            :data="assemblyTableData"
            style="width: 100%"
            :max-height="200"
            :header-cell-style="detailClass"
            stripe
          >
            <template v-for="item in assemblyTableColumn" :key="item.label">
              <el-table-column v-bind="item" />
            </template>
          </el-table>
        </div>
        <div class="well-depth-structure">
          <div class="title">
            井身结构
          </div>
          <el-table
            class="well-depth-structure-table"
            :data="wellDepthStructureTableData"
            style="width: 100%"
            :max-height="200"
            :header-cell-style="detailClass"
            stripe
            border
          >
            <template v-for="item in wellDepthStructureTableColumn" :key="item.label">
              <el-table-column align="center" v-bind="item" />
            </template>
          </el-table>
        </div>
        <div class="mud-pools">
          <div class="title">
            泥浆池
          </div>
          <el-table
            class="mud-pools-table"
            :data="mudPoolsTableData"
            style="width: 100%"
            :max-height="100"
            :header-cell-style="detailClass"
            stripe
            border
          >
            <template v-for="item in mudPoolsTableColumn" :key="item.label">
              <el-table-column align="center" v-bind="item" />
            </template>
          </el-table>
        </div>
        <div class="address-risk">
          <div class="title">
            地质风险记录
          </div>
          <el-table
            class="address-risk-table"
            :data="addressRiskTableData"
            style="width: 100%"
            :max-height="200"
            :header-cell-style="detailClass"
            stripe
            border
          >
            <template v-for="item in addressRiskTableColumn" :key="item.label">
              <el-table-column align="center" v-bind="item" />
            </template>
          </el-table>
        </div>
        <div class="modify-record">
          <div class="title">
            <div>修改记录</div>
            <div v-if="modifyRecordTableData.length > 1">
              <el-button v-if="anStatus" type="text" @click="anHandler">
                展开
              </el-button>
              <el-button v-else type="text" @click="upHandler">
                收起
              </el-button>
            </div>
          </div>
          <div class="modify-record-table" :class="{ 'up-height': anStatus }">
            <div
              v-for="(item, index) in modifyRecordTableData"
              :key="item.id"
              class="modify-record-table__item"
            >
              <div v-for="iItem in modifyRecordTableColumn" :key="iItem.prop">
                <span class="label">{{ iItem.label }}</span>
                <span>{{ modifyRecordTableData[index]?.[iItem.prop] ?? '-' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </free-dialog>

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
      width="40%"
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
      @on-cancel="curveCloseHandler"
      @on-close="curveCloseHandler"
    >
      <div class="curve-container">
        <curve-template
          ref="curveTemplateRef"
          canvas-id="wellsite-curve"
          :well-id="rowScope?.wid"
          :use-switch-status="true"
          :show-audio="false"
        />
      </div>
    </free-dialog>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { cloneDeep } from 'lodash-es';

import { instance } from '@/api/config';
import {
  getAllPlatformList,
  getAuthBlock,
  getAuthCompany,
  getAuthWell,
  getWellSiteList,
} from '@/api/realTimeMonitor/all';
import {
  deleteFile,
  downloadFile,
  getExceptionDetail,
  getExceptionPageList,
  updateException,
} from '@/api/realTimeMonitor/realTimeCurve';
import {
  changeWellState,
  editorWell,
  getDrillGather,
  getDrillGatherParams,
  getDrillGatherParamsByName,
  getWellDetail,
  queryDrillName,
} from '@/api/wellsiteManage/wellsiteInformation';
import { exportFile } from '@/utils/exportFile';
import { pageCountCalculate } from '@/utils/number';
import CurveTemplate from '@/views/real-time-monitor/components/curve-template';
import ExceptionHandleForm from '@/views/real-time-monitor/components/exception-handle-form';

import {
  abnormalRecordsTableColumn,
  addressRiskTableColumn,
  assemblyTableColumn,
  basicInformationList,
  checkboxModel,
  exceptionDetailsBasicList,
  exceptionDetailsTableColumn,
  exceptionDetailsTableColumn2,
  modifyRecordTableColumn,
  mudPoolsTableColumn,
  tableColumn,
  wellDepthStructureTableColumn,
} from './model';

export default {
  name: 'WellsiteInformation',
  components: {
    ExceptionHandleForm,
    CurveTemplate,
  },
  data() {
    const validatePass = (rule, value, callback) => {
      const useValue = String(value);
      if (!useValue || !useValue?.trim()) return callback(new Error('请输入'));
      if (isNaN(Number(useValue)) || Number(useValue) > 90) return callback(new Error('数值错误'));
      callback();
    };

    const validateLngd = (rule, value, callback) => {
      const useValue = String(value);
      if (!useValue || !useValue?.trim()) return callback(new Error('请输入'));
      if (isNaN(Number(useValue)) || Number(useValue) > 180) return callback(new Error('数值错误'));
      callback();
    };

    const validateMinutes = (rule, value, callback) => {
      const useValue = String(value);
      if (!useValue || !useValue?.trim()) return callback(new Error('请输入'));
      if (isNaN(Number(useValue)) || Number(useValue) > 60) return callback(new Error('数值错误'));
      callback();
    };

    return {
      lineList: [],
      wellNameList: [],
      modifyTableData: [],
      dicTableData: [],
      checkboxModel,
      formInline: {
        companyName: '',
        blockNames: '',
        wids: '',
        wellState: 1,
      },
      companyList: [],
      blockOptions: [],
      wellTypeList: [
        {
          label: '正钻井',
          value: 1,
        },
        {
          label: '历史井',
          value: 0,
        },
      ],
      tableContainerRef: null,
      tableHeight: 0,
      tableColumn,
      tableLoading: false,
      total: 0,
      paginationParams: {
        pageNo: 1,
        pageSize: 20,
      },
      tableData: [],
      dialogConfig: {
        dialogTitle: '',
        isDialogShow: false,
      },
      basicInformationList,
      basicInformationDetail: null,
      assemblyTableColumn,
      assemblyTableData: [],
      wellDepthStructureTableColumn,
      wellDepthStructureTableData: [],
      mudPoolsTableColumn,
      mudPoolsTableData: [],
      addressRiskTableColumn,
      addressRiskTableData: [],
      modifyRecordTableColumn,
      modifyRecordTableData: [],
      anStatus: true,
      editorDialogConfig: {
        dialogTitle: '',
        isDialogShow: false,
      },
      basicForm: {
        platformName: '',
        blockName: '',
        latd: '',
        latf: '',
        latm: '',
        ns: '',
        lngd: '',
        lngf: '',
        lngm: '',
        ew: '',
      },
      basicRules: {
        platformName: [{ required: true, message: '请选择', trigger: 'change' }],
        blockName: [{ required: true, message: '请选择', trigger: 'change' }],
        lat1: [{ required: true, message: '请输入', trigger: 'blur' }],
        lat2: [{ required: true, message: '请输入', trigger: 'blur' }],
        lat3: [{ required: true, message: '请输入', trigger: 'blur' }],
        lat4: [{ required: true, message: '请输入', trigger: 'blur' }],
        lang1: [{ required: true, message: '请输入', trigger: 'blur' }],
        lang2: [{ required: true, message: '请输入', trigger: 'blur' }],
        lang3: [{ required: true, message: '请输入', trigger: 'blur' }],
        lang4: [{ required: true, message: '请输入', trigger: 'blur' }],
        latd: [{ validator: validatePass, trigger: 'blur' }],
        latf: [{ validator: validateMinutes, trigger: 'blur' }],
        latm: [{ validator: validateMinutes, trigger: 'blur' }],
        lngd: [{ validator: validateLngd, trigger: 'blur' }],
        lngf: [{ validator: validateMinutes, trigger: 'blur' }],
        lngm: [{ validator: validateMinutes, trigger: 'blur' }],
      },
      platformNameOptions: [],
      editorAssemblyForm: {
        type: '',
        name: '',
        length: '',
      },
      assemblyTypeList: [],
      casingTypeList: [],
      assemblyNameList: [],
      assemblyEditorTableData: [],
      editorDiaForm: {
        nakedEyeDiameter: '',
      },
      editorDiaRules: {
        nakedEyeDiameter: [{ required: true, message: '请输入', trigger: 'blur' }],
      },
      editorDepthForm: {
        name: '',
        startHighly: '',
        endHighly: '',
      },
      depthEditorTableData: [],

      editorMudForm: {
        circularPoolCheckList: [],
        meteringTankCheckList: [],
      },
      editorMudRules: {
        circularPoolCheckList: [{ required: true, message: '请选择', trigger: 'change' }],
        meteringTankCheckList: [{ required: true, message: '请选择', trigger: 'change' }],
      },

      editorAddressForm: {
        depth: '',
        verticalDepth: '',
        horizon: '',
        description: '',
      },
      addressEditorTableData: [],

      showAbnormal: false,
      abnormalRecordsForm: {
        // time: [],
        searchBeginTime: '',
        searchEndTime: '',
      },
      abnormalRecordsTableColumn,
      abnormalRecordsTableData: [],
      abnormalRecordsTotal: 0,
      abnormalPaginationParams: {
        pageNo: 1,
        pageSize: 20,
      },

      exceptionDetailsConfig: {
        dialogTitle: '',
        isDialogShow: false,
      },
      exceptionDetailsBasicList,
      exceptionDetails: [],
      exceptionDetailsTableData: [],
      showMsg: '',
      exceptionDetailsTableColumn,
      exceptionDetailsTableColumn2,

      handleDialogConfig: {
        dialogTitle: '',
        dialogType: '',
        isDialogShow: false,
      },
      handleFormRef: null,
      handleBtnLoading: false,
      rowScope: null,
      curveDialogConfig: {
        dialogTitle: '',
        isDialogShow: false,
      },
      curveKey: 0,
      abnormalRowScope: null,
      dialogKey: 0,
    };
  },
  computed: {
    pageTotalsTxt() {
      const pageNoTotal = pageCountCalculate(this.total, this.paginationParams.pageSize);
      return `共${this.total}条记录  第 ${this.paginationParams.pageNo}/${pageNoTotal} 页`;
    },
  },
  mounted() {
    this.changeTableColumn();
    this.getTableData();
    const tableContainerHeight = this.$refs['tableContainerRef']?.offsetHeight;
    tableContainerHeight && (this.tableHeight = tableContainerHeight - 88);
    this.getWellNameList();
    this.getCompanyList();
    this.getBlockOptions();
  },
  methods: {
    detailClass() {
      return 'color: #000; font-weight: 600;';
    },
    submitForm() {
      this.paginationParams.pageNo = 1;
      this.getTableData();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.submitForm();
    },
    async getTableData() {
      const userName = localStorage.getItem('username');
      try {
        this.tableLoading = true;
        const params = {
          ...this.paginationParams,
          userId: userName,
          systemId: 'cc004f80-e7ed-432e-b633-afb8cf05a288',
        };
        Object.keys(this.formInline).forEach((item) => {
          if (this.formInline[item]?.length) {
            params[item] = this.formInline[item]?.join(',');
          } else {
            params[item] = this.formInline[item];
          }
        });
        delete params.companyName;
        const { data, code, message } = await getWellSiteList(params);
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
    async changeSwitchHandler(value, row) {
      const arr = [0, 1];
      try {
        const data = {
          id: row.id,
          wellState: value,
        };
        const { code, message } = await changeWellState(data);
        if (code === 200) {
          this.$message.success('编辑成功!');
          this.getTableData();
        } else {
          this.$message.error(message);
          row.wellState = arr.find((item) => item !== value);
        }
      } catch (error) {
        row.wellState = arr.find((item) => item !== value);
        console.log(error);
      }
    },
    async getDetails(row) {
      const params = {
        id: row.id,
      };
      try {
        const { code, message, data } = await getWellDetail(params);
        if (code === 200) {
          this.basicInformationDetail = data;
          this.assemblyTableData = data?.assemblyList;
          this.wellDepthStructureTableData = data?.wellBoreList;
          this.mudPoolsTableData = [
            {
              cycleCodes: data?.cycleCodes,
              meteringCodes: data?.meteringCodes,
            },
          ];
          this.addressRiskTableData = data?.geologicalRiskRecordList;

          if (data?.wellEditRecordList.length) {
            this.modifyRecordTableData = data?.wellEditRecordList;
          } else {
            this.modifyRecordTableData = [{ createUser: '-', createTime: '-' }];
          }
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async detailHandler(row) {
      this.getDetails(row);
      this.dialogConfig.isDialogShow = true;
      this.dialogConfig.dialogTitle = '详情';
    },
    abnormalHandler(row) {
      this.rowScope = row;
      this.showAbnormal = true;
      this.getAbnormalTableData();
    },
    abnormalBackHandler() {
      this.showAbnormal = false;
    },
    transformBasicDetail(prop) {
      const value = this.basicInformationDetail?.[prop];
      if (prop === 'wellState') {
        if (value === 0) {
          return '历史井';
        } else if (value === 1) {
          return '正钻井';
        } else {
          return '-';
        }
      } else {
        return value ?? '-';
      }
    },
    closeDialogHandler() {
      this.dialogConfig.isDialogShow = false;
    },
    anHandler() {
      this.anStatus = false;
    },
    upHandler() {
      this.anStatus = true;
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
    async getDrillOptions() {
      const { code, message, data } = await getDrillGather();
      if (code === 200) {
        this.assemblyTypeList = data?.['assemblyTypeList'] ?? [];
        this.casingTypeList = data?.['casingTypeList'] ?? [];
      } else {
        this.$message.error(message);
      }
    },
    async assemblyTypeChange(value) {
      const params = { type: value };
      const { data, code, message } = await queryDrillName(params);
      if (code === 200) {
        this.assemblyNameList = data ?? [];
      } else {
        this.$message.error(message);
      }
    },
    async getPlatformOptions() {
      const { code, message, data } = await getAllPlatformList();
      if (code === 200) {
        this.platformNameOptions = data;
      } else {
        this.$message.error(message);
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
    async editorHandler(row) {
      this.rowScope = row;
      this.editorDialogConfig.isDialogShow = true;
      this.editorDialogConfig.dialogTitle = '编辑';

      await this.getDrillOptions();

      await this.getPlatformOptions();

      await this.getBlockOptions();

      await this.getDetails(row);
      this.$nextTick(function() {
        for (const prop in this.basicForm) {
          const stringArr = ['latd', 'lngd'];
          if (stringArr.includes(prop)) {
            this.basicForm[prop] = String(this.basicInformationDetail[prop]);
          } else {
            this.basicForm[prop] = this.basicInformationDetail[prop];
          }
        }

        this.editorDiaForm.nakedEyeDiameter = this.basicInformationDetail.nakedEyeDiameter;

        this.assemblyEditorTableData = cloneDeep(this.assemblyTableData);

        this.depthEditorTableData = cloneDeep(this.wellDepthStructureTableData);

        const cycleCodes = this.basicInformationDetail.cycleCodes;
        const meteringCodes = this.basicInformationDetail.meteringCodes;
        this.editorMudForm.circularPoolCheckList = cycleCodes?.split(',') ?? [];
        this.editorMudForm.meteringTankCheckList = meteringCodes?.split(',') ?? [];

        this.addressEditorTableData = cloneDeep(this.addressRiskTableData);
      });
    },
    changeWellState() {
      this.getWellNameList();
      this.submitForm();
    },
    async editorConfirmHandler() {
      const _self = this;
      const formArr = ['basicForm', 'editorDiaForm', 'editorMudForm'];
      const resultArr = [];
      function checkForm(formName) {
        const result = new Promise(function(resolve, reject) {
          _self.$refs[formName].validate((valid) => {
            if (valid) {
              resolve();
            } else {
              reject();
            }
          });
        });
        resultArr.push(result);
      }
      formArr.forEach((item) => {
        checkForm(item);
      });
      Promise.all(resultArr).then(async function() {
        const userName = localStorage.getItem('username');
        const data = {
          ..._self.rowScope,
          ..._self.basicForm,
          ..._self.editorDiaForm,
          assemblyList: _self.assemblyEditorTableData.map((item) => ({
            ...item,
            wid: _self.rowScope.wid,
          })),
          wellBoreList: _self.depthEditorTableData.map((item) => ({
            ...item,
            wid: _self.rowScope.wid,
          })),
          cycleCodes: _self.editorMudForm.circularPoolCheckList?.join() ?? '',
          meteringCodes: _self.editorMudForm.meteringTankCheckList?.join() ?? '',
          geologicalRiskRecordList: _self.addressEditorTableData.map((item) => ({
            ...item,
            wid: _self.rowScope.wid,
          })),
          create_user: userName,
        };
        const { code, message } = await editorWell(data);
        if (code === 200) {
          _self.$message.success('修改成功!');
          _self.closeEditorHandler();
          _self.submitForm();
        } else {
          _self.$message.error(message);
        }
      });
    },
    closeEditorHandler() {
      this.editorDialogConfig.isDialogShow = false;
      Object.keys(this.editorAssemblyForm).forEach((item) => {
        this.editorAssemblyForm[item] = '';
      });
      Object.keys(this.editorDepthForm).forEach((item) => {
        this.editorDepthForm[item] = '';
      });
      Object.keys(this.editorAddressForm).forEach((item) => {
        this.editorAddressForm[item] = '';
      });
    },
    async editorAddHandler() {
      try {
        const params = {
          ...this.editorAssemblyForm,
        };
        delete params.length;
        const { data, code, message } = await getDrillGatherParams(params);
        if (code === 200) {
          const tableItem = {
            ...this.editorAssemblyForm,
            ...data,
          };
          this.assemblyEditorTableData.unshift(tableItem);
          // this.$nextTick(() => {
          //   this.$refs.assemblyTableRef.bodyWrapper.scrollTop =
          //     this.$refs.assemblyTableRef.bodyWrapper.scrollHeight;
          // });
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteEditorHandler(scope) {
      const index = scope.$index;
      this.assemblyEditorTableData.splice(index, 1);
    },
    editorDepthHandler() {
      this.$refs['editorDepthForm']?.validate(async (valid) => {
        if (!valid) return;
        const params = {
          ...this.editorDepthForm.name,
        };
        const { data, code, message } = await getDrillGatherParamsByName(params);
        if (code === 200) {
          const tableItem = {
            ...this.editorDepthForm,
            name: this.editorDepthForm.name.name,
            ...data,
          };
          this.depthEditorTableData.push(tableItem);
        } else {
          this.$message.error(message);
        }
      });
    },
    deleteDepthHandler(scope) {
      const index = scope.$index;
      this.depthEditorTableData.splice(index, 1);
    },

    editorAddressHandler() {
      this.$refs['editorAddressForm']?.validate(async (valid) => {
        if (!valid) return;
        const tableItem = {
          ...this.editorAddressForm,
        };
        this.addressEditorTableData.push(tableItem);
      });
    },
    deleteAddressHandler(scope) {
      const index = scope.$index;
      this.addressEditorTableData.splice(index, 1);
    },

    async getAbnormalTableData() {
      try {
        const userName = localStorage.getItem('username');
        const params = {
          ...this.paginationParams,
          ...this.abnormalRecordsForm,
          wid: this.rowScope.wid,
          systemId: 'cc004f80-e7ed-432e-b633-afb8cf05a288',
          userId: userName,
        };
        const { data, code, message } = await getExceptionPageList(params);
        if (code === 200) {
          this.abnormalRecordsTableData = data?.rows;
          this.total = data.totalRows;
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    abnormalRecordsSubmitForm() {
      this.abnormalPaginationParams.pageNo = 1;
      this.getAbnormalTableData();
    },
    abnormalRecordsResetForm(formName) {
      this.$refs[formName].resetFields();
      this.abnormalRecordsSubmitForm();
    },
    abnormalHandleSizeChange(value) {
      this.abnormalPaginationParams.pageNo = 1;
      this.abnormalPaginationParams.pageSize = value;
      this.getAbnormalTableData();
    },
    abnormalHandleCurrentChange(value) {
      this.abnormalPaginationParams.pageNo = value;
      this.getAbnormalTableData();
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
    async abnormalRecordsSeeCurve(row) {
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
    curveCloseHandler() {
      this.curveDialogConfig.isDialogShow = false;
      this.curveKey++;
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
    async getWellNameList() {
      try {
        const userName = localStorage.getItem('username');
        const params = {
          systemId: 'cc004f80-e7ed-432e-b633-afb8cf05a288',
          userId: userName,
          wellState: this.formInline.wellState,
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
    async companyChange(value) {
      if (value?.length) {
        const arr = [];
        value.forEach((item) => {
          const findBlockNames = this.companyList.find((i) => i.value === item)?.blockNames;
          if (findBlockNames?.length) {
            findBlockNames?.forEach((v) => {
              const vItem = {
                label: v.name,
                value: v.shortName,
              };
              arr.push(vItem);
            });
          }
        });
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
            value: item.bindName,
            blockNames: item.blockNameVos,
          }));
        } else {
          this.$message.error(message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    changeTableColumn() {
      const permissions = this.cfbgcPermissions.btns;
      const layoutResult = permissions.find((item) => item.path === 'warn::wellManage::switch');
      if (!layoutResult) {
        this.tableColumn = this.tableColumn.filter((item) => item.prop !== 'wellState');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wellsite-information {
  &__form {
    display: flex;
    align-items: center;
    height: 60px;
    padding-left: 20px;
    margin-bottom: 10px;
    background: #fff;

    :deep .el-form {
      .el-form-item {
        margin-bottom: 0;
      }
    }
  }

  &__table {
    box-sizing: border-box;
    height: calc(100% - 70px);
    padding: 20px;
    background: #fff;
  }

  .abnormal-records {
    height: 100%;

    &__form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      padding: 0 20px;
      margin-bottom: 10px;
      background: #fff;

      :deep .el-form {
        .el-form-item {
          margin-bottom: 0;
        }
      }
    }

    &__table {
      box-sizing: border-box;
      height: calc(100% - 70px);
      padding: 20px;
      background: #fff;
    }
  }
}

.pagination-container {
  padding: 10px 0;
  text-align: right;
}

:deep .custom-dialog {
  &__content {
    padding: 0 20px;
  }

  .el-dialog__body {
    padding-top: 20px;
  }

  .el-dialog__header {
    display: flex;
    align-items: center;
    padding: 15px 30px;
    background-color: #1688d3;

    .el-dialog__title {
      color: #fff;
    }

    .el-dialog__close {
      color: #fff;
    }
  }
}

.editor-information-content {
  .basic-information {
    .title {
      margin-bottom: 10px;
      font-weight: 600;
    }

    &-content {
      padding-left: 30px;

      .basic-form {
        :deep input {
          width: 130px;
        }

        .lat-form-item {
          display: flex;

          :deep .el-form-item__content {
            display: flex;

            input {
              width: 50px;
            }

            .el-form-item:last-child {
              input {
                width: 120px;
              }
            }
          }
        }

        .el-form-item {
          margin-bottom: 0;
        }
      }
    }
  }

  .assembly {
    margin-top: 15px;

    .title {
      margin-bottom: 10px;

      span {
        font-weight: 600;
      }
    }

    &-content {
      padding-left: 30px;

      &__form {
        display: flex;
        align-items: center;

        :deep .el-form {
          .el-form-item {
            margin-bottom: 0;
          }
        }

        :deep button {
          padding: 0;
        }
      }

      &__table {
        margin-top: 20px;

        .border-table {
          border: 1px solid #ebeef5;
        }
      }
    }
  }

  .well-depth-structure {
    margin-top: 15px;

    .title {
      margin-bottom: 10px;
      font-weight: 600;
    }

    &-content {
      padding-left: 30px;

      &__form {
        display: flex;
        align-items: center;

        :deep .el-form {
          .el-form-item {
            margin-bottom: 0;
          }
        }

        :deep button {
          padding: 0;
        }
      }

      &__table {
        margin-top: 20px;

        .border-table {
          border: 1px solid #ebeef5;
        }
      }
    }
  }

  .mud-pools {
    margin-top: 15px;

    .title {
      margin-bottom: 10px;
      font-weight: 600;
    }

    &-content {
      padding-left: 30px;

      :deep .el-checkbox {
        margin-right: 20px;
      }

      :deep .el-form {
        .el-form-item {
          margin-bottom: 15px;
        }
      }
    }
  }

  .address-risk {
    .title {
      margin-bottom: 10px;
      font-weight: 600;
    }

    &-content {
      padding-left: 30px;

      &__form {
        display: flex;
        align-items: center;

        :deep .el-form {
          .el-form-item {
            margin-bottom: 0;
          }
        }

        :deep button {
          padding: 0;
        }
      }

      &__table {
        margin-top: 20px;

        .border-table {
          border: 1px solid #ebeef5;
        }
      }
    }
  }
}

.wellsite-information-detail-content {
  padding-bottom: 30px;

  .basic-information {
    display: flex;
    padding-left: 20px;

    &__item {
      display: flex;
      flex-direction: column;
      width: 18%;

      span:first-child {
        margin-bottom: 5px;
        color: #a9b5c3;
      }

      span:last-child {
        font-weight: 600;
      }
    }
  }

  .assembly {
    margin-top: 20px;

    .title {
      margin-bottom: 10px;
      font-weight: 600;
    }

    &-table {
      border: 1px solid #ebeef5;
    }
  }

  .well-depth-structure {
    margin-top: 20px;

    .title {
      margin-bottom: 10px;
      font-weight: 600;
    }

    &-table {
      border: 1px solid #ebeef5;
    }
  }

  .mud-pools {
    margin-top: 20px;

    .title {
      margin-bottom: 10px;
      font-weight: 600;
    }

    &-table {
      border: 1px solid #ebeef5;
    }
  }

  .address-risk {
    margin-top: 20px;

    .title {
      margin-bottom: 10px;
      font-weight: 600;
    }

    &-table {
      border: 1px solid #ebeef5;
    }
  }

  .modify-record {
    margin-top: 20px;
    overflow: hidden;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      font-weight: 600;

      button {
        padding: 0;
      }
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

  .up-height {
    height: 48px;
  }
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

.custom-input {
  :deep input {
    width: 100% !important;
  }
}
</style>
