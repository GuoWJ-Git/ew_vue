import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/biz-api/login',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      console.log('body', body);
      return {
        code: 0,
        msg: 'request ok',
        data: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEYXRhIjp7ImlkIjoxOCwidXNlck5hbWUiOiJhZG1pbiIsIm5pY2tOYW1lIjoi566h55CG5ZGYIiwicm9sZXMiOlsiYWRtaW4iLCJtYW5hZ2VyIl19LCJleHAiOjE2MjcyOTYxMTMuMjA2Mzc0LCJpYXQiOjE2MjcyOTQzMTMuMjA2Mzc0fQ.d-Ax1b-cOap_s_Pz5nxmPXm3dnL_nvsjNUJIfVQ0ysY',
        },
      };
    },
  },
  {
    url: '/biz-api/getUserInfo',
    timeout: 200,
    method: 'get',
    response: ({ body }) => {
      console.log('body', body);
      return {
        code: 0,
        msg: 'request ok',
        data: {
          id: 18,
          userName: 'admin',
          nickName: '管理员',
          icon: '',
          phone: '15970954230',
          email: '',
          isUpdatePwd: 0,
          roles: ['admin', 'manager'],
        },
      };
    },
  },
  {
    url: '/biz-api/user/menu/tree',
    timeout: 200,
    method: 'get',
    response: ({ body }) => {
      console.log('body', body);
      return {
        code: 0,
        msg: 'request ok',
        data: [
          {
            name: 'Micro',
            path: '/micro',
            component: 'Layout',
            meta: {
              title: '子应用',
              icon: 'el-icon-setting',
              isMicro: true,
            },
            children: [
              {
                name: 'MicroDemo',
                path: 'demo/demo-page1',
                meta: {
                  title: 'demo',
                  icon: 'el-icon-star-off',
                },
              },
              {
                name: 'MicroIframe',
                path: 'iframe/qiankun',
                meta: {
                  title: 'iframe',
                  icon: 'el-icon-star-off',
                },
              },
            ],
          },
          {
            name: 'WellLog',
            path: '/welllog',
            component: 'Layout',
            meta: {
              title: '图道子应用',
              icon: 'el-icon-setting',
              isMicro: true,
            },
            children: [
              {
                name: 'visualConfig',
                path: 'visualConfig',
                meta: {
                  title: 'visualConfig',
                  icon: 'el-icon-star-off',
                },
              },
              {
                name: 'visualConfigShow',
                path: 'visualConfigShow',
                meta: {
                  title: 'visualConfigShow',
                  icon: 'el-icon-star-off',
                },
              },
            ],
          },
          {
            name: 'Permission',
            path: '/permission',
            redirect: '/',
            component: 'Layout',
            meta: {
              title: '权限管理',
              icon: 'el-icon-setting',
              ignoreKeepAlive: false,
              hideMenu: false,
              orderNo: 1,
            },
            children: [
              {
                name: 'User',
                path: 'user',
                component: '/permission/user-manage/index',
                meta: {
                  title: '用户管理',
                  icon: 'el-icon-star-off',
                  hideMenu: false,
                  ignoreKeepAlive: false,
                  currentActiveMenu: '/permission/user',
                },
              },
              {
                name: 'Role',
                path: 'role',
                component: '/permission/role-manage/index',
                meta: {
                  title: '角色管理',
                  icon: 'el-icon-star-off',
                  hideMenu: false,
                  ignoreKeepAlive: false,
                  currentActiveMenu: '/permission/role',
                },
              },
              {
                name: 'App',
                path: 'app',
                component: '/permission/app-manage/index',
                meta: {
                  title: '应用管理',
                  icon: 'el-icon-star-off',
                  hideMenu: false,
                  ignoreKeepAlive: false,
                  currentActiveMenu: '/permission/app',
                },
              },
              {
                name: 'Menu',
                path: 'menu',
                component: '/permission/menu-manage/index',
                meta: {
                  title: '菜单管理',
                  icon: 'el-icon-star-off',
                  hideMenu: false,
                  ignoreKeepAlive: false,
                  currentActiveMenu: '/permission/menu',
                },
              },
            ],
          },
        ],
      };
    },
  },
] as MockMethod[];
