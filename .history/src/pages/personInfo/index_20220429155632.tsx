import React, { useState } from 'react'
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
} from '@ant-design/icons';
import styles from './index.less'
import axios from 'axios'
const { SubMenu } = Menu
class PersonalInfo extends React.Component<any, any> {
    constructor(a: any) {
        super(a)
        this.state = {
            dataShop: [],
            userAdvise: [],
            userBuyRecord: [],
            userReceived: [],
            buyRecordFlag: true,
            receivedFormFlag: true,
            shopTableFlag: true,
            userAdviseForm: false,
            buttonVisible: false,
            formFlag: false,
            columnsAdvise: [{
                title: '用户评论记录',
                dataIndex: 'title',
                key: 'title',
            }, {
                title: '用户名称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '评论内容',
                dataIndex: 'advise',
                key: 'advise',
            }, {
                title: '评论时间',
                dataIndex: 'date',
                key: 'date',
            },],
            columnsBuyRecord: [
                {
                    title: '用户购买记录',
                    dataIndex: 'title',
                    key: 'title',
                }, {
                    title: '商品图片',
                    dataIndex: 'img',
                    key: 'img',
                    render: (record: any) =>
                        <img src={record} alt="" width='200px' />
                }, {
                    title: '购买的商品名称',
                    dataIndex: 'item',
                    key: 'item',
                    render: (record: any) =>
                        <div style={{ fontSize: 20 }}>{record}</div>
                },
                {
                    title: '购买的数量',
                    dataIndex: 'count',
                    key: 'count',
                    render: (record: any) =>
                        <div style={{ width: '50px', margin: '0 auto' }}>{record}</div>
                },
                {
                    title: '购买的价格单总价',
                    dataIndex: 'price',
                    key: 'price',
                    render: (record: any) =>
                        <div style={{ width: '50px', margin: '0 auto' }}>{record}</div>
                },
                {
                    title: '总价',
                    dataIndex: 'priceSum',
                    key: 'priceSum',
                    render: (record: any) =>
                        <div style={{ width: '50px', margin: '0 auto' }}>{record}</div>
                }, {
                    title: '结算的时间',
                    dataIndex: 'date',
                    key: 'date',
                    render: (record: any) =>
                        <div style={{ width: '150px', margin: '0 auto' }}>{record}</div>
                },],
            columnsReceived: [
                {
                    title: '用户商品签收状态',
                    dataIndex: 'title',
                    key: 'title',
                }, {
                    title: '商品图片',
                    dataIndex: 'img',
                    key: 'img',
                    render: (record: any) =>
                        <img src={record} alt="" width='200px' />
                }, {
                    title: '购买的商品名称',
                    dataIndex: 'item',
                    key: 'item',
                    render: (record: any) =>
                        <div style={{ fontSize: 20 }}>{record}</div>
                },
                {
                    title: '购买的数量',
                    dataIndex: 'count',
                    key: 'count',
                    render: (record: any) =>
                        <div style={{ width: '50px', margin: '0 auto' }}>{record}</div>
                },
                {
                    title: '购买的价格单总价',
                    dataIndex: 'price',
                    key: 'price',
                    render: (record: any) =>
                        <div style={{ width: '50px', margin: '0 auto' }}>{record}</div>
                },
                {
                    title: '总价',
                    dataIndex: 'priceSum',
                    key: 'priceSum',
                    render: (record: any) =>
                        <div style={{ width: '50px', margin: '0 auto' }}>{record}</div>
                }, {
                    title: '结算的时间',
                    dataIndex: 'date',
                    key: 'date',
                    render: (record: any) =>
                        <div style={{ width: '150px', margin: '0 auto' }}>{record}</div>
                }, {
                    title: '是否签收',
                    dataIndex: 'received',
                    key: 'received',
                    render: (record: any) => {
                        if (record === false) {
                            return <div>未签收</div>
                        } else {
                            return <div>已签收</div>
                        }
                    }
                }, {
                    title: "",
                    dataIndex: 'operation',
                    key: 'operation',
                    render: (text: any, record: any) => {
                        if (record.received === false) {
                            return <a onClick={() => {
                                let params = { id: record.id }
                                axios.post('http://localhost:3000/updateUserReceived', params).then((res) => {
                                    if (res.status === 200) {
                                        message.success('状态修改成功！')
                                        axios.get('http://localhost:3000/getUserReceived').then((tmp) => {
                                            if (tmp.status === 200) {
                                                let res1 = tmp.data[0]
                                                this.setState({ userReceived: res1 })
                                            }
                                        }).catch((err) => {
                                            message.error('因服务器原因无法获得签收状态清单！')
                                        })
                                    }
                                }).catch((err) => {
                                    message.error('因服务器原因状态更新失败')
                                })
                            }}>签收</a>
                        } else {
                            return <></>
                        }
                    }
                }],
            columns: [
                {
                    title: '购物车列表',
                    dataIndex: 'title',
                    key: 'title',
                }, {
                    title: '商品图片',
                    dataIndex: 'img',
                    key: 'img',
                    render: (record: any) =>
                        <img src={record} alt="" width='200px' />
                }, {
                    title: '购买的商品名称',
                    dataIndex: 'item',
                    key: 'item',
                    render: (record: any) =>
                        <div style={{ fontSize: 20 }}>{record}</div>
                },
                {
                    title: '购买的数量',
                    dataIndex: 'count',
                    key: 'count',
                },
                {
                    title: '购买的价格单总价',
                    dataIndex: 'price',
                    key: 'price',
                    render: (record: any) =>
                        <div style={{ width: '50px' }}>{record}</div>
                },
                {
                    title: '总价',
                    dataIndex: 'priceSum',
                    key: 'priceSum',
                },
                {
                    title: '',
                    dataIndex: 'operation',
                    key: 'operation',
                    render: (text: any, record: any) =>
                        <div>
                            <a onClick={() => {
                                let params = { id: record.id }
                                axios.post('http://localhost:3000/findUserShop', params).then((tmp: any) => {
                                    if (tmp.status === 200) {
                                        let date = new Date()
                                        let year = date.getFullYear()
                                        let month = date.getMonth() + 1
                                        let date1 = date.getDate()
                                        let hour = date.getHours()
                                        let minute = date.getMinutes()
                                        let second = date.getSeconds()
                                        let timeString = year + ' 年 ' + month + ' 月 ' + date1 + ' 日 ' + hour + ' 时 ' + minute + ' 分 ' + second + ' 秒 '
                                        let params = {
                                            item: tmp?.data.item,
                                            name: tmp?.data.name,
                                            img: tmp?.data.img,
                                            count: tmp?.data.count,
                                            price: tmp?.data.price,
                                            priceSum: tmp?.data.priceSum,
                                            date: timeString,
                                            received: false,
                                        }
                                        console.log('tmp.name is ' + tmp.data.name)
                                        console.log("params is" + params)
                                        axios.post('http://localhost:3000/addUserBuyRecord', params).then((res1) => {
                                            if (res1.status === 200) {
                                                let userInfo = window.sessionStorage.getItem('userInfo')
                                                let user
                                                if (userInfo == null) {
                                                    message.error('你没有登录！')
                                                    setTimeout(() => {
                                                        window.location.href = './ '
                                                    }, 1000);
                                                } else {
                                                    user = JSON.parse(userInfo ? userInfo : '')
                                                }
                                                message.success('结算成功！')
                                                const userData = { userName: user.username }
                                                axios.get('http://localhost:3000/getUserBuyRecord').then((res3) => {
                                                    if (res3.status === 200) {
                                                        let res4 = res3.data[0].map((index: any) => {
                                                            let tmp = {
                                                                item: index.item,
                                                                count: index.count,
                                                                price: index.price,
                                                                priceSum: index.priceSum,
                                                                img: index.img,
                                                                id: index._id,
                                                                date: index.date,
                                                            }
                                                            return tmp;
                                                        })
                                                        this.setState({ userBuyRecord: res4 })
                                                    }
                                                })
                                                axios.post('http://localhost:3000/getUserShop', userData).then((res4) => {
                                                    if (res4.status === 200) {
                                                        let res5 = res4.data[0].map((index: any) => {
                                                            let tmp = {
                                                                item: index.item,
                                                                count: index.count,
                                                                price: index.price,
                                                                priceSum: index.priceSum,
                                                                img: index.img,
                                                                id: index._id,
                                                            }
                                                            return tmp;
                                                        })
                                                        this.setState({ dataShop: res5 })
                                                    }
                                                }).catch((err) => {
                                                    message.error('因服务器原因无法获得购物车清单！')
                                                })
                                            }
                                        })
                                    }
                                })
                                axios.post('http://localhost:3000/deleteUserShop', params).then((res) => {
                                    if (res.status === 200) {
                                        console.log("record.id is" + record.id)
                                        console.log('record.name is ' + record.name)
                                        let userInfo = window.sessionStorage.getItem('userInfo')
                                        let user
                                        if (userInfo == null) {
                                            message.error('你没有登录！')
                                            setTimeout(() => {
                                                window.location.href = './ '
                                            }, 1000);
                                        } else {
                                            user = JSON.parse(userInfo ? userInfo : '')
                                        }
                                        const userData = { userName: user.username }
                                        // message.success('删除成功！')
                                        axios.post('http://localhost:3000/getUserShop', userData).then((res) => {
                                            if (res.status === 200) {
                                                let res1 = res.data[0].map((index: any) => {
                                                    let tmp = {
                                                        item: index.item,
                                                        count: index.count,
                                                        price: index.price,
                                                        priceSum: index.priceSum,
                                                        img: index.img,
                                                        id: index._id,
                                                    }
                                                    return tmp;
                                                })
                                                this.setState({ dataShop: res1 })
                                            }
                                        }).catch((err) => {
                                            message.error('因服务器原因无法获得购物车清单！')
                                        })
                                    }
                                })
                            }}>结算 </a>
                            <a onClick={() => {
                                let params = { id: record.id }
                                axios.post('http://localhost:3000/deleteUserShop', params).then((res) => {
                                    if (res.status === 200) {
                                        console.log("record.id is" + record.id)
                                        console.log('record.name is ' + record)
                                        let userInfo = window.sessionStorage.getItem('userInfo')
                                        let user
                                        if (userInfo == null) {
                                            message.error('你没有登录！')
                                            setTimeout(() => {
                                                window.location.href = './ '
                                            }, 1000);
                                        } else {
                                            user = JSON.parse(userInfo ? userInfo : '')
                                        }
                                        const userData = { userName: user.username }
                                        message.success('删除成功！')
                                        axios.post('http://localhost:3000/getUserShop', userData).then((res) => {
                                            if (res.status === 200) {
                                                let res1 = res.data[0].map((index: any) => {
                                                    let tmp = {
                                                        item: index.item,
                                                        count: index.count,
                                                        price: index.price,
                                                        priceSum: index.priceSum,
                                                        img: index.img,
                                                        id: index._id,
                                                    }
                                                    return tmp;
                                                })
                                                this.setState({ dataShop: res1 })
                                            }
                                        }).catch((err) => {
                                            message.error('因服务器原因无法获得购物车清单！')
                                        })
                                    }
                                })
                            }}>删除</a>
                        </div>
                },
            ],
            userData: { userName: '' },
            onFinish: (values: any) => {
                let userInfo = window.sessionStorage.getItem('userInfo')
                let user: any
                if (userInfo == null) {
                    message.error('你没有登录！')
                    setTimeout(() => {
                        window.location.href = './ '
                    }, 1000);
                } else {
                    user = JSON.parse(userInfo ? userInfo : '')
                }
                let date = new Date()
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let date1 = date.getDate()
                let stringDate = year + ' 年 ' + month + ' 月 ' + date1 + ' 日'
                let params = {
                    advise: values.advise,
                    name: user?.username,
                    date: stringDate,
                }
                axios.post('http://localhost:3000/addUserAdvise', params).then((res) => {
                    if (res.status === 200) {
                        message.success('评论添加成功')
                        this.setState({ formFlag: false })
                        axios.get('http://localhost:3000/getUserAdvise').then((tmp) => {
                            if (tmp.status === 200) {
                                let res1 = tmp.data[0]
                                this.setState({ userAdvise: res1 })
                            }
                        }).catch((err) => {
                            message.error('因服务器原因无法获得购物车清单！')
                        })
                    }
                }).catch((err) => {
                    message.error('因服务器原因评论添加失败')
                })
            }
        }
    }
    componentWillMount() { }
    componentDidMount() {
        let userInfo = window.sessionStorage.getItem('userInfo')
        let user: any
        if (userInfo == null) {
            message.error('你没有登录！')
            setTimeout(() => {
                window.location.href = './ '
            }, 1000);
        } else {
            user = JSON.parse(userInfo ? userInfo : '')
        }
        const userData = { userName: user.username }
        this.setState({ userData: userData })
        console.log('userName is ', this.state.userName)
        axios.post('http://localhost:3000/getUserShop', userData).then((res) => {
            if (res.status === 200) {
                let res1 = res.data[0].map((index: any) => {
                    let tmp = {
                        item: index.item,
                        count: index.count,
                        price: index.price,
                        priceSum: index.priceSum,
                        img: index.img,
                        id: index._id,
                    }
                    return tmp;
                })
                this.setState({ dataShop: res1 })
            }
        }).catch((err) => {
            message.error('因服务器原因无法获得购物车清单！')
        })
        axios.get('http://localhost:3000/getUserBuyRecord').then((res3) => {
            if (res3.status === 200) {
                let res4 = res3.data[0].map((index: any) => {
                    let tmp = {
                        item: index.item,
                        count: index.count,
                        price: index.price,
                        priceSum: index.priceSum,
                        img: index.img,
                        id: index._id,
                        date: index.date,
                    }
                    return tmp;
                })
                this.setState({ userBuyRecord: res4 })
            }
        })
        axios.get('http://localhost:3000/getUserReceived').then((res3) => {
            if (res3.status === 200) {
                let res4 = res3.data[0].map((index: any) => {
                    let tmp = {
                        item: index.item,
                        count: index.count,
                        price: index.price,
                        priceSum: index.priceSum,
                        img: index.img,
                        id: index._id,
                        date: index.date,
                        received: index.received,
                    }
                    return tmp;
                })
                this.setState({ userReceived: res4 })
            }
        })
        axios.get('http://localhost:3000/getUserAdvise').then((res) => {
            if (res.status === 200) {
                let res1 = res.data[0]
                this.setState({ userAdvise: res1 })
                console.log('userAdvise is ' + this.state.userAdvise)
            }
        }).catch((err) => {
            message.error('因服务器原因无法获得购物车清单！')
        })

    }


