import React from 'react'
import { Model } from 'dva'
import { useModel } from 'umi'

const initState: any = {
    userInfo:{
        userName: null,
        userPassword: null,
    }
}
export default {
    namespace: 'loginPage',
    state: initState,
    reducers: {
        save(state, { payload }:any) {
            return {
                ...state,
                ...payload,
            };
        },
    },
    effects: {},
    subscriptions: {},
} as Model