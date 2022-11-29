export const tableColumn = [
  {
    prop: "startTime",
    label: "开始时间",
    formatter: (row, column) => row[column.property] ?? "-",
  },
  {
    prop: "endTime",
    label: "结束时间",
    formatter: (row, column) => row[column.property] ?? "-",
  },
  { prop: "wid", label: "井号" },
  { prop: "userId", label: "开启人" },
  { prop: "switchState", label: "开关状态", slot: true },
  {
    prop: "openClose",
    label: "开口状态",
    formatter: (row, column) => {
      const status = row[column.property];
      if (status === "open") {
        return "开口";
      } else if (status === "close") {
        return "闭口";
      } else {
        return "-";
      }
    },
  },
  {
    prop: "value",
    label: "工况",
  },
  { prop: "operate", label: "操作", width: 200, slot: true },
];