    render() {
        return (
            <div style={{ width: '100%', height: '1000px' }}>
                <div className={styles.floatButton}>
                    <button onClick={() => {
                        this.setState({ buttonVisible: !this.state.buttonVisible })
                    }}>隐藏/开启定位按钮</button>
                    {(this.state.buttonVisible && <a onClick={() => {
                        let top = document.getElementById('top')
                        top?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
                    }}><div style={{ width: '80px' }}>回到顶部↑</div></a>)}
                    {(this.state.buttonVisible && <a onClick={() => {
                        let shopTable = document.getElementById('shopTable')
                        shopTable?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }}><div style={{ width: '80px' }}>购物车</div></a>)}
                    {(this.state.buttonVisible && <a onClick={() => {
                        let buyRecord = document.getElementById('buyRecord')
                        buyRecord?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }}><div style={{ width: '80px' }}>购买记录</div></a>)}
                    {(this.state.buttonVisible && <a onClick={() => {
                        let received = document.getElementById('received')
                        received?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }}><div style={{ width: '80px' }}>签收状态</div></a>)}
                    {(this.state.buttonVisible && <a onClick={() => {
                        let userAdvise = document.getElementById('userAdvise')
                        userAdvise?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }}><div style={{ width: '80px' }}>用户评论</div></a>)}
                    {(this.state.buttonVisible && <a onClick={() => {
                        let addAdvise = document.getElementById('addAdvise')
                        addAdvise?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }}><div style={{ width: '80px' }}>新建评论</div></a>)}
                    {(this.state.buttonVisible && <a onClick={() => {
                        let bottom = document.getElementById('bottom')
                        bottom?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }}><div style={{ width: '80px' }}>滑到底部↓</div></a>)}
                </div>
                <div className={styles.menu} id='top'>
                    <Menu selectedKeys={['mail']} mode="horizontal" >
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
                        <Menu.Item key='hello' disabled style={{ width: 150, left: 120 }}>
                            你好！{(this.state?.userData?.userName)}
                        </Menu.Item>
                    </Menu>
                </div>
                <div style={{ float: 'left', marginTop: '-20px', marginBottom: '20px' }}>
                    <div className={styles.option}>注：<span>用户可点击以下按钮进行列表的显示与隐藏</span></div>
                    <Button onClick={() => {
                        this.setState({ formFlag: !this.state.formFlag })
                    }} style={{ marginRight: '5px' }}>新增评论</Button>
                    <Button onClick={() => {
                        this.setState({ shopTableFlag: !this.state.shopTableFlag })
                    }} style={{ marginRight: '5px' }}>购物车列表</Button>
                    <Button onClick={() => {
                        this.setState({ buyRecordFlag: !this.state.buyRecordFlag })
                    }} style={{ marginRight: '5px' }}>已购买列表</Button>
                    <Button onClick={() => {
                        this.setState({ receivedFormFlag: !this.state.receivedFormFlag })
                    }} style={{ marginRight: '5px' }}>签收状态列表</Button>
                    <Button onClick={() => {
                        this.setState({ userAdviseForm: !this.state.userAdviseForm })
                    }}>用户评论列表</Button>
                </div>
                {(this.state.shopTableFlag &&
                    <Table id="shopTable" columns={this.state.columns} dataSource={this.state.dataShop}></Table>)}

                {this.state.formFlag &&
                    <div style={{ float: 'left', width: '1000px', top: '50px' }}>
                        <Form
                            id="addAdvise"
                            name="basic"
                            labelCol={{ span: 7 }}
                            wrapperCol={{ span: 10 }}
                            initialValues={{ remember: true }}
                            onFinish={this.state.onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="你的建议"
                                name="advise"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                                <Button
                                    onClick={() => {
                                        this.setState({ formFlag: false })
                                    }}
                                >
                                    取消
                                </Button>
                                <Button type="primary" htmlType="submit" style={{ left: 10 }}>
                                    提交
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                }
                {(this.state.userAdviseForm &&
                    <Table id="userAdvise" columns={this.state.columnsAdvise} dataSource={this.state.userAdvise}></Table>)}
                {(this.state.buyRecordFlag && <Table id="buyRecord" columns={this.state.columnsBuyRecord} scroll={{ x: 2000 }} dataSource={this.state.userBuyRecord}></Table>)}
                {(this.state.receivedFormFlag && <Table id="received" columns={this.state.columnsReceived} dataSource={this.state.userReceived}></Table>)}
                <div id='bottom'></div>
            </div >
        )
    }
}
export default PersonalInfo;