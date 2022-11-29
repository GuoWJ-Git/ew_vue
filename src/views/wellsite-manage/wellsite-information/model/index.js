export const tableColumn = [
  { prop: 'wid', label: '井名', width: 180 },
  {
    prop: 'platformName',
    label: '平台名',
    formatter: (row, column) => row[column.property] ?? '-',
  },
  {
    prop: 'blockName',
    label: '区块',
    formatter: (row, column) => row[column.property] ?? '-',
  },
  {
    prop: 'latdfm',
    label: '纬度',
    width: 220,
    formatter: (row, column) => row[column.property] ?? '-',
  },
  {
    prop: 'lngdfm',
    label: '经度',
    width: 220,
    formatter: (row, column) => row[column.property] ?? '-',
  },

  {
    prop: 'wellState',
    label: '井状态',
    formatter: (row, column) => {
      const status = row[column.property];
      if (status === 1) {
        return '正钻井';
      } else if (status === 0) {
        return '历史井';
      } else {
        return '-';
      }
    },
  },
  {
    prop: 'assembly',
    label: '钻具组合',
    formatter: (row, column) => row[column.property] ?? '-',
    'show-overflow-tooltip': true,
  },
  {
    prop: 'bore',
    label: '井身结构',
    formatter: (row, column) => row[column.property] ?? '-',
    'show-overflow-tooltip': true,
  },
  {
    prop: 'cycleCodes',
    label: '循环池',
    formatter: (row, column) => {
      const str = row[column.property];
      const sourceItem = checkboxModel.find((item) => item.value === str);
      if (sourceItem) {
        return sourceItem.label;
      } else {
        return str ?? '-';
      }
    },
  },
  {
    prop: 'meteringCodes',
    label: '计量罐',
    formatter: (row, column) => {
      const str = row[column.property];
      const sourceItem = checkboxModel.find((item) => item.value === str);
      if (sourceItem) {
        return sourceItem.label;
      } else {
        return str ?? '-';
      }
    },
  },
  {
    prop: 'wellState',
    label: '是否正钻',
    slot: true,
    permission: 'warn::wellManage::switch',
  },
  { prop: 'operate', label: '操作', width: 200, slot: true },
];

export const basicInformationList = [
  {
    label: '平台:',
    prop: 'platformName',
  },
  {
    label: '井名:',
    prop: 'wid',
  },
  {
    label: '纬度:',
    prop: 'latdfm',
  },
  {
    label: '经度:',
    prop: 'lngdfm',
  },
  {
    label: '区块:',
    prop: 'blockName',
  },
  {
    label: '状态:',
    prop: 'wellState',
  },
];

export const assemblyTableColumn = [
  { prop: 'type', label: '钻具类型' },
  { prop: 'name', label: '钻具名' },
  { prop: 'length', label: '长度(m)' },
  { prop: 'od', label: 'OD(in)' },
  { prop: 'did', label: 'ID(in)' },
  { prop: 'kgM', label: 'Weight(Kg/m)' },
  { prop: 'lbsFt', label: 'Weight(Ibs/ft)' },
  { prop: 'lm', label: 'Capscity(I/m)' },
  { prop: 'open', label: 'Open(I/m)' },
  { prop: 'close', label: 'Close(I/m)' },
];

export const wellDepthStructureTableColumn = [
  { prop: 'name', label: '套管名' },
  { prop: 'startHighly', label: '开始高度(m)' },
  { prop: 'endHighly', label: '结束高度(m)' },
  { prop: 'od', label: 'OD(in)' },
  { prop: 'did', label: 'ID(in)' },
  { prop: 'kgM', label: 'Weight(Kg/m)' },
  { prop: 'lbsFt', label: 'Weight(Ibs/ft)' },
  { prop: 'lm', label: 'Capscity(I/m)' },
  { prop: 'open', label: 'Open(I/m)' },
  { prop: 'close', label: 'Close(I/m)' },
];

export const mudPoolsTableColumn = [
  {
    prop: 'cycleCodes',
    label: '循环池',
    formatter: (row, column) => {
      const strArr = row[column.property]?.split(',');
      const arr = [];
      checkboxModel.forEach((item) => {
        strArr?.forEach((child) => {
          if (item.value === child) arr.push(item.label);
        });
      });
      if (arr.length) {
        return arr?.join(',') ?? '-';
      } else {
        return '-';
      }
    },
  },
  {
    prop: 'meteringCodes',
    label: '计量罐',
    formatter: (row, column) => {
      const strArr = row[column.property]?.split(',');
      const arr = [];
      checkboxModel.forEach((item) => {
        strArr?.forEach((child) => {
          if (item.value === child) arr.push(item.label);
        });
      });
      if (arr.length) {
        return arr?.join(' ') ?? '-';
      } else {
        return '-';
      }
    },
  },
];

