import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const allUser = createAsyncThunk(
    "get/allUser",
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get("user/profile/",
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





const allUserSlice = createSlice({
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
            .addCase(allUser.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(allUser.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(allUser.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  allUserSlice.reducer;