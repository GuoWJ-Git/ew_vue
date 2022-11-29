export interface ChooseWellSetting {
  ownerId: string;
  drillingId: string;
  siteId: string;
  searchValue: string;
  statusEnd: string;
  startDate?: Array<string>;
  searchBeginTime?: string | number;
  searchEndTime?: string | number;
  chooseWellData: any;
}

const setting: ChooseWellSetting = {
  ownerId: '',
  drillingId: '',
  siteId: '',
  searchValue: '',
  searchBeginTime: '',
  searchEndTime: '',
  statusEnd: '',
  chooseWellData: {},
};

export default setting;
