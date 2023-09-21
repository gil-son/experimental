import { configureStore } from "@reduxjs/toolkit";
import styleReducer from './slice'
import languageReducer from './sliceLanguage'

export default configureStore({
    reducer:{
        mystyle: styleReducer,
        mylanguage: languageReducer 
    }
})