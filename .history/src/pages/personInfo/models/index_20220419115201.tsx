import React, { useCallback } from 'react'
import { Model } from 'dva'
import { useModel } from 'umi'

const initState: any = {
    userInfo:{
        userName: null,
        userPassword: null,
    }
}
export default {
    namespace: 'personalInfo',
    state: initState,
    reducers: {
        save(state, { payload }:any) {
            return {
                ...state,
                ...payload,
            };
        },
    },
    effects: {
        *fetchData({payload},{call}){
            
        }
    },
    subscriptions: {},
} as Model