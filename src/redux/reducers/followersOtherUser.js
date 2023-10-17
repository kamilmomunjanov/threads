import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const followersOtherUser = createAsyncThunk(
    "get/followers",
    async ({username}, {rejectWithValue}) => {
        try {
            const response = await instance.get(`user/followers/${username}/`,
                {
                    headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("accessToken") }
                })
            console.log(response.data)

            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }

            return response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)





const followerOtherUserSlice = createSlice({
    name:"followers",
    initialState:{
        data:null,
        status:"",
        error:"",
    },
    reducers:{
        authPost:()=>{}
    },
    extraReducers: (builder) => {
        builder
            .addCase(followersOtherUser.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(followersOtherUser.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(followersOtherUser.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  followerOtherUserSlice.reducer;