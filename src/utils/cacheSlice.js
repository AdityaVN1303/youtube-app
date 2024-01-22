import { createSlice } from "@reduxjs/toolkit";


const cacheslice = createSlice({
    name : 'cache',
    initialState : {} ,
    reducers : {
        addCache : (state , action)=>{
            Object.assign(state , action.payload);
        }  
    }
})

export default cacheslice.reducer
export const {addCache} = cacheslice.actions