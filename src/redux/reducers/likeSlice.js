import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const likeThread = createAsyncThunk(
    "post/likeThread",
    async ({id}, {rejectWithValue}) => {
        try {
            const response = await instance.post(`thread/${id}/like/`,null,
                {
                    headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("accessToken") }
                })
            console.log(response.data)

            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }

            window.localStorage.setItem("like", response.data)
            return response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)





const likeSlice = createSlice({
    name:"likeThread",
    initialState:{
        likeDone:null,
        status:"",
        error:"",
    },
    reducers:{
        authPost:()=>{}
    },
    extraReducers: (builder) => {
        builder
            .addCase(likeThread.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(likeThread.fulfilled, (state, action) => {
                state.status = "done"
                state.likeDone = action.payload
            })
            .addCase(likeThread.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  likeSlice.reducer;