export interface RealTimeSetting {
  dataSourceChoose: {
    ip: string;
    port: string;
    wellId: string;
    wistType: string;
    wellName: string;
    handleType: string;
  };
}

const setting: RealTimeSetting = {
  dataSourceChoose: {
    ip: '',
    port: '',
    wellId: '',
    wellName: '',
    wistType: 'client',
    handleType: 'save',
  },
};

export default setting;
