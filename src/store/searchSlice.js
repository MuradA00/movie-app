import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isHidden: true
    },
    reducers: {
        display(state, action) {
            state.isHidden = action.payload
        }
    }
})

export const {display} = searchSlice.actions;
export default searchSlice.reducer;