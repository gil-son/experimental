import { createSlice } from '@reduxjs/toolkit';


export const slice = createSlice({
    name: 'style',
    initialState: {
        style: ''
    },
    reducers: {
        changeStyle(state, { payload }) {
            return { ...state, style: payload }
        }
    }
})

export const { changeStyle} = slice.actions;

//export const selectStyle = state => state.style;

export default slice.reducer;