import { Link } from "react-router-dom";
import Rescard, { PromotedRescard } from "./Rescard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../../utils/useOnline";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [searchRes, setsearchRes] = useState("");
  const [filteredList, setfilteredList] = useState([]);
  const Promoted = PromotedRescard(Rescard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await Data.json();
    
    const updatedarray =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
        console.log(updatedarray);
    const newarray = updatedarray.map((restaurant, index) => {
      return {
        ...restaurant,
        info: {
          ...restaurant.info,
          promoted: index % 2 ? true : false,
        },
      };
    });
  
    setresList(newarray);
    setfilteredList(newarray);
  };

  
  const onlinestate = useOnlineStatus();
  if (!onlinestate) {
    return <h1>Looks Like You are Offline! Please Check Your Connectivity!</h1>;
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body-Container">
      <div className="Body-header flex flex-wrap items-center">
        <div className="Search pl-10 m-3">
          <input
            data-testid="searchInput"
            className="p-4 m-4 border border-solid border-black w-30 h-10"
            type="text"
            placeholder="Search"
            value={searchRes}
            onChange={(e) => {
              setsearchRes(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 w-[100px] h-[40px] rounded-lg"
            onClick={() => {
              const data = resList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchRes.toLowerCase())
              );
              setfilteredList(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="Filter">
          <button
            className="bg-green-300 w-[200px] h-[40px] rounded-lg"
            onClick={() => {
              const filteredList = resList.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setfilteredList(filteredList);
            }}
          >
            Top Rated restaurants
          </button>
        </div>
      </div>
      <div className="resContainer flex flex-wrap pl-14 py-4 gap-10 items-center justify-start">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
          {restaurant?.info?.promoted?(<Promoted resData={restaurant}/>):(<Rescard resData={restaurant}/>)}
          {/*  <Rescard resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
