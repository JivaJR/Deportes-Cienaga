import { createSlice } from '@reduxjs/toolkit';

export const newsBSlice = createSlice({
    initialState: {
        uids:[],
    },
    reducers: {
        updateUid: (state,action) => {
            state.uids = state.uids.map(uid =>{
                if (uid.id === action.payload.id){
                    return action.payload
                }
                return note
            });
        },
    }
});

export const { 

    updateUid,

} = journalSlice.actions;