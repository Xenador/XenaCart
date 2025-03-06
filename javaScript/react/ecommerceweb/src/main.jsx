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
import store from './Utility/Store/store.js'
import {Provider} from 'react-redux'
let Food = lazy(()=> import("./Food.jsx"))//here the component is imported or is being downloaded...
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
        element : <Suspense fallback = {<Shimmerui></Shimmerui>}>//there is lazy loading so react will try to render the component before its imported or downloaded so suspense will help to wait and fallback will ensure that the shimmerui will be seen until the food component is not downloaded on the user's demand
           <Food></Food>
        </Suspense>
      }

    ],
    errorElement : <Error></Error>
  }
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>{/*here we are connecting our store to our app (redux-store)*/}
  <RouterProvider router={router}></RouterProvider>
  </Provider>
)
