import React from 'react'
import { useSelector } from 'react-redux'

const AddedProductCart = (Component) => {
    return (props)=>{
        let cartItems = useSelector((store)=>store.cart.items)
        console.log(props)
      let inCart = cartItems.some((obj)=>obj.dataObj.id == props.obj.id)
    return(
        <div className='relative'>
        {inCart?<div className='absolute left-4 top-4 z-10 rounded-xl bg-amber-600 p-1.5'>
            <p>
              Already In Cart
            </p>
        </div>:<></>}
        <Component {...props}></Component>
        </div>
    )
  }
}

export default AddedProductCart