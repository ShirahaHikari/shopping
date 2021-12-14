import { defineConfig } from 'umi';

export default defineConfig({
  layout:{
    siderWidth: 20,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
