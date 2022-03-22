import React from 'react'
import { Model } from 'dva'
import { useModel } from 'umi'
const { user, setUserData } = useModel('user')
const initState: any = {
    collapsed: false
}
export default {
    namespace: 'homePage',
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