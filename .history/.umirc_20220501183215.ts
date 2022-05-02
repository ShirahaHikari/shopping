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
    { path: '/changePassword', component: '@/pages/changePassword'},//注册页面
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
    { path: '/food/beer/beer1', component: '@/pages/kindPages/beer/beer1'},//分类 啤酒1
    { path: '/food/beer/beer2', component: '@/pages/kindPages/beer/beer2'},//分类 啤酒2
    { path: '/food/beer/beer3', component: '@/pages/kindPages/beer/beer3'},//分类 啤酒3
    { path: '/food/beer/beer4', component: '@/pages/kindPages/beer/beer4'},//分类 啤酒4
    { path: '/food/beer/beer5', component: '@/pages/kindPages/beer/beer5'},//分类 啤酒5
    { path: '/food/beer/beer6', component: '@/pages/kindPages/beer/beer6'},//分类 啤酒6
    { path: '/food/beer/beer7', component: '@/pages/kindPages/beer/beer7'},//分类 啤酒7
    { path: '/food/beer/beer8', component: '@/pages/kindPages/beer/beer8'},//分类 啤酒8
    //以上为啤酒的小分类
    { path: '/computer/deskTop/desktopComputer1', component: '@/pages/kindPages/desktopComputer/desktopComputer1'},//分类 台式电脑1
    { path: '/computer/deskTop/desktopComputer2', component: '@/pages/kindPages/desktopComputer/desktopComputer2'},//分类 台式电脑2
    { path: '/computer/deskTop/desktopComputer3', component: '@/pages/kindPages/desktopComputer/desktopComputer3'},//分类 台式电脑3
    { path: '/computer/deskTop/desktopComputer4', component: '@/pages/kindPages/desktopComputer/desktopComputer4'},//分类 台式电脑4
    { path: '/computer/deskTop/desktopComputer5', component: '@/pages/kindPages/desktopComputer/desktopComputer5'},//分类 台式电脑5
    { path: '/computer/deskTop/desktopComputer6', component: '@/pages/kindPages/desktopComputer/desktopComputer6'},//分类 台式电脑6
    { path: '/computer/deskTop/desktopComputer7', component: '@/pages/kindPages/desktopComputer/desktopComputer7'},//分类 台式电脑7
    { path: '/computer/deskTop/desktopComputer8', component: '@/pages/kindPages/desktopComputer/desktopComputer8'},//分类 台式电脑8
    //以上为台式电脑的小分类
    { path: '/computer/noteBook/notebookComputer1', component: '@/pages/kindPages/notebookComputer/notebookComputer1'},//分类 笔记本电脑1
    { path: '/computer/noteBook/notebookComputer2', component: '@/pages/kindPages/notebookComputer/notebookComputer2'},//分类 笔记本电脑2
    { path: '/computer/noteBook/notebookComputer3', component: '@/pages/kindPages/notebookComputer/notebookComputer3'},//分类 笔记本电脑3
    { path: '/computer/noteBook/notebookComputer4', component: '@/pages/kindPages/notebookComputer/notebookComputer4'},//分类 笔记本电脑4
    { path: '/computer/noteBook/notebookComputer5', component: '@/pages/kindPages/notebookComputer/notebookComputer5'},//分类 笔记本电脑5
    { path: '/computer/noteBook/notebookComputer6', component: '@/pages/kindPages/notebookComputer/notebookComputer6'},//分类 笔记本电脑6
    { path: '/computer/noteBook/notebookComputer7', component: '@/pages/kindPages/notebookComputer/notebookComputer7'},//分类 笔记本电脑7
    { path: '/computer/noteBook/notebookComputer8', component: '@/pages/kindPages/notebookComputer/notebookComputer8'},//分类 笔记本电脑8
    //以上为笔记本电脑的小分类
    { path: '/clothes/jacket/jacket1', component: '@/pages/kindPages/jacket/jacket1'},//分类 上衣1
    { path: '/clothes/jacket/jacket2', component: '@/pages/kindPages/jacket/jacket2'},//分类 上衣2
    { path: '/clothes/jacket/jacket3', component: '@/pages/kindPages/jacket/jacket3'},//分类 上衣3
    { path: '/clothes/jacket/jacket4', component: '@/pages/kindPages/jacket/jacket4'},//分类 上衣4
    { path: '/clothes/jacket/jacket5', component: '@/pages/kindPages/jacket/jacket5'},//分类 上衣5
    { path: '/clothes/jacket/jacket6', component: '@/pages/kindPages/jacket/jacket6'},//分类 上衣6
    { path: '/clothes/jacket/jacket7', component: '@/pages/kindPages/jacket/jacket7'},//分类 上衣7
    { path: '/clothes/jacket/jacket8', component: '@/pages/kindPages/jacket/jacket8'},//分类 上衣8
    //以上为上衣的小分类
    { path: '/clothes/pants/pants1', component: '@/pages/kindPages/pants/pants1'},//分类 裤子1
    { path: '/clothes/pants/pants2', component: '@/pages/kindPages/pants/pants2'},//分类 裤子2
    { path: '/clothes/pants/pants3', component: '@/pages/kindPages/pants/pants3'},//分类 裤子3
    { path: '/clothes/pants/pants4', component: '@/pages/kindPages/pants/pants4'},//分类 裤子4
    { path: '/clothes/pants/pants5', component: '@/pages/kindPages/pants/pants5'},//分类 裤子5
    { path: '/clothes/pants/pants6', component: '@/pages/kindPages/pants/pants6'},//分类 裤子6
    { path: '/clothes/pants/pants7', component: '@/pages/kindPages/pants/pants7'},//分类 裤子7
    { path: '/clothes/pants/pants8', component: '@/pages/kindPages/pants/pants8'},//分类 裤子8
    //以上为裤子的小分类
    { path: '/food/seafood/seafood1', component: '@/pages/kindPages/seafood/seafood1'},//分类 生鲜1
    { path: '/food/seafood/seafood2', component: '@/pages/kindPages/seafood/seafood2'},//分类 生鲜2
    { path: '/food/seafood/seafood3', component: '@/pages/kindPages/seafood/seafood3'},//分类 生鲜3
    { path: '/food/seafood/seafood4', component: '@/pages/kindPages/seafood/seafood4'},//分类 生鲜4
    { path: '/food/seafood/seafood5', component: '@/pages/kindPages/seafood/seafood5'},//分类 生鲜5
    { path: '/food/seafood/seafood6', component: '@/pages/kindPages/seafood/seafood6'},//分类 生鲜6
    { path: '/food/seafood/seafood7', component: '@/pages/kindPages/seafood/seafood7'},//分类 生鲜7
    { path: '/food/seafood/seafood8', component: '@/pages/kindPages/seafood/seafood8'},//分类 生鲜8
    //以上为生鲜的小分类
    { path: '/food/snack/snack1', component: '@/pages/kindPages/snack/snack1'},//分类 零食1
    { path: '/food/snack/snack2', component: '@/pages/kindPages/snack/snack2'},//分类 零食2
    { path: '/food/snack/snack3', component: '@/pages/kindPages/snack/snack3'},//分类 零食3
    { path: '/food/snack/snack4', component: '@/pages/kindPages/snack/snack4'},//分类 零食4
    { path: '/food/snack/snack5', component: '@/pages/kindPages/snack/snack5'},//分类 零食5
    { path: '/food/snack/snack6', component: '@/pages/kindPages/snack/snack6'},//分类 零食6
    { path: '/food/snack/snack7', component: '@/pages/kindPages/snack/snack7'},//分类 零食7
    { path: '/food/snack/snack8', component: '@/pages/kindPages/snack/snack8'},//分类 零食8
  ],
  fastRefresh: {},
  proxy:{
    '/api':{
      'target':'http://localhost:3000',
      'changeOrigin' : true,
    }
  }
});
