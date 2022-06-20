import { createSlice } from '@reduxjs/toolkit'
export const sliceSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 5
    },
    reducers: {
        increment: (state, /* action */) => {
            state.counter += 1
        },
    },
})
export const { increment } = sliceSlice.actions