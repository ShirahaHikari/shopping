import React, { useState } from 'react'
import { connect } from 'dva'
import { Dispatch } from 'redux'
import axios from 'axios'
import { Menu, Button, message, Modal, Carousel } from 'antd'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    HomeOutlined,
    CoffeeOutlined,
    ContainerOutlined,
    ClearOutlined,
    SkinOutlined,
    MailOutlined,
} from '@ant-design/icons';
import HeadTop from '../headTop/index'
import { useModel } from 'umi';
import styles from './index.less'

const { SubMenu } = Menu
const HomePage = (props: any) => {
    let userInfo = window.sessionStorage.getItem('userInfo')
    let user
    console.log('userInfo is:' + userInfo)
    if (userInfo == null) {
        message.error('你没有登录！')
        setTimeout(() => {
            window.location.href = './ '
        }, 1000);
    } else {
        user = JSON.parse(userInfo ? userInfo : '')
    }
    return (
        <div style={{ backgroundColor: 'rgb(234,232,235)', width: '100%', height: '3000px' }}>
            <div className={styles.floatButton}>
                <a href="#top"><div style={{ width: '40px' }}>回到顶部↑</div></a>
                <a href="#like"><div style={{ width: '40px' }}>猜你喜欢</div></a>
            </div>
            <div>
                <div className={styles.menu} id='top'>
                    <div className={styles.menu} id='top'>
                        <Menu selectedKeys={['home']} mode="horizontal" >
                            <Menu.Item key="home" icon={<HomeOutlined />} style={{ width: 150, marginLeft: '300px' }} >
                                <a onClick={() => { window.location.href = '/home' }}>
                                    首页
                                </a>
                            </Menu.Item>
                            <SubMenu key="computer" icon={<DesktopOutlined />} title="电脑" style={{ width: 150 }}>
                                <Menu.ItemGroup>
                                    <Menu.Item key="noteBook">
                                        <a onClick={() => { window.location.href = '/computer/noteBook' }}>
                                            笔记本电脑
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="deskTop">
                                        <a onClick={() => { window.location.href = '/computer/deskTop' }}>
                                            台式电脑
                                        </a>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="food" icon={<CoffeeOutlined />} title="美食" style={{ width: 150 }}>
                                <Menu.ItemGroup>
                                    <Menu.Item key="snack">
                                        <a onClick={() => { window.location.href = '/food/snack' }}>
                                            零食
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="seafood">
                                        <a onClick={() => { window.location.href = '/food/seafood' }}>
                                            生鲜
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="beer">
                                        <a onClick={() => { window.location.href = '/food/beer' }}>
                                            啤酒
                                        </a>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="clothes" icon={<SkinOutlined />} title="服饰" style={{ width: 150 }}>
                                <Menu.ItemGroup>
                                    <Menu.Item key="jacket" style={{ width: 100 }}>
                                        <a onClick={() => { window.location.href = '/clothes/jacket' }}>
                                            上衣
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="pants">
                                        <a onClick={() => { window.location.href = '/clothes/pants' }}>
                                            裤子
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="socks">
                                        <a onClick={() => { window.location.href = '/clothes/socks' }}>
                                            袜子
                                        </a>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <Menu.Item key="mail" icon={<MailOutlined />} style={{ width: 150 }}>
                                <a href="/mail">个人信息</a>
                            </Menu.Item>
                            <Menu.Item key="logOut" icon={<ClearOutlined />} style={{ width: 150 }}>
                                <a onClick={() => {
                                    window.sessionStorage.removeItem('userInfo')
                                    window.location.href = '/'
                                }}>
                                    账号登出
                                </a>
                            </Menu.Item>
                            <Menu.Item key='hello' disabled style={{ width: 150, left: 120 }}>
                                你好！{user?.username ? user.username : ''}
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
            <div className={styles.mainPage}>
                <div className={styles.border}>
                    <div className={styles.autoFather}>
                        <Carousel autoplay>
                            <a className={styles.autoPlay} href="#" ><img src={require('../../imgs/adv1.jpg')} alt="" /></a>
                            <a className={styles.autoPlay} href="#" ><img src={require('../../imgs/adv2.jpg')} alt="" /></a>
                            <a className={styles.autoPlay} href="#" ><img src={require('../../imgs/adv3.jpg')} alt="" /></a>
                        </Carousel>
                    </div>
                    <div className={styles.rightText}>
                        <h3 style={{ marginLeft: '20px', width: '100px', height: '30px', color:'white'}}>主题市场</h3>
                        <a href="manShirt"><span style={{ marginLeft: '10px' }}>笔记本电脑</span></a>
                        <span> / </span>
                        <a href="sports"><span>台式电脑</span></a>
                        <br />
                        <a href="womenShirt"><span style={{ marginLeft: '10px' }}>零食</span></a>
                        <span> / </span>
                        <a href="furniture"><span>生鲜</span></a>
                        <span> / </span>
                        <a href="bag"><span>啤酒</span></a>
                        <br />
                        <a href="phone"><span style={{ marginLeft: '10px' }}>上衣</span></a>
                        <span> / </span>
                        <a href="earphone"><span>裤子</span></a>
                        <span> / </span>
                        <a href="television"><span>袜子</span></a>
                    </div>
                    <a href="todayPrefer" target='_blank'><img src={require('../../imgs/adv5.jpg')} style={{ width: '300px', height: '280px', marginTop: '80px', marginLeft: '20px', borderRadius: '20px' }} alt="" /></a>
                </div>
                <div className={styles.guessYouLike} id='like'>
                    <h2 style={{ marginTop: 30, marginLeft: '60px' }}>猜你喜欢</h2>
                    <img style={{ width: 70, height: 25, marginTop: 35, marginLeft: 8 }} src={require('../../imgs/personalLike.png')} alt="" />
                </div>
                <div className={styles.guessYouLikeItems}>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/toiletPaper"><img src={require('../../imgs/toiletPaper.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/toiletPaper"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', fontSize: '15px' }}>心相印纸巾抽纸整箱大包家用实惠装卫生纸心心相印餐巾纸</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥9.90</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/earPhone"><img src='https://img.alicdn.com/bao/uploaded/i4/3487767124/O1CN01jlLdo822UqJraHLZG_!!0-item_pic.jpg_468x468q75.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/earPhone"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>Forld蓝牙耳机双耳真无线运动跑步入耳耳塞式迷你隐形5.0</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥179.80</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/wangMilk"><img src={require('../../imgs/wwMilk.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/wangMilk"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>旺旺旺仔牛奶245ml*24罐装营养早餐奶学生饮料儿童复原乳</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥39.90</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/italityDiningRoom"><img src={require('../../imgs/italityDiningRoom.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/italityDiningRoom"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>意式极简风布艺沙发意大利高档轻奢头层牛皮真皮客厅L形转角沙发</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥5880.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/diyHotpot"><img src={require('../../imgs/diyHotpot.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/diyHotpot"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>懒人自热小火锅速食牛肉重庆便宜土豆粉自助网红麻辣烫</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥9.90</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/earPhoneProtector"><img src={require('../../imgs/earPhoneProtector.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/earPhoneProtector"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>VIVOTWS 2真无线降噪耳机保护套vivotws2蓝牙保护壳</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥8.80</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/glassCup"><img src={require('../../imgs/glassCup.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/glassCup"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>刻度吸管玻璃杯ins家用奶茶网红牛奶果汁水杯子带盖</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥9.90</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/japaneseHat"><img src={require('../../imgs/japaneseHat.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/japaneseHat"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>帽子男女春夏太阳帽防晒遮脸遮阳2021新款鸭舌帽</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥9.90</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/potatoChips"><img src={require('../../imgs/potatoChips.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/potatoChips"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>乐事薯片小包装整箱宿舍耐吃零食大礼包</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥9.80</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/clothWashes"><img src='https://img.alicdn.com/bao/uploaded/i3/2208876287325/O1CN01AtlLxF23ytvWVINHY_!!2208876287325.jpg_468x468q75.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/clothWashes"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>超能袋装洗衣液2袋补充替换装家庭装低泡天然皂液</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥6.80</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/pen"><img src={require('../../imgs/pen.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/pen"><span style={{ position: 'absolute', bottom: '70px', width: '250px', right: '0px' }}>auupoint 一只好写的笔</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥5.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/strawberry"><img src={require('../../imgs/strawberry.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/strawberry"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>冻干草莓水果干果脯草莓干草莓脆解馋网红零食小吃休闲食品</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥9.90</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/dress"><img src='https://img.alicdn.com/bao/uploaded/i3/845371903/O1CN01v2JhI11PvcLDJbdmC_!!0-item_pic.jpg_468x468q75.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/dress"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>新款复古格子毛呢连衣裙女秋冬时尚减龄中长款背带裙学院风鱼尾裙</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥9.90</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/blackPants"><img src='https://img.alicdn.com/bao/uploaded/i4/3050277404/O1CN01JynYgt24Z5D2T25lV_!!0-item_pic.jpg_468x468q75.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/blackPants"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>秋季新款！刺绣黑灰牛仔裤男弹力修身小脚裤潮牌余文乐猫须长裤子</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥49.90</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/plasticBox"><img src={require('../../imgs/plasticBox.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/plasticBox"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>加厚特大号收纳箱塑料盒子家用装衣服玩具储物箱</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥11.60</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/fashionBag"><img src={require('../../imgs/fashionBag.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/fashionBag"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>春夏小清新包包2022新款潮时尚链条斜挎包女包春夏百搭迷你小方包</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥42.50</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/massageChair"><img src='https://img.alicdn.com/bao/uploaded/i2/1771842251/O1CN01FZAYyL1SV0IKPaaJ3_!!0-item_pic.jpg_468x468q75.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/massageChair"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>奥佳华按摩椅家用全身全自动太空舱多功能电动沙发智能OG7808Core</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥8999.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/cartoonPen"><img src={require('../../imgs/cartoonPen.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/cartoonPen"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>ZEBRA斑马官方旗舰店稀有限定红羽毛笔三丽鸥库洛米美乐蒂中性笔</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥31.04</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/moYuShuang"><img src={require('../../imgs/moYuShuang.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/moYuShuang"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>卫龙魔芋爽散装称重2斤约60包香辣麻辣酸辣魔芋丝素毛肚休闲零食</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥12.90</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/japaneseNotebook"><img src='https://img.alicdn.com/bao/uploaded/i1/2469263625/O1CN01GXjzkS1ceIURINcxk_!!2469263625.jpg_468x468q75.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/japaneseNotebook"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>日本KOKUYO国誉noritake/sousou联名A6方格横线B5笔记本手账本子</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥17.80</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/baseballHat"><img src='https://gw.alicdn.com/imgextra/O1CN018v4k441oGH6hrH3l6_!!282185197.jpg_300x300q50s150.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/baseballHat"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>韩国正品MLB棒球帽洋基队男女2022新款小标LA帽子软顶夏NY鸭舌帽</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥38.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/diamondPen"><img src={require('../../imgs/diamondPen.webp')} alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/diamondPen"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>施华洛世奇笔Swarovski水晶笔新款中性笔圆珠笔办公用品定制logo</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥90.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/runMachine"><img src='https://img.alicdn.com/bao/uploaded/i1/2212329701676/O1CN01SU9AUC1OFeY1afTDU_!!0-item_pic.jpg_468x468q75.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/runMachine"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>舒华智能跑步机家用款小型折叠静音健身房3900支持HUAWEI HiLink</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥3979.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="likeItems/jordanShoe"><img src='https://img.alicdn.com/bao/uploaded/i1/71537436/O1CN01vW7GYE24njnr10xku_!!71537436.jpg_468x468q75.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="likeItems/jordanShoe"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px' }}>Jordan官方耐克乔丹AIR JORDAN 1 AJ1男子运动鞋休闲复古DH6933</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥999.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ homePage }: { homePage: any }) => ({
    homePage
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSaveState: (payload: any) => {
        dispatch({
            type: 'homePage/save',
            payload,
        });
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)