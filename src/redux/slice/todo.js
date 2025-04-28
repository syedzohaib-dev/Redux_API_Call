import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json()
})

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true
        })
    }




})

// export const { extraReducers } = todoSlice.actions
export default todoSlice.reducer