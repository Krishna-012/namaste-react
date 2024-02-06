import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";

const ItemList = ({items}) => {
    // console.log(items)

    const dispatch = useDispatch();

    const handleclick = (items) => {
        dispatch(addItem(items));
        // console.log(addItem);
    }

    return (
        <div>
            {items.map((resItems) => <div key={resItems.card.info.id}>
                <div data-testid="foodItems" className="flex justify-between p-2">
                    <div className="w-9/12">
                        <span className="text-[16px] font-sans py-2">
                            {resItems.card.info.name}
                        </span>
                        <span> - ₹{resItems.card.info.price/100 ? resItems.card.info.price/100 : resItems.card.info.defaultPrice/100}</span>
                        <div className="text-sm font-light">
                            <p>{resItems.card.info.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12 relative">
                        <button className="absolute right-12 top-[-8] p-1 border border-green-400 rounded-md text-sm bg-black text-white" onClick={() => handleclick(resItems)}>Add +</button>
                        <img className="px-2 rounded-xl" src={CDN_URL+resItems.card.info.imageId}/>
                     
                    </div>
                </div>
                </div>)}
        </div>
    )
}

export default ItemList;