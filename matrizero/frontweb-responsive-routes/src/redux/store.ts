import { configureStore } from "@reduxjs/toolkit";
import styleReducer from './slice'


export default configureStore({
    reducer:{
        mystyle: styleReducer,
    }
})