import Layout from '@/layout/BasicLayout.vue';
import { AppRouteModule } from '@/router/types';
import Home from '@/views/Home.vue';

const dashboard: AppRouteModule[] = [
  {
    path: '/',
    name: 'HomePage',
    redirect: '/home',
    component: Layout,
    meta: {
      orderNo: 1,
      icon: 'el-icon-s-home',
      title: '首页',
      hideChildrenInMenu: true,
    },
    children: [
      {
        path: 'home',
        name: 'HomePage',
        meta: { title: '首页', icon: 'el-icon-s-home' },
        component: Home,
      },
    ],
  },
];

export default dashboard;
