import { useSelector } from "react-redux";
import ItemList from "../components/ItemList";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.item);
    return(
        <div className="text-center">
            <h1 className="font-extrabold text-lg">Cart</h1>
        {cartItems?.length==0 && (<h1>Cart is empty!!! 
        Please add items</h1>) }
        <div className="w-6/12">
         <ItemList itemData={cartItems}/>
        </div>
        </div>
    )
}
export default Cart;