import {defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/about',
      component: '@/pages/about',
    },
    {
      path: '/contact',
      component: '@/pages/contact',
    },
    {
      path: '/home',
      component: '@/pages/home',
    },
    {
      path: '/notfound',
      component: '@/pages/notfound',
    },
  ],
  fastRefresh: {},
  antd: {},
  dva: {},
});
