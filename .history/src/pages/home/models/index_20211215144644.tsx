import React from 'react'
import { Model } from 'dva'

const initState: any = {
    collapsed: false
}
export default {
    namespace: 'homePage',
    state: initState,
    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
    },
    effects: {},
    subscriptions: {},
} as Model