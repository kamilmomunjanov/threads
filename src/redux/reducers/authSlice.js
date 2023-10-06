import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const authUser = createAsyncThunk(
    "auth/authUser",
    async ({email, username, password, confirm_password,}, {rejectWithValue}) => {
        try {
            const response = await instance.post("user/register/",{
                email:email,
                username:username,
                password:password,
                confirm_password:confirm_password,
            })
            console.log(response)

            if (response.statusText !== "Created") {
                throw new Error("Ошибка при запросе")
            }


            // window.localStorage.setItem("access_token", response.data.token.access)
            return response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const registerSlice = createSlice({
    name:"auth",
    initialState:{
        _data:null,
        status:"",
        error:"",
    },
    reducers:{
        authPost:()=>{},

    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(authUser.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})

export default  registerSlice.reducer;