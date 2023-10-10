import {combineReducers, configureStore} from "@reduxjs/toolkit";
import registerSlice from "./reducers/authSlice";
import signInSlice from "./reducers/loginSlice";
import forgotPasswordSlice from "./reducers/forgotPasswordSlice";
import verificationSlice from "./reducers/verificationSlice";
import profileSlice from "./reducers/profileSlice";
import photoProfile from "./reducers/photoProfile";
import threadSlice from "./reducers/threadSlice";
import followSlice from "./reducers/followSlice";
import followYouSlice from "./reducers/followYouSlice";
import otherProfileSlice from "./reducers/otherProfile";
import {rememberReducer, rememberEnhancer} from "redux-remember";



const rootReducer = combineReducers({
    registerSlice,
    signInSlice,
    forgotPasswordSlice,
    verificationSlice,
    profileSlice,
    photoProfile,
    threadSlice,
    followSlice,
    otherProfileSlice,
    followYouSlice
})

const reducer = rememberReducer(rootReducer)

const rememberedKeys = ["registerSlice", "signInSlice", "forgotPasswordSlice", "verificationSlice", "profileSlice", "threadSlice" ]


const store = configureStore({
    reducer,
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        { persistWholeStore: true }
    )]
})

export default store;