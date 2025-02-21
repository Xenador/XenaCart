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
        console.log(obj.products)
        setProductdata(obj.products)
        setAllProducts(obj.products)
    }
    useEffect(() => {
        getData()
    }, [])

    if(allProducts.length==0){
        return (<Shimmerui></Shimmerui>)
    }

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
                        <input value={searchQuery} className="mx-2 h-10 rounded-xl p-2" onChange={(event) => {
                            setSearchQuery(event.target.value)
                        }} type="text" />
                        <button className="btn btn-active btn-success" onClick={() => handle('search')}>Search</button>
                    </div>
                    {console.log("rendering is called")}
                    <button className="btn btn-active btn-primary" onClick={() => handleCategory('groceries')}>Grocery</button>
                    <button className="btn btn-active btn-primary" onClick={() => handleCategory('beauty')}>Beauty</button>
            </div>    
                <div className="flex flex-wrap">
                    {
                        productData.map((obj) => {
                            return (
                                <Productcard obj={obj} key={obj.id}></Productcard>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Home  