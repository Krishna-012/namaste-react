import RestaurantCard from "./RestaurantCard";
import { useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

    const {listOfRestaurants, filteredRestaurants, setFilteredRestaurants} = useListOfRestaurants();
    const [searchText, setSearcText] = useState("");

    const onlineStatus = useOnlineStatus();

    if(onlineStatus ===  false) 
    return (
    <h1>Looks like you are offline!! please check your internet connection</h1>
    );

    return listOfRestaurants.length === 0 ? (<Shimmer />) :(
        <div className="body">
            <div className="filter">
                <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearcText(e.target.value);
                   // console.log(searchText);
                }}/>
                <button onClick={() => {
                    const filterSearchRestaurants = listOfRestaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filterSearchRestaurants);
                }}>Search</button>
                </div>
                <button className="filter-btn"onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.3);
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant => 
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>))}
            </div>
        </div>
    )
 }

export default Body;