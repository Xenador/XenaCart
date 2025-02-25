import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmerui from './Shimmerui'
import UseCallSingleProductApi from './Utility/UseCallSingleProductApi'
import { useContext } from 'react'
import { ThemeStore } from './Utility/ThemeContext' 
//the useparams is a hook which only works inside the component function
let Product = () => {
  let {theme,setTheme} = useContext(ThemeStore)
  let { id } = useParams()
  let object = UseCallSingleProductApi(id)
  if (object == null) {
    return (<Shimmerui></Shimmerui>)
  }
  let lightTheme = "bg-gray-600"
  let darkTheme  = "bg-black"
  let lightBack = "bg-gray-400"
  let darkBack = "bg-gray"
  let { title, thumbnail, description, price, rating, stock, category } = object//this is object destructuring
  return (
      <div className={`${theme=='dark'?darkBack:lightBack} h-[87vh] justify-center items-center flex overflow-hidden`}>
    <div className={`card card-side justify-center shadow-xl w-3xl items-center ${theme=='dark'?darkTheme:lightTheme}`}>
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
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product