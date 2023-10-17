import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/axios.js";
import axios from "axios";


export const commentAdd = createAsyncThunk(
    "post/comment",
    async ({comment, id}, {rejectWithValue}) => {
        try {
            const response = await instance.post(`thread/comment/${id}/`,
                {
                    content: comment
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

export const commentGet = createAsyncThunk(
    "get/comment",
    async ({id}, {rejectWithValue}) => {
        try {
            const response = await instance.get(`thread/thread/thread-with-comments/${id}/`,
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



const commentSlice = createSlice({
    name:"comment",
    initialState:{
        data:null,
        status:"",
        error:"",
    },
    reducers: {
        authPost: () => {
        },
        commentDeleteLocal: (state, action) => {
            const commentIdToDelete = action.payload;
            if (state.data && Array.isArray(state.data.comments)) {
                state.data = {
                    comments: state.data.comments.filter(comment => comment.id !== commentIdToDelete)
                };
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(commentAdd.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(commentAdd.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(commentAdd.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
            .addCase(commentGet.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(commentGet.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(commentGet.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})

export const {commentDeleteLocal} = commentSlice.actions;
export default  commentSlice.reducer;