import React, { useState } from 'react'
import { Menu, Button, message, Modal, Carousel, Table, Card } from 'antd'
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
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import axios from 'axios'
const { SubMenu } = Menu
class ManagerUserShopInfo extends React.Component<any, any> {
    constructor(a: any) {
        super(a)
        this.state = {
            buyRecord: [],
            typeSeriesData: [],
            typeLegendData: [],
            columns: [{
                title: '用户名称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '用户购买的商品名称',
                dataIndex: 'item',
                key: 'item',
            },
            {
                title: '用户购买的商品数量',
                dataIndex: 'count',
                key: 'count',
            },
            {
                title: '用户购买的商品单价',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: '用户购买的商品总价',
                dataIndex: 'priceSum',
                key: 'priceSum',
            },
            {
                title: '结算时间',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: '',
                dataIndex: 'operation',
                key: 'operation',
                render: (text: any, record: any) => {
                    return <a onClick={() => {
                        let params = { id: record.id }
                        axios.post('http://localhost:3000/deleteUserBuyRecord', params).then((res) => {
                            if (res.status === 200) {
                                message.success('状态修改成功！')
                                axios.get('http://localhost:3000/getUserBuyRecord').then((res: any) => {
                                    if (res.status === 200) {
                                        let res1 = res.data[0].map((index: any) => {
                                            let output = {
                                                name: index.name,
                                                id: index._id,
                                                date: index.date,
                                                price: index.price,
                                                priceSum: index.priceSum,
                                                count: index.count,
                                                item: index.item,
                                            }
                                            return output
                                        })
                                        this.setState({ buyRecord: res1 })
                                    }
                                }).catch((err) => {
                                    message.error('因服务器原因无法获得购物车清单！')
                                })
                            }
                        }).catch((err) => {
                            message.error('因服务器原因状态更新失败')
                        })
                    }}>删除</a>
                }
            },
            ],
            getOption: () => {
                let option = {
                    title: {
                        text: '所有用户购买的物品分类统计',
                        x: 'left'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        top: 20,
                        right: 5,
                        data: this.state.typeLegendData,
                    },
                    series: [
                        {
                            name: '购买数',
                            type: 'pie',
                            radius: ['30%', '80%'],
                            data: this.state.typeSeriesData,
                        }
                    ]
                }
                return option;
            },
            userData: { userName: '' },
        }
    }
    componentWillMount() { }
    componentDidMount() {
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
        axios.get('http://localhost:3000/getUserBuyRecord').then((res: any) => {
            if (res.status === 200) {
                let res1 = res.data[0].map((index: any) => {
                    let output = {
                        name: index.name,
                        id: index._id,
                        date: index.date,
                        price: index.price,
                        priceSum: index.priceSum,
                        count: index.count,
                        item: index.item,
                    }
                    return output
                })
                this.setState({ buyRecord: res1 })
            }
        }).catch((err) => {
            message.error('因服务器原因无法获得购物车清单！')
        })
        axios.get('http://localhost:3000/getUserBuyType').then((res: any) => {
            if (res.status === 200) {
                let res1 = res.data[0].map((tmp: any) => {
                    return tmp.type;
                })
                let res2 = res.data[0].map((tmp: any) => {
                    let output = {
                        value: tmp.count,
                        name: tmp.type,
                    }
                    return output;
                })
                this.setState({ typeLegendData: res1 })
                this.setState({ typeSeriesData: res2 })
            }
        }).catch((err) => {
            message.error('因服务器原因无法获得购物车清单！')
        })
    }


    render() {
        return (
            <div>
                <div className={styles.menu} id='top'>
                    <Menu selectedKeys={['userShop']} mode="horizontal" >
                        <Menu.Item key="userInfo" icon={<MailOutlined />} style={{ width: 150, marginLeft: '500px' }} >
                            <a onClick={() => { window.location.href = '/managerHome' }}>
                                用户个人信息
                            </a>
                        </Menu.Item>
                        <Menu.Item key="userShop" icon={<MailOutlined />} style={{ width: 150 }}>
                            <a href="/managerUserShop">用户的购物信息</a>
                        </Menu.Item>
                        <Menu.Item key="userAdvise" icon={<MailOutlined />} style={{ width: 150 }}>
                            <a href="/managerUserAdvise">用户的评价消息</a>
                        </Menu.Item>
                        <Menu.Item key="logOut" icon={<ClearOutlined />} style={{ width: 150 }}>
                            <a onClick={() => {
                                window.sessionStorage.removeItem('userInfo')
                                window.location.href = '/'
                            }}>
                                账号登出
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.buyRecord}></Table>
                <div style={{marginLeft:'400px'}}>
                    <Card.Grid style={{width:'800px'}}>
                        <ReactEcharts option={this.state.getOption()} />
                    </Card.Grid>
                </div>
            </div >
        )
    }
}
export default ManagerUserShopInfo;