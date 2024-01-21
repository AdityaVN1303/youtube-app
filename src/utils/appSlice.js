import { createSlice } from "@reduxjs/toolkit";


const appslice = createSlice({
    name : 'app',
    initialState : {
        isMenuOpen : true ,
        videos : []
    } ,
    reducers : {
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        addVideos : (state , action)=>{
            state.videos = action.payload
        },
    }
})

export default appslice.reducer
export const {toggleMenu , addVideos} = appslice.actions