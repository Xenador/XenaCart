import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmerui from './Shimmerui'
import UseCallSingleProductApi from './Utility/UseCallSingleProductApi'
import { useContext } from 'react'
import { ThemeStore } from './Utility/ThemeContext'
import Reviews from './Reviews/Reviews'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from './Utility/Store/cartSlice'
import { combineSlices } from '@reduxjs/toolkit'
//the useparams is a hook which only works inside the component function
let Product = () => {
  let { theme, setTheme } = useContext(ThemeStore)
  let { id } = useParams()
  let object = UseCallSingleProductApi(id)
  let cartItems = useSelector((store)=>store.cart.items)
  let dispatch = useDispatch()
  if (object == null) {
    return (<Shimmerui></Shimmerui>)
  }
  let lightTheme = "bg-gray-600"
  let darkTheme = "bg-black"
  let lightBack = "bg-gray-400"
  let darkBack = "bg-gray"
  let { title, thumbnail, description, price, rating, stock, category, reviews } = object//this is object destructuring
  let handleAdd = ()=>{
    dispatch(addCart(object))
  }
  let inCart = cartItems.some((obj)=>obj.dataObj.id==object.id)
  console.log(cartItems)
  return (
    <div className={`${theme == 'dark' ? darkBack : lightBack}  py-10`}>
      <div className={`card card-side mx-auto shadow-xl w-3xl items-center relative rounded-b-none ${theme == 'dark' ? darkTheme : lightTheme}`}>
        {
          inCart?(<div className='absolute top-2 left-2 rounded-xl bg-amber-600 p-1.5'>
            <p>
              Already In Cart
            </p>
          </div>):<></>
        }
        
        <figure>
          <img
            src={thumbnail}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title m-2" >{title}</h2>
          <div className="flex flex-wrap">
            <button className="btn w-40 m-1">
              Price
              <div className='badge badge-secondary'>{price}</div>
            </button>
            <button className="btn w-40 m-1">
              Rating
              <div className='badge badge-secondary'>{rating}</div>
            </button>
            <button className="btn w-40 m-1">
              Category
              <div className='badge badge-secondary'>{category}</div>
            </button>
            <button className="btn w-40 m-1">
              Stock
              <div className='badge badge-secondary'>{stock}</div>
            </button>
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary"
              onClick={handleAdd}
            >Add to Cart</button>
          </div>
        </div>
      </div>
      <Reviews reviews={reviews}></Reviews>
    </div>
  )
}

export default Product