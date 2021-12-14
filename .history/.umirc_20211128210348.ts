import { defineConfig } from 'umi';

export default defineConfig({
  layout:{
    siderWidth: 200,
    name: '毕业设计商城',
    fixedHeader:false,
    // fixSiderbar:false,
    Headers: false,
    waterMarkProps:false,
    contentWidth: 'Fluid',
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
