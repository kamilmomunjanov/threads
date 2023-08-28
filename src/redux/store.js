import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {rememberReducer, rememberEnhancer} from "redux-remember";


const rootReducer = combineReducers({

})

const reducer = rememberReducer(rootReducer)

const rememberedKeys = []


const store = configureStore({
    reducer,
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        { persistWholeStore: true }
    )]
})

export default store;