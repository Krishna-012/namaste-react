import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearcText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    useEffect(() => {
        fetchedApi();
    }, []);

    const fetchedApi = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9052013&lng=77.6865383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

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