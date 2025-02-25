import { StrictMode,lazy,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from './Cart.jsx'
import About from './About.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Home.jsx'
import Error from './Error.jsx'
import Product from './Product.jsx'
import Productcard from './Productcard.jsx'
import Shimmerui from './Shimmerui.jsx'
let Food = lazy(()=> import("./Food.jsx"))
let router = createBrowserRouter([
  {
    path : "/",
    element : <App></App>, //lets create the children routes
    children : [//for handling of the error in the routing for for all the not available paths we will provide the error element in the children of the router
      {
        path : "/",
        element : <Home></Home>
      },  
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/cart",
        element : <Cart></Cart>
      },
      {
        path : "/products/:id",//when we put colon than atually here id will be acting as the variable
        element : <Product></Product>
      },
      {
        path : "/food",
        element : <Suspense fallback = {<Shimmerui></Shimmerui>}>
           <Food></Food>
        </Suspense>
      }

    ],
    errorElement : <Error></Error>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
