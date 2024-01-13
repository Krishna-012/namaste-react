import { useEffect, useState} from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {

    const [resInfo, useResInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        useResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;