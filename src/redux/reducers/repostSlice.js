import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const repostThread = createAsyncThunk(
    "post/repost",
    async ({id, content}, {rejectWithValue}) => {
        try {
            const response = await instance.post(`thread/repost/${id}`,
                {
                    thread: {
                content: content

            }
                },
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




export const getRepostThread = createAsyncThunk(
    "get/repost",
    async ({id}, {rejectWithValue}) => {
        try {
            const response = await instance.get(`thread/repost/${id}`,
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

export const deleteRepostThread = createAsyncThunk(
    "delete/repost",
    async ({id}, {rejectWithValue}) => {
        try {
            const response = await instance.delete(`thread/repost/${id}`,
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





const repostSlice = createSlice({
    name:"repost",
    initialState:{
        _data:null,
        status:"",
        error:"",
    },
    reducers:{
        authPost:()=>{}
    },
    extraReducers: (builder) => {
        builder
            .addCase(repostThread.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(repostThread.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(repostThread.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
            .addCase(getRepostThread.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(getRepostThread.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(getRepostThread.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
            .addCase(deleteRepostThread.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(deleteRepostThread.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(deleteRepostThread.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })

    }
})


export default  repostSlice.reducer;