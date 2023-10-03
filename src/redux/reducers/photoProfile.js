import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const profilePhoto = createAsyncThunk(
    "profile/profilePhoto",
    async (formData, {rejectWithValue}) => {
        try {
            const response = await instance.put("user/me/update-profile-photo/", formData,
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




const photoSlice = createSlice({
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
            .addCase(profilePhoto.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(profilePhoto.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(profilePhoto.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  photoSlice.reducer;