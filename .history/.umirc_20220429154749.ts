import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/login',access:'normalRouteFilter' },//用户登录
    { path: '/managerLogin', component: '@/pages/managerLogin',access:'normalRouteFilter' },//管理员登录
    { path: '/register', component: '@/pages/register'},//注册页面
    { path: '/home', component: '@/pages/home', model: '@pages/home'},//首页
    //分割线
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
    //以上为猜你喜欢的购物商品详情页
    { path: '/mail', component: '@/pages/personInfo'}, //用户的购物车页面
    { path: '/managerHome', component: '@/pages/managerPage'}, //管理员的用户个人信息主页面
    { path: '/managerUserShop', component: '@/pages/managerPage/userShopInfo'}, //管理员的用户购买商品页面
    { path: '/managerUserAdvise', component: '@/pages/managerPage/userAdvise'}, //管理员的用户评价消息页面
    //以上为用户管理页面
    { path: '/computer/deskTop', component: '@/pages/kindPages/desktopComputer'},//分类 台式电脑
    { path: '/computer/noteBook', component: '@/pages/kindPages/noteBookComputer'},//分类 笔记本电脑
    { path: '/food/snack', component: '@/pages/kindPages/snack'},//分类 零食
    { path: '/food/beer', component: '@/pages/kindPages/beer'},//分类 啤酒
    { path: '/food/seafood', component: '@/pages/kindPages/seafood'},//分类 生鲜
    { path: '/clothes/socks', component: '@/pages/kindPages/sock'},//分类 袜子
    { path: '/clothes/pants', component: '@/pages/kindPages/pants'},//分类 裤子
    { path: '/clothes/jacket', component: '@/pages/kindPages/jacket'},//分类 上衣
    //以上为各大类的页面
    { path: '/food/beer/bear1', component: '@/pages/kindPages/beer/bear1'},//分类 啤酒1
    { path: '/food/beer/bear1', component: '@/pages/kindPages/beer/bear2'},//分类 啤酒2
    { path: '/food/beer/bear1', component: '@/pages/kindPages/beer/bear3'},//分类 啤酒3
    { path: '/food/beer/bear1', component: '@/pages/kindPages/beer/bear4'},//分类 啤酒4
    { path: '/food/beer/bear1', component: '@/pages/kindPages/beer/bear5'},//分类 啤酒5
    { path: '/food/beer/bear1', component: '@/pages/kindPages/beer/bear6'},//分类 啤酒6
    { path: '/food/beer/bear1', component: '@/pages/kindPages/beer/bear7'},//分类 啤酒7
    { path: '/food/beer/bear1', component: '@/pages/kindPages/beer/bear8'},//分类 啤酒8
  ],
  fastRefresh: {},
  proxy:{
    '/api':{
      'target':'http://localhost:3000',
      'changeOrigin' : true,
    }
  }
});
