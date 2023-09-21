import { createSlice } from '@reduxjs/toolkit';


export const slice = createSlice({
    name: 'language',
    initialState: {
        language: false,
    },
    reducers: {
        changeLanguage(state, { payload }) { // action.payload
            return { ...state, language: payload }
        },
        defaultLanguage(state){
            return { ... state, language: false}
        }
    }
})

export const { changeLanguage } = slice.actions;


export default slice.reducer;