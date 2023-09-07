import {combineReducers, configureStore} from "@reduxjs/toolkit";
import registerSlice from "./reducers/authSlice";
import signInSlice from "./reducers/loginSlice";
import forgotPasswordSlice from "./reducers/forgotPasswordSlice";
import verificationSlice from "./reducers/verificationSlice";
import profileSlice from "./reducers/profileSlice";
import {rememberReducer, rememberEnhancer} from "redux-remember";


const rootReducer = combineReducers({
    registerSlice,
    signInSlice,
    forgotPasswordSlice,
    verificationSlice,
    profileSlice,
})

const reducer = rememberReducer(rootReducer)

const rememberedKeys = ["registerSlice", "signInSlice", "forgotPasswordSlice", "verificationSlice", "profileSlice"]


const store = configureStore({
    reducer,
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        { persistWholeStore: true }
    )]
})

export default store;