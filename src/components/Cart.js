import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    };


    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold p-4">Cart</h1>
            <button className="bg-black text-white p-2 rounded-md my-2" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is Empty. Add items to the cart</h1>}
            <div className="w-6/12 text-left m-auto bg-gray-200">
                <ItemList items={cartItems}/>
            </div>
        
        </div>
    )
}

export default Cart;