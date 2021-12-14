import { defineConfig } from 'umi';

export default defineConfig({
  layout:{
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', name: '首页' },
    { path: '/login', component: '@/pages/login', name: '登录' },
  ],
  fastRefresh: {},
});
