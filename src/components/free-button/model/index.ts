type Fn = () => void;

type TextType = string | ((scope: Record<string, unknown>, column: Object) => string);

export interface ButtonOperator {
  action: string;
  text: TextType;
  type?: string;
  size?: string;
  icon?: string;
  onClick?: Fn;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const BUTTON_OPERATOR_MAP: ButtonOperator[] = [
  {
    action: 'more',
    type: 'text',
    size: 'small',
    icon: 'el-icon-view',
    class: 'font-color-success',
    text: '查看',
  },
  {
    action: 'edit',
    type: 'text',
    size: 'small',
    icon: 'el-icon-edit',
    text: '编辑',
  },
  {
    action: 'delete',
    type: 'text',
    size: 'small',
    icon: 'el-icon-delete',
    class: 'font-color-danger',
    text: '删除',
  },
  {
    action: 'export',
    type: 'text',
    size: 'small',
    icon: 'el-icon-download',
    class: 'font-color-success',
    text: '导出',
  },
  {
    action: 'import',
    type: 'text',
    size: 'small',
    icon: 'el-icon-upload',
    class: 'font-color-warning',
    text: '导入',
  },
];
