import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    let [listOfRestaurants, setListOfReastaurant] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => 
                    res.info.avgRating > 4
                    );
                   console.log(setListOfReastaurant(filteredList));
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
            </div>
        </div>
    )
}

export default Body;