import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const followMe = createAsyncThunk(
    "get/followMe",
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get("user/who-follow-me/",
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





const followSlice = createSlice({
    name:"thread",
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
            .addCase(followMe.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(followMe.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(followMe.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  followSlice.reducer;