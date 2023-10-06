import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";



export const loginUser = createAsyncThunk(
    "login/loginUser",
    async ({username, password}, {rejectWithValue}) => {
        try {
            const response = await instance.post("user/login/",{
                username: username,
                password: password,
                remember_me: true,
            })


            console.log(response)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }


            window.localStorage.setItem("refreshToken", response.data.refresh)
            window.localStorage.setItem("accessToken", response.data.access)
            return  response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


export const googleUser = createAsyncThunk(
    "login/googleUser",
    async ({username, password}, {rejectWithValue}) => {
        try {
            const response = await instance.post("user/login/",{
                username: username,
                password: password,
                remember_me: true,
            })


            console.log(response)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }

            return  response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

export const newPassword = createAsyncThunk(
    "login/newPassword",
    async ({password, passwordRepeat}, {rejectWithValue}) => {
        try {
            const response = await instance.post(`user/reset_password/${window.localStorage.getItem("id")}/`,{
                new_password: password,
                confirm_password: passwordRepeat,
            })


            console.log(response)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }

            return  response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const signInSlice = createSlice({
    name:"login",
    initialState:{
        data:null,
        status:"",
        error:"",
    },
    reducers:{
        logoutUser: (state, action) => {
            state.data = null
            state.status = ""
        },
        loginUserGoogle : (state, action) => {
            state.data= action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
            .addCase(googleUser.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(googleUser.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(googleUser.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
            .addCase(newPassword.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(newPassword.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(newPassword.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})



export const {logoutUser, loginUserGoogle} = signInSlice.actions;
export default  signInSlice.reducer;