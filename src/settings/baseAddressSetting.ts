export interface BaseAddressSetting {
  dataSourceChoose: {
    ip: string;
    port: string;
    wellId: string;
    wistType: string;
    wellName: string;
    handleType: string;
  };
}

const setting: BaseAddressSetting = {
  dataSourceChoose: {
    ip: '',
    port: '',
    wellId: '',
    wellName: '',
    wistType: 'client',
    handleType: 'send',
  },
};

export default setting;
