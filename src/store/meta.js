import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = {}

const slice = createSlice({
    name: 'meta',
    initialState,
    reducers: {
        metaStored: (state, action) => {
            for (const key in action.payload) {
                state[key] = action.payload[key]
            }
        },
        pagesStored: (state, action) => {
          state.pages = action.payload.pages
        }
    }
})

export const {metaStored, pagesStored} = slice.actions
export default slice.reducer

export const getMeta =  createSelector(
    state => state.meta,
    (meta) => meta
)