import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './reducer/CounterSlice/counterSlice'
import { reducers } from './reducer'
import { postService } from '../services/postService/postService'

console.log('reducer', reducers)
const rootReducer = combineReducers(reducers)
export const setupStore = configureStore({
    reducer: rootReducer,
    // {
    //     counterReducer: rootReducer
    // }
    // middleware: () => buildGetDefaultMiddleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        postService.middleware,
    )
})
