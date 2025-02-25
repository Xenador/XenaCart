import React from 'react'
import { useState, useEffect } from 'react'
let UseCallSingleProductApi = (id) => {
    let [object, setObj] = useState(null)
    let getData = async () => {
        let data = await fetch(`https://dummyjson.com/products/${id}`)
        let obj = await data.json()
        setObj(obj)
    }
    useEffect(() => {
        getData()
      }, [])
  return (object)
}

export default UseCallSingleProductApi