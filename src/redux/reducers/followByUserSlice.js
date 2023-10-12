import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const followUser = createAsyncThunk(
    "post/followUser",
    async ({id}, {rejectWithValue}) => {
        try {
            const response = await instance.post(`user/follow/${id}/`,
                null,
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





const followByUserSlice = createSlice({
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
            .addCase(followUser.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(followUser.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(followUser.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  followByUserSlice.reducer;