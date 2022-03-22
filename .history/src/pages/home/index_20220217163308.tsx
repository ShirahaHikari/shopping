import React, { useState } from 'react'
import { connect } from 'dva'
import { Dispatch } from 'redux'
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
import { useModel } from 'umi';
import styles from './index.less'

const { SubMenu } = Menu
const HomePage = (props: any) => {
    const { user, setUserData } = useModel('user')
    return (
        <div style={{ backgroundColor: 'rgb(234,232,235)', width: '100%' ,height:'2000px'}}>
            <div>
                <div className={styles.menu}>
                    <Menu selectedKeys={['home']} mode="horizontal" >
                        <Menu.Item key="home" icon={<HomeOutlined />} style={{ width: 150,marginLeft:'300px'}} >
                            首页
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
                        <Menu.Item key="food" icon={<CoffeeOutlined />} style={{ width: 150 }}>
                            <a onClick={() => { window.location.href = '/food' }}>
                                美食
                            </a>
                        </Menu.Item>
                        <Menu.Item key="clothes" icon={<SkinOutlined />} style={{ width: 150 }}>
                            <a onClick={() => { window.location.href = '/clothes' }}>
                                服饰
                            </a>
                        </Menu.Item>
                        <Menu.Item key="mail" icon={<MailOutlined />} style={{ width: 150 }}>
                            <a href="/mail">个人信息</a>
                        </Menu.Item>
                        <Menu.Item key="logOut" icon={<ClearOutlined />} style={{ width: 150 }}>
                            <a onClick={() => {
                                setUserData(null, null);
                                window.location.href = '/login'
                            }}>
                                账号登出
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
            <div className={styles.mainPage}>
                <div className={styles.border}>
                    <div className={styles.autoFather}>
                        <Carousel autoplay>
                            <a className={styles.autoPlay} href="#"><img src={require('../../imgs/adv1.jpg')} alt="" /></a>
                            <a className={styles.autoPlay} href="#"><img src={require('../../imgs/adv2.jpg')} alt="" /></a>
                            <a className={styles.autoPlay} href="#"><img src={require('../../imgs/adv3.jpg')} alt="" /></a>
                        </Carousel>
                    </div>
                    <div className={styles.rightText}>
                        <div style={{left:50}}>
                            <span style={{ font: 'bond', fontSize: 16,left:30 }}>公告</span>
                            <span style={{ marginLeft: '10px' }}>新鲜的事都在这哦~</span>
                        </div>
                        <br />
                        <a href="https://www.bilibili.com/video/BV15t411U7yf?share_source=copy_web" target={'_blank'}>flutter的学习教程</a>
                        <br />
                        <a href="https://www.bilibili.com/video/BV1JU4y1E73v?share_source=copy_web" target={'_blank'}>ReactHooks的学习教程</a>
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