import { useState } from "react";
import ItemList from "./ItemList";

const ResCat=({data,itemShow,showItemhandle})=>{
    console.log("hello");
    const handleClick=()=>{
     showItemhandle();
    }
    return(
    <div className="w-6/12  mx-auto bg-gray-200 shadow-xl p-4">
    <div className="flex justify-between p-2 cursor-pointer" onClick={handleClick}>
    <span className="font-bold text-xl">{data.title}-({data?.itemCards?.length})</span>
    <span>⬇️</span>
    </div>
    { itemShow && <ItemList itemData={data?.itemCards}/>}
    </div>
    );
}
export default ResCat;
