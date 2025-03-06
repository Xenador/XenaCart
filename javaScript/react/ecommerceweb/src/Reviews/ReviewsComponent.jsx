import React, { useState } from 'react'

let ReviewsComponent = ({obj,ind,indShow,setIndShow}) => {

  let { rating, reviewerName, comment } = obj

  let RatingColor = () => {
    if (rating == 2) return ("text-red-900")
    else if (rating == 1) return ("text-red-700")
    else if (rating == 3) return ("text-yellow-400")
    else if (rating == 4) return ("text-green-300")
    else return ("text-green-400")
  }
  let handleClick = ()=>{
    ind==indShow?setIndShow(null):setIndShow(ind)
   // setShow(!show)
  }
  return (

    <div className={`my-0.5`}>
      <div style={{ backgroundColor: 'oklch(0.457 0.24 277.023)' }} className={`box1 text-white w-xl mx-auto justify-between items-center flex px-20 ${indShow!=null && indShow==ind?`rounded-t-xl h-[5vh]`:`rounded-xl border-b-2 h-[7vh]  border-black`}`}>
        <p>{reviewerName}</p>
        <p className='cursor-pointer' onClick={handleClick}>{indShow==ind?'⬆️':'⬇️'}</p>
      </div>
      {indShow==ind?
        <div style={{ backgroundColor: 'oklch(0.673 0.182 276.935)' }} className={`box2 ${RatingColor()} w-xl mx-auto h-[7vh] rounded-b-xl flex mb-1 justify-between items-center px-20`}>
          <p>{comment}</p>
          <p className={`${RatingColor()}`}>{rating}</p>
        </div>:<></>
      }
    </div>
  )
}

export default ReviewsComponent