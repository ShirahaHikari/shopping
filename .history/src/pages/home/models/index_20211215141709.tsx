import React from 'react'
import { Model } from 'dva'

const initState = () => {

}
export default{
    namespace: 'homePage',
    state: initState,
    reducers:{
        save(state, payload ){
            return {
                ...state,
                ...payload,
            }
        }
    },
    effects:{},
    subscriptions:{},
}as Model