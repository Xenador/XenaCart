import React, { useState } from 'react'
import { createContext } from 'react'

export let ThemeStore = createContext(null)//this is the context api that is basically kind of the global store from where all the components may fetch the data exporting this because our app can have multiple contexts

const ThemeContext = ({ children }) => {
    let [theme,setTheme] = useState(localStorage.getItem("Theme"))//state to ensure that every component should rerender if there is any  change in the state
    return (
        <ThemeStore.Provider value = {{theme,setTheme}}> {/*these values will go to the theme vaiable which is acting as the store for context api*/}
             {children} {/*all the components inside this theme provider component shall be used as an children than the those components shall be rerendered according to the change in the state of the theme */}
        </ThemeStore.Provider>
    )
}
export default ThemeContext