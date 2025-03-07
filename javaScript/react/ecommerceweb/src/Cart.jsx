import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartRow from './CartRow'
import emptyCart from './Utility/empty-cart.png'
import store from './Utility/Store/store'
import { clearCart, priceAscending, priceDescending } from './Utility/Store/cartSlice'
function Cart() {
  let dispatch = useDispatch()
  let cartItems = useSelector((store) => store.cart.items)
  let theme = useSelector((store)=>store.theme.theme)
  let handleClear = () => {
    dispatch(clearCart())
  }
  let handleDescending = () => {
    dispatch(priceDescending())
  }
  let handleAscending = () => {
    dispatch(priceAscending())//this is example diff commit for new branch
  }
  return (
    <div className={`min-h-[90vh] overflow-y-auto px-4 ${theme=='dark'?'bg-black':'bg-white'}`}>
      {cartItems.length != 0 ? <table className={`table ${theme=='dark'?'text-white':'text-black'}`}>
        {/* head */}
        <thead className={`text-xl ${theme=='dark'?'text-white':'text-black'}`}>
          <tr className='text-center'>
            <th className='text-left pl-16'>Name</th>
            <th>Rating</th>
            <th>
              <span className='cursor-pointer'
                onClick={handleDescending}
              >⬆️
              </span>
              Price<span
              className='cursor-pointer'
              onClick={handleAscending}
              >⬇️</span></th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className=''>{cartItems.map((cartObj, ind) => <CartRow key={ind} cartObj={cartObj}></CartRow>)}</tbody>
      </table> : <></>}
      <div className={`flex justify-center ${cartItems.length ? 'p-2' : 'h-[90vh] items-center'}`}>
        {cartItems.length ? <button
          className="btn btn-outline btn-error"
          onClick={handleClear}
        >Clear Cart</button>
          : <img
            className='w-30vh h-[30vh]'
            src={emptyCart}>
          </img>}
      </div>
    </div>
  )
}

export default Cart