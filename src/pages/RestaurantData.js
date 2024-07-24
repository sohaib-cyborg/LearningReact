import { useEffect,useState } from "react";
import Shimmer from "../components/Shimmer";
//import { Menu_Url } from "../../utils/constants";
import { useParams } from "react-router-dom";
import useRestData from "../../utils/useRestData";
import useOnlineStatus from "../../utils/useOnline";




const Resdata=()=>{
    //const [restData,setrestData]=useState(null);
    const {resid} =useParams();
    const restData= useRestData(resid);
    
   // console.log(resdata);
   // useEffect(()=>{
   // fetchData();
   // },[]); 
   // const fetchData=async()=>{
    //    const data = await fetch(Menu_Url+resdata);
    //    const json = await data.json();
    //    console.log(json);        
     //   setrestData(json.data);   

     
 if(restData === null)return <Shimmer/>;
 
 const {text} = restData?.cards[0]?.card?.card;
 const {itemCards} = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);
    return(
  <div className="ResInfo">
    <h1>{text}</h1>
    <h1>Menu</h1>
    <ul>
     {itemCards.map((item)=>( <li>{item.card.info.name}</li>))}      
    </ul>  
 
  </div>
    );
}
export default Resdata;