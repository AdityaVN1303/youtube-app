import { createSlice } from "@reduxjs/toolkit";


const appslice = createSlice({
    name : 'app',
    initialState : {
        isMenuOpen : false ,
        videos : []
    } ,
    reducers : {
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        openMenu : (state)=>{
            state.isMenuOpen = true
        },
        closeMenu : (state)=>{
            state.isMenuOpen = false
        },
        addVideos : (state , action)=>{
            state.videos = action.payload
        },
    }
})

export default appslice.reducer
export const {toggleMenu , openMenu, closeMenu , addVideos} = appslice.actions