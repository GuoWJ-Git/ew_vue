export type Data = { [key: string]: unknown };

export interface FieldItem {
  col?: Record<string, unknown>;
  label: string;
  prop: string;
  type: string;
  props: Data | null;
  options?: Data[];
  hidden?: boolean | false;
  className?: string;
  labelWidth?: {
    type: (StringConstructor | NumberConstructor)[];
    default: string;
  };
  showMessage?: {
    type: BooleanConstructor;
    default: boolean;
  };
  size?: PropType<unknown>;
  inlineMessage?: BooleanConstructor;
  rules?: Recordable | Recordable[];
  event?: {
    change?: Function;
    input?: Function;
    select?: Function;
    blur?: Function;
    focus?: Function;
    keydown?: Function;
  };
}

export type OptionItem = {
  id?: number | string;
  label: string;
  value: unknown;
};