export const addressRiskTableColumn = [
  { prop: 'depth', label: '井深' },
  { prop: 'verticalDepth', label: '垂深' },
  { prop: 'horizon', label: '层位' },
  { prop: 'description', label: '描述' },
];

export const modifyRecordTableColumn = [
  { prop: 'createUser', label: '修改人：' },
  { prop: 'createTime', label: '修改时间：' },
];

export const checkboxModel = [
  {
    label: 'SUM1',
    value: 'TVT',
  },
  {
    label: 'SUM2',
    value: 'TVA',
  },
  {
    label: '池01',
    value: 'TV01',
  },
  {
    label: '池02',
    value: 'TV02',
  },
  {
    label: '池03',
    value: 'TV03',
  },
  {
    label: '池04',
    value: 'TV04',
  },
  {
    label: '池05',
    value: 'TV05',
  },
  {
    label: '池06',
    value: 'TV06',
  },
  {
    label: '池07',
    value: 'TV07',
  },
  {
    label: '池08',
    value: 'TV08',
  },
  {
    label: '池09',
    value: 'TV09',
  },
  {
    label: '池10',
    value: 'TV10',
  },
  {
    label: '池11',
    value: 'TV11',
  },
  {
    label: '池12',
    value: 'TV12',
  },
  {
    label: '池13',
    value: 'TV13',
  },
  {
    label: '池14',
    value: 'TV14',
  },
  {
    label: 'TTV1',
    value: 'TTV1',
  },
  {
    label: 'TTV2',
    value: 'TTV2',
  },
];

export const abnormalRecordsTableColumn = [
  { prop: 'wid', label: '井名' },
  {
    prop: 'warnValue',
    label: '警报类型',
    formatter: (row, column) => row[column.property] ?? '-',
  },
  {
    prop: 'excValue',
    label: '警报信息',
    formatter: (row, column) => row[column.property] ?? '-',
  },
  {
    prop: 'warnState',
    label: '警报结果',
    formatter: (row, column) => {
      const strArr = new Map([
        [0, '未处理'],
        [1, '正确'],
        [2, '错误'],
      ]);
      return strArr.get(row[column.property]) ?? '-';
    },
  },
  {
    prop: 'warnSourceValue',
    label: '警报来源',
    formatter: (row, column) => row[column.property] ?? '-',
  },
  {
    prop: 'sdatetime',
    label: '报警时间',
    width: 170,
    formatter: (row, column) => row[column.property] ?? '-',
  },
  {
    prop: 'condValue',
    label: '工况',
    formatter: (row, column) => row[column.property] ?? '-',
  },
  {
    prop: 'fileNum',
    label: '附件情况',
    formatter: (row, column) => (row[column.property] > 0 ? '有' : '无'),
  },
  { prop: 'operate', label: '操作', width: 150, slot: true },
];

export const exceptionDetailsBasicList = [
  {
    label: '平台:',
    prop: 'platformName',
  },
  {
    label: '井名:',
    prop: 'wid',
  },
  {
    label: '井深:',
    prop: 'dmea',
  },
  {
    label: '垂深:',
    prop: 'dver',
  },
  {
    label: '钻头深度:',
    prop: 'dbtm',
  },
  {
    label: '工况:',
    prop: 'condValue',
  },
  {
    label: '警报类型:',
    prop: 'warnValue',
  },
  {
    label: '警报信息:',
    prop: 'excValue',
  },

  {
    label: '警报结果:',
    prop: 'warnState',
  },
  {
    label: '警报来源:',
    prop: 'warnSourceValue',
  },
  {
    label: '报警时间:',
    prop: 'sdatetime',
  },
  {
    label: '深度:',
    prop: 'depth',
  },
  {
    label: '层位:',
    prop: 'horizon',
  },
];

export const exceptionDetailsTableColumn = [
  { prop: 'showDic', label: '异常参数' },
  { prop: 'showMsg', label: '异常内容' },
];

export const exceptionDetailsTableColumn2 = [
  { prop: 'excResultValue', label: '警报结果' },
  { prop: 'updateTime', label: '处理时间' },
  { prop: 'excMsg', label: '警报原因描述' },
  { prop: 'createUser', label: '处理人' },
  { prop: 'fileList', label: '附件', slot: true },
];
