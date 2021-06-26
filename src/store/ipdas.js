import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = {
    describeOptions: false
}

const slice = createSlice({
    name: "ipdas",
    initialState,
    reducers: {
        describeOptionsChanged: (state,action) => {
            state.describeOptions = action.payload
        }
    }
})

export const {describeOptionsChanged} = slice.actions
export default slice.reducer

export const getIPDAS = createSelector(
    state => state.ipdas,
    (ipdas) => ipdas
)