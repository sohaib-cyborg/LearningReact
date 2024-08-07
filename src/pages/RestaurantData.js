import { useEffect,useState } from "react";
import Shimmer from "../components/Shimmer";
//import { Menu_Url } from "../../utils/constants";
import { useParams } from "react-router-dom";
import useRestData from "../../utils/useRestData";
import ResCat from "../components/ResCat";




const Resdata=()=>{
    //const [restData,setrestData]=useState(null);
    const {resid} =useParams();
    const restData= useRestData(resid);
    const [Index,setIndex] = useState(null);
    
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
 
 const {name,costForTwoMessage,cuisines} = restData?.cards[2]?.card?.card?.info;
 //const {itemCards} = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 const itemCategories = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return(
  <div className="ResInfo text-center">
    <h1 className="font-extrabold text-lg py-10">{name}</h1>
    <p className="font-semibold">{costForTwoMessage} - {cuisines.join(", ")}</p>
   
    {itemCategories.map((item,index)=>(
      <div key={item?.card?.card?.title} className="py-2">
      <ResCat  data={item.card?.card} itemShow={Index===index? true:false } showItemhandle={()=>setIndex(prevIndex => (prevIndex === index ? null : index))}/>
      </div>
    )
    )}
 
  </div>
    );
}
export default Resdata;