import React, { useState } from 'react'
import ReviewsComponent from './ReviewsComponent'
import { useContext } from 'react'
import { ThemeStore } from '../Utility/ThemeContext'

let Reviews = ({reviews})=> {
  let [indShow,setIndShow] = useState(null)  //no option is to be open in the starting //here we are using the state lifting because 
  //
  let lightTheme = "bg-gray-300"
  let darkTheme = "bg-zinc-900"
  let {theme,setTheme} = useContext(ThemeStore)
  return (
    <div className={`${theme=='dark'?darkTheme:lightTheme} w-3xl mx-auto  rounded-b-xl py-3`}>
      {reviews.map((obj,ind) =>(<ReviewsComponent obj={obj} ind={ind} key={ind} indShow={indShow} setIndShow={setIndShow}></ReviewsComponent>))}
    </div>
  )
}

export default Reviews