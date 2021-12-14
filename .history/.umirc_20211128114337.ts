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
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
