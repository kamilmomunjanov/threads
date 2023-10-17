import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const quoteThread = createAsyncThunk(
    "post/quote",
    async ({id, content}, {rejectWithValue}) => {
        try {
            const response = await instance.post(`thread/quote/${id}`,
                {
                    additional_text: "string",
                    thread: {
                        content: "string"

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




export const getQuoteThread = createAsyncThunk(
    "get/quote",
    async ({id}, {rejectWithValue}) => {
        try {
            const response = await instance.get(`thread/quote/${id}`,
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

export const deleteQuoteThread = createAsyncThunk(
    "delete/quote",
    async ({id}, {rejectWithValue}) => {
        try {
            const response = await instance.delete(`thread/quote/${id}`,
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





const quoteSlice = createSlice({
    name:"quote",
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
            .addCase(quoteThread.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(quoteThread.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(quoteThread.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
            .addCase(getQuoteThread.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(getQuoteThread.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(getQuoteThread.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
            .addCase(deleteQuoteThread.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(deleteQuoteThread.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(deleteQuoteThread.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })

    }
})


export default  quoteSlice.reducer;