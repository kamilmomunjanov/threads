import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";




export const forgotPassword = createAsyncThunk(
    "login/forgotPassword",
    async ({email}, {rejectWithValue}) => {
        try {
            const response = await instance.post("user/forgot_password/",{
                email: email,
            })


            console.log(response)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }

            return  response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const forgotPasswordSlice = createSlice({
    name:"login",
    initialState:{
        data:null,
        status:"",
        error:"",
    },
    reducers:{
        logoutUser: (state, action) => {
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(forgotPassword.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})



export default  forgotPasswordSlice.reducer;