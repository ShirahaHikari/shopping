import { defineConfig } from 'umi';

export default defineConfig({
  layout:{
    siderWidth: 200,
    name: '毕业设计商城',
    fixedHeader:false,
    Headers: false,
    waterMarkProps:false,
    contentWidth: 'Fluid',
    logout:()=>{},
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/login',access:'normalRouteFilter' },
    { path: '/register', component: '@/pages/register'},
    { path: '/home', 
    component: '@/pages/home/components/pageHeader', 
    name: '首页' , 
    // wrappers:[
    //   './Authorized'
    // ] 
  },
  ],
  fastRefresh: {},
  proxy:{
    '/api':{
      'target':'http://localhost:3000',
      'changeOrigin' : true,
    }
  }
});
