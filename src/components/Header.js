import { LOGO_URL } from "../utils/constant";
import { useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";


const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);


    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between bg-slate-200 shadow-lg">
            <div className="p-4">
                <img className="w-16 rounded-full" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4 hover:bg-slate-300 hover:rounded-lg">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 hover:bg-slate-300 hover:rounded-lg">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4  hover:bg-slate-300 hover:rounded-lg">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4  hover:bg-slate-300 hover:rounded-lg">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4  hover:bg-slate-300 hover:rounded-lg"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <button className="px-4 hover:bg-slate-300 hover:rounded-lg" onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout")
                        : setbtnNameReact("Login");
                    }}>{btnNameReact}</button>
                     <li className="px-4  bg-slate-300 rounded-lg">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;