import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";
const ItemList=({itemData})=>{
  const dispatch = useDispatch();
  const handleClick=(item)=>{
  dispatch(addItem(item));
  }
 return(
<div>
    {itemData.map((item)=>(
        <div className="flex justify-between text-left px-2 py-2 border-b-2 border-gray-300" 
        key={item?.card?.info?.name}>
      <div className="w-8/12">
       <span className="py-1 font-semibold">{item?.card?.info?.name}</span>
       <span className="py-1 font-semibold"> Rs:{item?.card?.info?.defaultPrice/100?(item?.card?.info?.defaultPrice/100):(item?.card?.info?.finalPrice/100||item?.card?.info?.price/100)} </span>
       <p  className="text-sm text-gray-600 px-1 py-2">{item?.card?.info?.description}</p>
       </div>
       <div className="w-3/12">
       <div className="absolute p-2">
        <button 
        onClick={()=>handleClick(item)}
        className="w-12 rounded-lg bg-black text-white cursor-pointer shadow-xl">ADD</button>
       </div>
         <img className="w-full h-32 object-cover"
          src={CDN_URL+item?.card?.info?.imageId}

         />
         </div>  
       </div>
    ))}
</div>
 );
}

export default ItemList;