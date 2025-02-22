import Productcard from "./Productcard.jsx"
import { useEffect, useState } from "react"
import Shimmerui from "./Shimmerui.jsx"
let Home = () => {
    let [allProducts, setAllProducts] = useState([])//this state will store all the data this is optimal
    let [productData, setProductdata] = useState([])//this state will keep on updating the home component
    //let[searchQuery,setSearchQuery] = useState("")
    let [searchQuery, setSearchQuery] = useState("")
    let handle = (temp) => {
        let filteredArray = allProducts.filter((obj) => {
            if (temp == 'rating') return obj.rating > 4
            else if (temp == 'search') {
                setSearchQuery("")
                return obj.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
            }
        })
        setProductdata(filteredArray)
    }
    let handleCategory = (category) => {
        let filteredArray = allProducts.filter((obj) => {
            return obj.category == category
        })
        setProductdata(filteredArray)
    }
    
    let getData = async () => {
        let data = await fetch(`https://dummyjson.com/products`)
        let obj = await data.json()
        //console.log(obj.products)
        setProductdata(obj.products)
        setAllProducts(obj.products)
    }
    useEffect(() => {//this sueeEffect will only be called once when the home comonent is rendered 
        console.log(`Use effect with empty array is called`)
        getData()
    }, [])
    useEffect(()=>{
        console.log(`Use effect with no dependency array is called`)
    })
    useEffect(()=>{
        console.log(`Use effect with dependency array is called`)
    },[searchQuery])
    
    if(allProducts.length==0){
        console.log("rendering is called")
        return (<Shimmerui></Shimmerui>)
    }


//MOST IMPORTANT NOTE

//** I we change the state of any of the hook than the whole component will render itself Again a component will be rerenderd only if any data or the state of any if the data will be changed or change in props will also lead to rerendering of the component **/
//** Actually what happens is all the code we are currently wirting is comverted to the virtual dom by the react than  
//**********************************************DEFINE RECONCIALLATION************************************************
//**  When we are actually changing something or for eg we are removing some card from the our home component than our react will first creat a coopy the old virtual dom than it will create a new virtual dom which will not be having those cards thsn in case of execution the react
//  will compare these two virtual doms on the basis of that coparison those two psrticular cards will be removed from the old virtual dom and this property of react makes it really very fast**/
    // let handleSearch = ()=>{
    //     setSearchQuery()
    //     let filteredArray = allProducts.filter((obj)=>{
    //         return obj.title.toLowerCase().includes(searchQuery.toLowerCase())
    //     })
    //     setProductdata(filteredArray)
    // }

    // let handleSearch = ()=>{
    //     let filteredArray = allProducts.filter((obj)=>{
    //         return obj.title.toLowerCase().includes(searchQuery.toLowerCase())
    //     })
    //     setProductdata(filteredArray)
    //     setSearchQuery("")
    // }


    return (

        <>
            <div className=" h-[91vh] w-screen flex-col justify-around">

                <div className="utility flex justify-around mt-2">
                    <button className="btn btn-active btn-primary" onClick={() => handle('rating')}>Top Rating</button>
                    <button className="btn btn-active btn-primary" onClick={() => handleCategory('furniture')}>Furniture</button>
                    <div className="searchbar flex">
                        <input value={searchQuery} className="mx-2 h-10 rounded-xl p-2" onChange={(event) => {//
                            setSearchQuery(event.target.value)
                        }} type="text" />
                        <button className="btn btn-active btn-success" onClick={() => handle('search')}>Search</button>
                    </div>
                    {console.log("rendering is called1")}
                    <button className="btn btn-active btn-primary" onClick={() => handleCategory('groceries')}>Grocery</button>
                    <button className="btn btn-active btn-primary" onClick={() => handleCategory('beauty')}>Beauty</button>
            </div>    
                <div className="flex flex-wrap">
                    {
                        productData.map((obj) => {
                            return (
                                <Productcard obj={obj} key={obj.id}></Productcard>//here the role of the is to  diffentiate btween the diff card of components as according to react there are multiple objects in the in the data that are really vrey similar basically id is differentiation the domponents from esch other
                             )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Home  