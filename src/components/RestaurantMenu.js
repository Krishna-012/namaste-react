import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const[resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    console.log(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9052013&lng=77.6865383&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if(resInfo === null) return <Shimmer />

    const{name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const itemCardsBefore = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
    const itemCardsAfter = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;

    console.log("Before OR operator:", itemCardsBefore);
    console.log("After OR operator:", itemCardsAfter);

    // console.log("Before OR operator:", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    // console.log("After OR operator:", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {(itemCardsBefore || itemCardsAfter)?.map((resList) => 
                    (<li key={resList?.card?.info?.id}>{resList?.card?.info?.name} - {"₹"}{resList?.card?.info?.price/100 || resList?.card?.info?.defaultPrice/100}</li>
                ))};
            </ul>
        </div>
    );
};

export default RestaurantMenu;