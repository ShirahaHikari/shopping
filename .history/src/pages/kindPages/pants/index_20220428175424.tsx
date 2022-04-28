import React, { useState, useEffect } from 'react'
import { connect } from 'dva'
import { Dispatch } from 'redux'
import axios from 'axios'
import { Menu, Button, message, Modal, Carousel, Table, Form, Input } from 'antd'
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
    SearchOutlined,
} from '@ant-design/icons';
import { useModel } from 'umi';
import styles from './index.less'

const { SubMenu } = Menu
const DeskTopComputer = (props: any) => {
    let userInfo = window.sessionStorage.getItem('userInfo')
    let user: any
    console.log('userInfo is:' + userInfo)
    if (userInfo == null) {
        message.error('你没有登录！')
        setTimeout(() => {
            window.location.href = './ '
        }, 1000);
    } else {
        user = JSON.parse(userInfo ? userInfo : '')
    }
    let [content, setContent] = useState('')
    return (
        <div style={{ backgroundColor: 'rgb(234,232,235)', width: '100%', height: '1500px' }}>
            <div className={styles.menu}>
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
                            Modal.confirm({
                                title: '你确定要退出登录吗？',
                                onOk: () => {
                                    window.sessionStorage.removeItem('userInfo')
                                    window.location.href = '/'
                                },
                                onCancel: () => {
                                    return;
                                },
                                okText: '确认',
                                cancelText: '取消',
                            })
                        }}>
                            账号登出
                        </a>
                    </Menu.Item>
                    <Menu.Item key="input" icon={<SearchOutlined />} id='search'>
                        <input type="text" style={{ width: 100, height: 20, border: '1px solid black', color: 'black' }} value={content} onChange={(e) => {
                            setContent(e.target.value)
                        }} />
                        <span onClick={() => {
                            if (content === '蓝牙耳机') {
                                window.location.href = '/search?=blueEarphone'
                            } else if (content === '球鞋') {
                                window.location.href = '/search?=sportShoe'
                            }
                        }} style={{ marginLeft: 10 }}>搜索</span>
                    </Menu.Item>
                    <Menu.Item key='hello' disabled style={{ width: 150, left: 120 }}>
                        你好！{user?.username ? user.username : ''}
                    </Menu.Item>
                </Menu>
            </div>
            <div className={styles.mainPage} id='top'>
                <div className={styles.guessYouLikeItems}>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/121878460/O1CN01TvJIN72CMjCAXDG94_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop" className={styles.crossOver}><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>男士运动裤子男百搭休闲长裤男春秋季2022新款卫裤束脚裤男生潮牌</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥79.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/45404370/O1CN01oFIAPc1i9VX1PnXCy_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop" className={styles.crossOver}><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>男士裤子休闲裤男春秋宽松直筒裤男裤长裤工装裤潮牌夏季薄款潮流</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥108.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/45404370/O1CN01iVTvcL1i9VXaNDbaF_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>男士黑色宽松直筒裤男休闲裤子高街潮ins百搭2022新款运动裤夏季</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥88.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/385132127/O1CN01IPwELl1RaDBWcVaxd-385132127.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>安踏速干裤丨运动裤男士2022夏季冰丝梭织薄款透气速干直筒长裤子</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥169.00</p>
                    </div>
                   
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/454291526/O1CN01dNhPsk1N8x9GEIZpN_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>GXG男装 【凉凉衣】冰感华夫格白裤子男休闲长裤卫裤22年夏季新品</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥219.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/92688455/O1CN01iMFJqc2CKRUJgdn1A_!!92688455.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>李宁卫裤男士长裤新款束脚针织裤子春夏黑色男裤健身运动裤休闲裤</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥118.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/92688455/O1CN01XhNuck2CKRUF4VRvM_!!92688455.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>李宁卫裤男士2022新款运动时尚系列男装裤子休闲束脚针织运动长裤</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥168.00</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(DeskTopComputer)