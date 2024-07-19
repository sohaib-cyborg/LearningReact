import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body = () => {
  const [resList, setresList] = useState([]);
  const [searchRes,setsearchRes] = useState("");
  const [filteredList,setfilteredList] = useState([]);

  useEffect(()=>{
   fetchData();
  },[]);

  const fetchData = async()=>{
    const Data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    console.log(Data);
    const json = await Data.json();
    setresList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return resList.length===0? (<Shimmer/>):(
    <div className="Body-Container">
      <div className="Body-header">
      <div className="Search">
     <input type="text" placeholder="Search" value={searchRes}
     onChange={(e)=>{setsearchRes(e.target.value)}}
     />
     <button
     onClick={
   ()=>{
    const data = resList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchRes.toLowerCase()));
    setfilteredList(data);    
  }
     }
     >Search</button>
      </div>
      <div className="Filter">
        <button
          className="FilterName"
          onClick={() => {
            const filteredList = resList.filter((res) => res.info.avgRating >= 4.5);
            setresList(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      </div>
      <div className="resContainer">
        {filteredList.map((restaurant) => (
          <Rescard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
