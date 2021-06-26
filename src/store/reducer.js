import {combineReducers} from "@reduxjs/toolkit";
import ipdasReducer from './ipdas'
import metaReducer from './meta'

const appReducer = combineReducers({
    ipdas: ipdasReducer,
    meta: metaReducer,
})

export default appReducer