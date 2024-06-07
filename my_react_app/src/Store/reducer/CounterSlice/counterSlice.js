import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}
export const counterSlice = createSlice({
    name: 'counterReducer',
    initialState: initialState,
    reducers: {
        setCounter(state, action) {
            state.value = action.payload.value
        },
        resetCounter(state) {
            state.value = 0
        }
    }
})
export const { setCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;