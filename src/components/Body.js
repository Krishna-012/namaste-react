import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    //local state variable
    const [listOfRestaurants, setListOfReastaurant] = useState([]);
    const [filteredRestaurant, setFilterdRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    // console.log("body renderd");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9052013&lng=77.6865383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //optional chaining
        setListOfReastaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // conditional rendering

    return listOfRestaurants.length ===0? (<Shimmer />) :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        const filtereRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterdRestaurant(filtereRestaurant);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => 
                    res.info.avgRating > 4
                    );
                   setFilterdRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
            </div>
        </div>
    )
}

export default Body;