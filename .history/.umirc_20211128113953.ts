import { defineConfig } from 'umi';

export default defineConfig({
  layout:{
    siderWidth: 200,
    // Layout:
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
