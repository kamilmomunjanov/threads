import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";




export const verificationOTP = createAsyncThunk(
    "login/verificationOTP",
    async ({code}, {rejectWithValue}) => {
        try {
            const response = await instance.post("user/otp_verificaton/",{
                code: code,
            })


            console.log(response)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }

            window.localStorage.setItem("id", response.data.user_id)
            return  response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const verificationSlice = createSlice({
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
            .addCase(verificationOTP.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(verificationOTP.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(verificationOTP.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})



export default  verificationSlice.reducer;