import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const getTheadId = createAsyncThunk(
    "get/getTheadId",
    async ({id}, {rejectWithValue}) => {
        try {
            const response = await instance.get(`thread/thread/${id}/`,
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





const getThreadIdSlice = createSlice({
    name:"allUser",
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
            .addCase(getTheadId.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(getTheadId.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(getTheadId.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  getThreadIdSlice.reducer;