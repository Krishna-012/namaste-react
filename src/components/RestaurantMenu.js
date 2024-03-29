import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    //console.log(resId);
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer />

    const{name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl m-2">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex((prevIndex) => prevIndex === index ? null : index)}/>)}
        </div>
    );
};

export default RestaurantMenu;