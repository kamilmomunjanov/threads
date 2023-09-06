import {combineReducers, configureStore} from "@reduxjs/toolkit";
import registerSlice from "./reducers/authSlice";
import signInSlice from "./reducers/loginSlice";
import forgotPasswordSlice from "./reducers/forgotPasswordSlice";
import verificationSlice from "./reducers/verificationSlice";
import {rememberReducer, rememberEnhancer} from "redux-remember";


const rootReducer = combineReducers({
    registerSlice,
    signInSlice,
    forgotPasswordSlice,
    verificationSlice,
})

const reducer = rememberReducer(rootReducer)

const rememberedKeys = ["registerSlice", "signInSlice", "forgotPasswordSlice", "verificationSlice"]


const store = configureStore({
    reducer,
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        { persistWholeStore: true }
    )]
})

export default store;