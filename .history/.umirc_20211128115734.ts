import { defineConfig } from 'umi';

export default defineConfig({
  layout:{
    siderWidth: 200,
    name: '毕业设计商城',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/layout', component: '@/pages/index', name: '登录' },
  ],
  fastRefresh: {},
});
