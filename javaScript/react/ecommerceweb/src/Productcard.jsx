let Productcard = ({obj})=>{
    let  {title,thumbnail,category,rating,brand,price} = obj
    return(
                <div className="card bg-base-300 w-86 shadow-xl m-3 h-[60vh]">
                    <figure>
                        <img
                            src={thumbnail}
                            alt="Shoes"
                            className="bg-zinc-400 rounded-2xl h-full w-full    object-contain" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                        </h2>
                        <div className="card-actions justify-between items-center">
                        <div className="badge badge-secondary">{category}</div>
                            <div className="badge badge-secondary">{rating}</div>
                            <p className="p-2 rounded-2xl text-amber-50">{price}$</p>
                            <button className="border-1 bg-blue-500 p-2 rounded-2xl">Add</button>
                        </div>

                    </div>
                </div>
            
    )
}
export default Productcard