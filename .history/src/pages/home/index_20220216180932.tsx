import React, { useState } from 'react'
import { connect } from 'dva'
import { Dispatch } from 'redux'
import { Menu, Button, message, Modal } from 'antd'
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

const { SubMenu } = Menu
const HomePage = (props: any) => {
    const { user, setUserData } = useModel('user')
    return (
        <div style={{ width: 1400 }} >
            <div>
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
            <div>
                <a href=""><img src={require('#')} alt="" /></a>
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