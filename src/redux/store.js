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
import allUserSlice from "./reducers/allUserSlice";
import followByUserSlice from "./reducers/followByUserSlice";
import profileUserSlice from "./reducers/profilUserSlice";
import threadsFollowingSlice from "./reducers/threadsFollowing";
import followerOtherUserSlice from "./reducers/followersOtherUser";
import likeSlice from "./reducers/likeSlice";
import getThreadIdSlice from "./reducers/getThreadsIdslice";
import commentSlice from "./reducers/commentSlice";
import repostSlice from "./reducers/repostSlice";
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
    followYouSlice,
    allUserSlice,
    followByUserSlice,
    profileUserSlice,
    threadsFollowingSlice,
    likeSlice,
    followerOtherUserSlice,
    getThreadIdSlice,
    commentSlice,
    repostSlice
})


const reducer = rememberReducer(rootReducer)

const rememberedKeys = ["registerSlice", "signInSlice", "forgotPasswordSlice", "verificationSlice", "profileSlice", "threadSlice","profileUserSlice", "getThreadIdSlice","commentSlice" ]


const store = configureStore({
    reducer,
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        { persistWholeStore: true }
    )]
})

export default store;