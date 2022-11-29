export const tableColumn = [
  { prop: "wid", label: "井名" },
  {
    prop: "warnValue",
    label: "警报类型",
    formatter: (row, column) => row[column.property] ?? "-",
  },
  {
    prop: "excValue",
    label: "警报信息",
    formatter: (row, column) => row[column.property] ?? "-",
  },
  {
    prop: "warnState",
    label: "警报结果",
    formatter: (row, column) => {
      const strArr = new Map([
        [0, "未处理"],
        [1, "正确"],
        [2, "错误"],
      ]);
      return strArr.get(row[column.property]) ?? "-";
    },
  },
  {
    prop: "warnSourceValue",
    label: "警报来源",
    formatter: (row, column) => row[column.property] ?? "-",
  },
  {
    prop: "sdatetime",
    label: "报警时间",
    width: 170,
    formatter: (row, column) => row[column.property] ?? "-",
  },
  {
    prop: "condValue",
    label: "工况",
    formatter: (row, column) => row[column.property] ?? "-",
  },
  {
    prop: "fileNum",
    label: "附件情况",
    formatter: (row, column) => (row[column.property] > 0 ? "有" : "无"),
  },
  { prop: "operate", label: "操作", width: 150, slot: true },
];

export const exceptionDetailsBasicList = [
  {
    label: "平台:",
    prop: "platformName",
  },
  {
    label: "井名:",
    prop: "wid",
  },
  {
    label: "井深:",
    prop: "dmea",
  },
  {
    label: "垂深:",
    prop: "dver",
  },
  {
    label: "钻头深度:",
    prop: "dbtm",
  },
  {
    label: "工况:",
    prop: "condValue",
  },
  {
    label: "警报类型:",
    prop: "warnValue",
  },
  {
    label: "警报信息:",
    prop: "excValue",
  },

  {
    label: "警报结果:",
    prop: "warnState",
  },
  {
    label: "警报来源:",
    prop: "warnSourceValue",
  },
  {
    label: "报警时间:",
    prop: "sdatetime",
  },
  {
    label: "深度:",
    prop: "depth",
  },
  {
    label: "层位:",
    prop: "horizon",
  },
];

export const exceptionDetailsTableColumn = [
  { prop: "showDic", label: "异常参数" },
  { prop: "showMsg", label: "异常内容" },
];

export const exceptionDetailsTableColumn2 = [
  { prop: "excResultValue", label: "警报结果" },
  { prop: "updateTime", label: "处理时间" },
  { prop: "excMsg", label: "警报原因描述" },
  { prop: "createUser", label: "处理人" },
  { prop: "fileList", label: "附件", slot: true },
];

export const modifyRecordTableColumn = [
  { prop: "createUser", label: "修改人：" },
  { prop: "createTime", label: "修改时间：" },
];
