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
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/45159296/O1CN01fQiyrJ2IXcYwiGBCb_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop" className={styles.crossOver}><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>花花公子袜子男士短袜纯棉抗菌防臭吸汗船袜夏季薄款透气运动低帮</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥1399.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/29243035/O1CN0149Fo5W1YI4mqURLMO_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop" className={styles.crossOver}><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>aicare防臭袜子男士中筒棉袜春夏季吸汗抗菌除臭四季长袜商务男袜</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥2399.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/97369832/O1CN017vV2Ov2MV6pKIuCg0_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>男士加长筒商务袜子男竹纤维长袜男防臭袜黑色高筒袜正装长筒袜男</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥998.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/3035493001/O1CN019X6x8e1Y2VLVTlzdW_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>【王一博同款】蕉内子弹袜501S短袜女中筒袜男士袜子夏季棉袜4双</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥4699.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://picasso.alicdn.com/imgextra/O1CNA1GgXZxe1NqSm9WJuLR_!!1025001621-0-psf.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>船袜男夏款纯棉薄款抗菌防臭吸汗黑色夏季浅口隐形袜子男士短袜</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥15999.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://picasso.alicdn.com/imgextra/O1CNA1PyBCIW2DnaJ97God2_!!1652528654-0-psf.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>攀升 酷睿i7 12代主机12700F/RTX3060/3060Ti电脑主机高配电竞吃鸡水冷游戏主机DIY台式电脑组装机全套</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥7999.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/126446588/O1CN01v5ZDAd1yXM25rPgrZ_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>【12代酷睿游戏主机】联想刃7000K 2022 RTX3060/3060Ti/3070 游戏电竞台机 设计师台式主机联想台式机电脑</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥8198.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/desktop"><img src='https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/379092568/O1CN01iur3nS1UqBqdjOP2p_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/desktop"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>【4年金牌服务】Dell/戴尔Vostro成就3681/3910/5890INTEL酷睿i3/i5/i7迷你mini/标准机箱可选台式机电脑主机</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥2339.00</p>
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