import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ThemeStore } from "./Utility/ThemeContext"

let Productcard = ({ obj }) => {
    let { theme, setTheme } = useContext(ThemeStore)
    let { title, thumbnail, category, rating, brand, price, id } = obj
    let navigate = useNavigate()
    let handleClick = () => {
        navigate(`/products/${id}`)
    }

    let handleAddBtn = (event) => {
        console.log(`Add Btn is clicked`)
        event.stopPropagation()
    }
    let lightTheme = "bg-gray-300"
    let darkTheme = "bg-zinc-400"
    let lightBottom = "bg-gray-600"
    let darkBottom = "bg-black"
    return (
        <div className="card bg-base-300 w-86 shadow-xl m-3 h-[60vh] rounded-xl" onClick={handleClick}>
            <figure>
                <img
                    src={thumbnail}
                    alt="Shoes"
                    className={`${theme == 'dark' ? darkTheme : lightTheme} rounded-1xl h-full w-full object-contain`} />
            </figure>
            <div className={`card-body ${theme == 'dark' ? darkBottom : lightBottom} rounded-b-xl`}>
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions justify-between items-center">
                    <div className="badge badge-secondary">{category}</div>
                    <div className="badge badge-secondary">{rating}</div>
                    <p className="p-2 rounded-2xl text-amber-50">{price}$</p>
                    <button className="border-1 bg-blue-500 p-2 rounded-2xl" onClick={handleAddBtn}>Add</button>
                </div>

            </div>
        </div>

    )
}
export default Productcard