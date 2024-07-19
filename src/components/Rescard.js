import { CDN_URL } from "../../utils/constants";
const Rescard=(props)=>{
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}= resData?.info;
    const {deliveryTime} = resData?.info.sla;
    
    return(
    <div className="res-card" style={{background:"#f0f0f0"}}>
   <img className="Res-img" alt="Res-image"
    src={ CDN_URL + cloudinaryImageId}
   />
   <h3>{name}</h3>
   <h3>{cuisines.join(", ")}</h3>
   <h3>{avgRating}</h3>
   <h3>{costForTwo}</h3>
   <h3>{deliveryTime} Minutes</h3>
    </div>
    );
}
export default Rescard;