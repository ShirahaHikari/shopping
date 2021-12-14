import React from 'react'
import { Model } from 'dva'

const initState = () => {

}
export default{
    namespace: 'homePageHeader',
    reducers:{
        save(state,{ payload }){
            return {
                ...state,
                ...payload,
            }
        }
    },
    effects:{},
    subscriptions:{},
}as Model