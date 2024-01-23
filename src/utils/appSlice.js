import { createSlice } from "@reduxjs/toolkit";


const appslice = createSlice({
    name : 'app',
    initialState : {
        isMenuOpen : false ,
        videos : [],
        searchResults : []
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
        addSearchResults : (state , action)=>{
            state.searchResults = action.payload
        },
    }
})

export default appslice.reducer
export const {toggleMenu , openMenu, closeMenu , addVideos , addSearchResults} = appslice.actions