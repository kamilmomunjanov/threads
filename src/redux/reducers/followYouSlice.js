import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const followYou = createAsyncThunk(
    "get/followYou",
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get("user/who-following-by-me/",
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





const followYouSlice = createSlice({
    name:"followYou",
    initialState:{
        dataF:null,
        status:"",
        error:"",
    },
    reducers:{
        authPost:()=>{}
    },
    extraReducers: (builder) => {
        builder
            .addCase(followYou.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(followYou.fulfilled, (state, action) => {
                state.status = "done"
                state.dataF = action.payload
            })
            .addCase(followYou.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  followYouSlice.reducer;