import Rescard from "./Rescard";
import resObj from "../../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resList, setresList] = useState(resObj);
  return (
    <div className="Body-Container">
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
      <div className="resContainer">
        {resList.map((restaurant) => (
          <Rescard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
