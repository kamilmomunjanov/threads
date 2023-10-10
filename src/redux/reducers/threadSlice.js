import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const createThreads = createAsyncThunk(
    "post/threadCreate",
    async (formData, {rejectWithValue}) => {
        try {
            const response = await instance.post("thread/create-thread/",
                formData,
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

export const getThreads = createAsyncThunk(
    "get/getThreads",
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get("thread/for-you/",
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




const threadSlice = createSlice({
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
            .addCase(createThreads.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(createThreads.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(createThreads.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
            .addCase(getThreads.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(getThreads.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(getThreads.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  threadSlice.reducer;