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
        <div>
            <div className={styles.menu}>
                <Menu selectedKeys={['home']} mode="horizontal" style={{ marginLeft: 240 }}>
                    <Menu.Item key="home" icon={<HomeOutlined />} style={{ width: 150 }}>
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
            <div className={styles.border}>
                <div className={styles.autoFather}>
                    <Carousel autoplay>
                        <a className={styles.autoPlay} href="#"><img src={require('../../imgs/adv1.jpg')} alt="" /></a>
                        <a className={styles.autoPlay} href="#"><img src={require('../../imgs/adv2.jpg')} alt="" /></a>
                        <a className={styles.autoPlay} href="#"><img src={require('../../imgs/adv3.jpg')} alt="" /></a>
                    </Carousel>
                </div>
                <div className={styles.rightText}>
                    <span style={{font:'bond'}}>公告</span>
                    <span style={{left:10}}>新鲜的事都在这哦~</span>
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