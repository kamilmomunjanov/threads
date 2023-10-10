import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import instance from "../../config/axios";
import {profileUpdate, profileUser} from "./profileSlice";


export const profileUsername = createAsyncThunk(
    "get/profileUser",
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get(`user/profile/Malika/`,{
                headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("accessToken") }
            })
            console.log(response.data)

            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }


            // window.localStorage.setItem("access_token", response.data.token.access)
            return response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)



const otherProfileSlice = createSlice({
    name:"profile",
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
            .addCase(profileUsername.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(profileUsername.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(profileUsername.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})
export default  otherProfileSlice.reducer;