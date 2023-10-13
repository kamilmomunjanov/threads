import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const oneUser = createAsyncThunk(
    "get/oneUser",
    async ({username}, {rejectWithValue}) => {
        try {
            const response = await instance.get(`user/profile/${username}/`,
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





const profileUserSlice = createSlice({
    name:"oneUser",
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
            .addCase(oneUser.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(oneUser.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(oneUser.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  profileUserSlice.reducer;