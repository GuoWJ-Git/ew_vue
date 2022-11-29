import Layout from '@/layout/BasicLayout.vue';
import { AppRouteModule } from '@/router/types';
import Horizontal from '@/views/3d-well-track/horizontal.vue';
import ThreeWellTrack from '@/views/3d-well-track/index.vue';
import Vertical from '@/views/3d-well-track/vertical.vue';

const dashboard: AppRouteModule[] = [
  {
    path: '/3d',
    name: '3d',
    redirect: '/',
    component: Layout,
    meta: {
      orderNo: 2,
      icon: 'el-icon-lock',
      title: '3d',
    },
    children: [
      {
        path: 'well-track',
        name: 'wellTrack',
        meta: { title: '3d井轨迹', icon: 'el-icon-lock' },
        component: ThreeWellTrack,
      },
      {
        path: 'vertical',
        name: 'Vertical',
        meta: { title: '垂直投影', icon: 'el-icon-lock' },
        component: Vertical,
      },
      {
        path: 'horizontal',
        name: 'Horizontal',
        meta: { title: '水平投影', icon: 'el-icon-lock' },
        component: Horizontal,
      },
    ],
  },
];

export default dashboard;
