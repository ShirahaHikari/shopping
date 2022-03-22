import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/login',access:'normalRouteFilter' },
    { path: '/register', component: '@/pages/register'},
    { path: '/home', component: '@/pages/home', model: '@pages/home'},
    { path: '/likeItems/JapaneseHat', component: '@/pages/home', model: '@pages/home'},
  ],
  fastRefresh: {},
  proxy:{
    '/api':{
      'target':'http://localhost:3000',
      'changeOrigin' : true,
    }
  }
});
