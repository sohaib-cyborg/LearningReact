import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart} from "../../utils/cartSlice";
const Cart=()=>{
    const dispatch = useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());
    }
    const cartItems=useSelector((store)=>store.cart.item);
    return(
        <div className="text-center">
            <h1 className="font-extrabold text-lg p-4 m-4">Cart</h1>
            <button onClick={handleClear} className="p-2 m-2 bg-black text-white rounded-lg w-20">Clear</button>
        {cartItems?.length==0 && (<h1>Cart is empty!!! 
        Please add items</h1>) }
        <div className="w-6/12 m-auto">
         <ItemList itemData={cartItems}/>
        </div>
        </div>
    )
}
export default Cart;