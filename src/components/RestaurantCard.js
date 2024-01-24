import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
import userContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props; //const resData = props.resData
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = resData?.info;

    const {loggedInUser} = useContext(userContext);

    return(
        <div className="w-[200px] m-2 h-96 overflow-auto bg-gray-100 rounded-xl hover:bg-gray-200">
            <img className="w-full h-[170px] rounded-2xl shadow-xl" alt="res-logo" 
            src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold p-2">{name}</h3>
            <h4 className="pl-2">{cuisines.join(", ")}</h4>
            <h4 className="pl-2">{avgRating} stars</h4>
            <h4 className="pl-2">{costForTwo}</h4>
            <h4 className="pl-2">{sla.deliveryTime} minutes</h4>
            <h4 className="pl-2">{loggedInUser}</h4>
        </div>
    )
}

export default RestaurantCard;