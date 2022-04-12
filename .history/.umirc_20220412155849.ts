import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/login',access:'normalRouteFilter' },
    { path: '/register', component: '@/pages/register'},
    { path: '/home', component: '@/pages/home', model: '@pages/home'},
    { path: '/likeItems/japaneseHat', component: '@/pages/detail/likeItemPage/japaneseHat'},
    { path: '/likeItems/wangMilk', component: '@/pages/detail/likeItemPage/wangMilk'},
    { path: '/likeItems/earPhone', component: '@/pages/detail/likeItemPage/earPhone'},
    { path: '/likeItems/italityDiningRoom', component: '@/pages/detail/likeItemPage/italityDiningRoom'},
    { path: '/likeItems/diyHotpot', component: '@/pages/detail/likeItemPage/diyHotpot'},
    { path: '/likeItems/earPhoneProtector', component: '@/pages/detail/likeItemPage/earPhoneProtector'},
    { path: '/likeItems/glassCup', component: '@/pages/detail/likeItemPage/glassCup'},
    { path: '/likeItems/potatoChips', component: '@/pages/detail/likeItemPage/potatoChips'},
    { path: '/likeItems/clothWashes', component: '@/pages/detail/likeItemPage/clothWashes'},
    { path: '/likeItems/pen', component: '@/pages/detail/likeItemPage/pen'},
    { path: '/likeItems/strawberry', component: '@/pages/detail/likeItemPage/strawberry'},
    { path: '/likeItems/dress', component: '@/pages/detail/likeItemPage/dress'},
    { path: '/likeItems/blackPants', component: '@/pages/detail/likeItemPage/blackPants'},
    { path: '/likeItems/plasticBox', component: '@/pages/detail/likeItemPage/plasticBox'},
    { path: '/likeItems/fashionBag', component: '@/pages/detail/likeItemPage/fashionBag'},
    { path: '/likeItems/massageChair', component: '@/pages/detail/likeItemPage/massageChair'},
    { path: '/likeItems/cartoonPen', component: '@/pages/detail/likeItemPage/cartoonPen'},
    { path: '/likeItems/moYuShuang', component: '@/pages/detail/likeItemPage/moYuShuang'},
    { path: '/likeItems/japaneseNotebook', component: '@/pages/detail/likeItemPage/japaneseNotebook'},
    { path: '/likeItems/baseballHat', component: '@/pages/detail/likeItemPage/baseballHat'},
    { path: '/likeItems/diamondPen', component: '@/pages/detail/likeItemPage/diamondPen'},
    { path: '/likeItems/runMachine', component: '@/pages/detail/likeItemPage/runMachine'},
    { path: '/likeItems/jordanShoe', component: '@/pages/detail/likeItemPage/jordanShoe'},
    { path: '/likeItems/toiletPaper', component: '@/pages/detail/likeItemPage/toiletPaper'},
  ],
  fastRefresh: {},
  proxy:{
    '/api':{
      'target':'http://localhost:3000',
      'changeOrigin' : true,
    }
  }
});
