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
    { path: '/', component: '@/pages/login', name: '登录' },
    { path: '/register', component: '@/pages/register', name: '注册' },
    { path: '/home', component: '@/pages/home/components/pageHeader', name: '首页' },
  ],
  fastRefresh: {},
  proxy:{
    '/api':{
      'target':'localhost:3000',
      'changeOrigin' : true,
    }
  }
});
