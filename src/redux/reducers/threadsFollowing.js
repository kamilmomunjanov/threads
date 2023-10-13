import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const threadsFollowing = createAsyncThunk(
    "get/threadsFollowing",
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get(`thread/following-feed/`,
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





const threadsFollowingSlice = createSlice({
    name:"followUser",
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
            .addCase(threadsFollowing.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(threadsFollowing.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(threadsFollowing.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  threadsFollowingSlice.reducer;