import React from 'react'
import { connect } from 'dva'
import { Dispatch } from 'redux'

const PageHeader = () => {
    return(
        <div>这是PageHeader</div>
    )
}
const mapStateToProps = () => {}
const mapDispatchToProps = () => {}

export default (mapStateToProps, mapDispatchToProps)(PageHeader)