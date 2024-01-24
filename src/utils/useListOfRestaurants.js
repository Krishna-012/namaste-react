import { useEffect, useState} from "react";
import { RESTAURANTS_API } from "./constant";

const useListOfRestaurants = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchedApi();
    }, []);

    const fetchedApi = async() => {
        try{
            const data = await fetch(RESTAURANTS_API);
            const json = await data.json();
            console.log(json);
            setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Error fetching Restaurants List:", error);
        }
    }

    return {listOfRestaurants, filteredRestaurants, setFilteredRestaurants, setListOfRestaurants};
}

export default useListOfRestaurants;