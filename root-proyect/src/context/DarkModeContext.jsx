import { createContext, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(false)

    const toogleDarkMode = ()=>{
        setDarkMode(!darkMode)
    }


    return(
        <DarkModeContext.Provider value={{ darkMode, toogleDarkMode }}>
            <div className={darkMode ? "dark-mode" : ''}>
                {children}
            </div>
            
        </DarkModeContext.Provider>
    )
}