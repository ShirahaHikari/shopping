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
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/18979014/O1CN01ou0ltc2GSStFjJqOC_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop" className={styles.crossOver}><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>潮汕生腌海鲜虾小海虾醉对虾生腌活虾腌制即食水产灌装呛虾熟食</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥39.95</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/132122162/O1CN01QCO54Y1RqF2nXPoNf_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop" className={styles.crossOver}><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>乳山生蚝鲜活10新鲜海蛎子5斤特大海鲜牡蛎贝壳即食水产批发1箱</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥43.80</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/132122162/O1CN01am0tQd1RqF2kU9tlm_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>黑虎虾超大新鲜大虾老虎虾鲜活虎虾基围虾特大速冻海鲜竹九节虾</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥998.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/3499860862/O1CN012Zphri1IEq9zYYrtD_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>新鲜大虾鲜活超大基围虾青岛海虾特大青虾速冻海鲜水产冷冻鲜虾类</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥4699.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3842101262/O1CN01p6kkgZ1LC2ac8VShj_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>北极虾甜虾冰虾海鲜水产大虾鲜活冷冻头籽腹籽带籽5斤刺身北极熊</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥15999.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2001113363/O1CN013j8tnO1aiIirMuzWp_!!2001113363.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>鲜有汇聚挪威新鲜三文鱼中段刺身新鲜生鱼片即食海鲜辅食三文鱼肉</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥7999.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2210572455365/O1CN01hj7nCj1pVDe6KguP4_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>碳烤虾干即食500g大号对虾零食解馋孕妇小吃网红海鲜干货特产美食</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥8198.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://picasso.alicdn.com/imgextra/O1CNA1IP64xh2JrbTaPZHBX_!!2201408579475-0-psf.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>三文鱼中段新鲜即食刺身拼盘生鱼片海鲜优选辅食婴幼儿冰鲜三文鱼</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥98.00</p>
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