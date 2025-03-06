import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:`cart`,
    initialState :  {
        items : []
    },
    reducers:{
        addCart: (state,action)=>{
            let obj = action.payload//in this particular obj we are passing the whole data
            let objId = obj.id;
            let itemIndex = state.items.findIndex((Obj)=>Obj.dataObj.id==objId)
            let cartObj = undefined;
            if(itemIndex==-1){ cartObj = {dataObj:obj,quantity:1}
            state.items.push(cartObj)
            }    
            else{
                let quantity = state.items[itemIndex].quantity
                state.items[itemIndex].quantity = quantity+1
            } 
        },
        removeCart:(state,action)=>{
            let id = action.payload//passing only the id 
            let itemIndex = state.items.findIndex((cartObj)=>cartObj.dataObj.id==id)
            state.items.splice(itemIndex,1)
        },
        clearCart:(state,action)=>{
            state.items.length = 0
        },
        decreaseCart:(state,action)=>{
            let obj = action.payload
            let id = obj.id
            let itemIndex = state.items.findIndex((cartObj)=>cartObj.dataObj.id==id)//due to curly brace the findIndex function is unable to return anything
            let quantity = state.items[itemIndex].quantity
            if(quantity==1){
                state.items.splice(itemIndex,1)
            }
            else {
                let cartObj = {dataObj:obj,quantity:(quantity-1)}
                state.items.splice(itemIndex,1)
                state.items.push(cartObj)
            }
        },
        priceAscending:(state,action)=>{
            state.items.sort((a,b)=>a.dataObj.price-b.dataObj.price)
        },
        priceDescending:(state,action)=>{
            state.items.sort((a,b)=>b.dataObj.price-a.dataObj.price)
        }
    }
    }
)
export let {addCart,removeCart,clearCart,decreaseCart,priceAscending,priceDescending} = cartSlice.actions
export default cartSlice.reducer