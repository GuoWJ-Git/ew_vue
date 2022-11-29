import { App } from 'vue';

import FreeButton from '@/components/free-button';
import FreeDialog from '@/components/free-dialog';
import FreeEcharts from '@/components/free-echarts';
import FreeException from '@/components/free-exception';
import FreeForm from '@/components/free-form';
import FreeIcon from '@/components/free-icon';
import FreePagination from '@/components/free-pagination';
import FreeTable from '@/components/free-table';
import SvgIcon from '@/components/svg-icon';
import TableOperate from '@/components/table-operate';

export function setupComponents(app: App) {
  app.component(FreeButton.name, FreeButton);
  app.component(FreeDialog.name, FreeDialog);
  app.component(FreeEcharts.name, FreeEcharts);
  app.component(FreeIcon.name, FreeIcon);
  app.component(FreeForm.name, FreeForm);
  app.component(FreeTable.name, FreeTable);
  app.component(FreePagination.name, FreePagination);
  app.component(FreeException.name, FreeException);
  app.component(SvgIcon.name, SvgIcon);
  app.component(TableOperate.name, TableOperate);
}
