import RestaurantCard from "./RestaurantCard";
import { useState, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const {listOfRestaurants, filteredRestaurants, setFilteredRestaurants} = useListOfRestaurants();
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    if(onlineStatus ===  false) 
    return (
    <h1>Looks like you are offline!! please check your internet connection</h1>
    );

    const {loggedInUser, setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="flex">
                <div className="p-4">
                <input
                    data-testid="SearchInput"
                    type="text" 
                    className="border border-solid border-black rounded-lg" 
                    value={searchText} 
                    onChange={(e) => {
                    setSearchText(e.target.value);
                   // console.log(searchText);
                    }}
                />
                <button className="p-2 m-2 bg-green-200 rounded-lg hover:bg-green-300" onClick={() => {
                    const filterSearchRestaurants = listOfRestaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filterSearchRestaurants);
                }}>Search</button>
                </div>
                <div className="flex items-center">
                <button className="p-2 bg-green-200 rounded-lg  hover:bg-green-300"onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.3);
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
                </div>
                <div className="flex items-center">
                    <label className="mx-2">User Name :</label>
                    <input 
                        className="border border-black" 
                        value={loggedInUser} 
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant => 
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>))}
            </div>
        </div>
    )
 }

export default Body;