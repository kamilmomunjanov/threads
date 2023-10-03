import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const profileUser = createAsyncThunk(
    "profile/profileUser",
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get("user/me/",{
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


// {
//     "user": 3,
//     "username": "Kamil",
//     "name": "IT",
//     "photo": null,
//     "bio": null,
//     "is_private": false,
//     "number_of_followers": 0,
//     "number_of_following": 0
// }


export const profileUpdate = createAsyncThunk(
    "profile/profileUpdate",
    async ({user,username,name,photo,bio,is_private}, {rejectWithValue}) => {
        try {
            const response = await instance.put("user/me/",{
                user:user,
                name:name,
                username:username,
                photo:photo,
                bio:bio,
                is_private:is_private
            },
                {
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





const profileSlice = createSlice({
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
            .addCase(profileUser.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(profileUser.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(profileUser.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
            .addCase(profileUpdate.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(profileUpdate.fulfilled, (state, action) => {
                state.status = "done"
                state._data = action.payload
            })
            .addCase(profileUpdate.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default  profileSlice.reducer;