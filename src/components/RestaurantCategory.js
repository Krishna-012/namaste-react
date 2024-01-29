import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // console.log(data)
    return (
        <div>
            <div className="bg-gray-100 shadow-lg p-2 my-3 w-6/12 mx-auto text-left">
                <div className="flex justify-between cursor-pointer" onClick={setShowIndex}>
                <span className="font-bold font-serif">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;