import { Menu, message } from 'antd'
import {useState} from 'react'
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
import styles from './index.less'

const { SubMenu } = Menu
const japaneseHat = () => {
    let userInfo = window.sessionStorage.getItem('userInfo')
    let user
    if(userInfo == null){
        message.error('你没有登录！')
        setTimeout(() => {
            window.location.href = './ '
        }, 1000);
    }else{
        user = JSON.parse(userInfo?userInfo:'')
    }
    function add(){
        setCount(count+1)
    }
    function sub(){
        setCount(count-1)
    }
    let [count,setCount] = useState(1);
    return(
        <div style={{ backgroundColor: 'rgb(234,232,235)', width: '100%' ,height:'3000px'}}>
            <div>
                <div className={styles.menu} id='top'>
                    <Menu mode="horizontal" >
                        <Menu.Item key="home" icon={<HomeOutlined />} style={{ width: 150,marginLeft:'300px'}} >
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
                                <Menu.Item key="jacket" style={{width:100}}>
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
                            你好！{user?.username?user.username:''}
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
            <div className={styles.itemDetail}>
                <div className={styles.picLeft}>
                    <img src={require('../../../../imgs/japaneseHat.webp')} style={{width:300,height:300}}alt="" />
                </div>
                <div className={styles.wordRight}>
                    <h2>帽子男女春夏太阳帽防晒遮脸遮阳2021新款鸭舌帽</h2>
                    <div>
                        <span>价格   </span>
                        <span style={{color:'red',fontSize:'20px',left:'44px'}}>￥9.90</span>
                    </div>
                    <div>数量
                        <button onClick={sub}>-</button>
                        <span>{count}</span>
                        <button onClick={add}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default japaneseHat;