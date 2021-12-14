import React from 'react'
import  { connect }  from 'dva'
import  { Dispatch }  from 'redux'

const PageHeader = () => {
    return(
        <div style={{
            width: '2000px',
        }}>
            <img src='https://imgcps.jd.com/ling4/100012951218/5L2g5oOz6KaB55qE5oqk6IKk/54iG5qy-55u06ZmN/p-5bd8253082acdd181d02fa50/f5a7a13b/cr/s/q.jpg'></img>
        </div>
    )
}
const mapStateToProps = (homePageHeader:any) => {homePageHeader}
const mapDispatchToProps = (dispatch:Dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader)