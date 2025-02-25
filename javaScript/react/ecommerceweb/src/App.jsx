import Home from "./Home.jsx"
import Navbar from "./Navbar.jsx"
import Shimmerui from "./Shimmerui.jsx"
import { Outlet } from "react-router-dom"
import ThemeContext from "./Utility/ThemeContext.jsx"
function App(){
  return(
    <>
    <ThemeContext>
    <Navbar></Navbar> 
    <Outlet></Outlet> 
    </ThemeContext>
    </>
    
  )
}
export default App