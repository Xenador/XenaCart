import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart, decreaseCart, removeCart } from './Utility/Store/cartSlice'

const CartRow = ({ cartObj }) => {
    let { dataObj, quantity } = cartObj
    let { thumbnail, price, title, rating } = dataObj
    let dispatch = useDispatch()
    let handleRemove = ()=>{
        dispatch(removeCart(dataObj.id))
    }
    let handleIncrease = ()=>{
        dispatch(addCart(dataObj))
    }
    let handleDecrease = () =>{
        dispatch(decreaseCart(dataObj))
    }
    return (
        <tr className='text-center text-[18px]'>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-15 w-15">
                            <img
                                src={thumbnail}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                {rating}
            </td>
            <td>{price}</td>
            <td className=''>
            <span 
            className='cursor-pointer'
            onClick={handleIncrease}
            >⬆️</span>
                <span className='px-2'>{quantity}</span>
            <span
            className='cursor-pointer'
            onClick={handleDecrease}
            >⬇️</span>
            </td>
            <th>
                <button onClick={handleRemove} className="btn btn-soft btn-error">Remove</button>
            </th>
        </tr>

    )
}

export default CartRow