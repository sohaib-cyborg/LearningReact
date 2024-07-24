import { useEffect, useState } from "react";
import { Menu_Url } from "./constants";

const useRestData=(restID)=>{
const [resInfo,setResInfo]=useState(null);
useEffect(()=>{
    fetchData();
    
},[]); //call once fetch data

const fetchData=async()=>{
const data = await fetch(Menu_Url + restID);
const json = await data.json();
setResInfo(json.data);
}
return resInfo;
}
export default useRestData;