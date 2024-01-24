import { CDN_URL } from "../utils/constant";

const ItemList = ({items}) => {
    console.log(items)
    return (
        <div>
            {items.map((resItems) => <div key={resItems.card.info.id}>
                <div className="flex justify-between p-2">
                    <div className="w-9/12">
                        <span className="text-[16px] font-sans py-2">
                            {resItems.card.info.name}
                        </span>
                        <span> - ₹{resItems.card.info.price/100 ? resItems.card.info.price/100 : resItems.card.info.defaultPrice/100}</span>
                        <div className="text-sm font-light">
                            <p>{resItems.card.info.description}</p>
                        </div>
                    </div>
                    <div className="w-2/12">
                        <button className="absolute border border-green-400 rounded-b-md text-sm bg-black text-white">ADD +</button>
                        <img className="px-2 rounded-xl" src={CDN_URL+resItems.card.info.imageId}/>
                        
                    </div>
                </div>
                </div>)}
        </div>
    )
}

export default ItemList;