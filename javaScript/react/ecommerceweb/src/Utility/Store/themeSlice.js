import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
    name: `theme`,
    initialState: {
        theme: localStorage.getItem("Theme") || "light"
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.theme==`dark`?state.theme=`light`:state.theme=`dark`
            localStorage.setItem("Theme",state.theme)
        }
    }
}
)
export let { toggleTheme } = themeSlice.actions
export default themeSlice.reducer