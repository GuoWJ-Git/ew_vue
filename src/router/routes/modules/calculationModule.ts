import Layout from '@/layout/BasicLayout.vue';
import { AppRouteModule } from '@/router/types';
import PhysicalDetermination from '@/views/calculation-module/late-time/physical-determination/index.vue';
import PumpJetting from '@/views/calculation-module/late-time/pump-jetting/index.vue';

const dashboard: AppRouteModule[] = [
  {
    path: '/calculation-module',
    name: 'calculationModule',
    redirect: '/',
    component: Layout,
    meta: {
      orderNo: 2,
      icon: 'el-icon-lock',
      title: '计算模块',
    },
    children: [
      {
        path: 'late-time',
        name: 'lateTime',
        meta: { title: '迟到时间', icon: 'el-icon-lock' },
        children: [
          {
            path: 'physical-determination',
            name: 'physicalDetermination',
            meta: { title: '实物测定法', icon: 'el-icon-lock' },
            component: PhysicalDetermination,
          },
          // {
          //   path: 'pump-jetting',
          //   name: 'PumpJetting',
          //   meta: { title: '泵冲法', icon: 'el-icon-lock' },
          //   component: PumpJetting,
          // },
        ],
      },
    ],
  },
];

export default dashboard;
