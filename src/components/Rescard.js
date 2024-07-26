import { CDN_URL } from "../../utils/constants";
const Rescard=(props)=>{
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}= resData?.info;
    const {deliveryTime} = resData?.info.sla;
    
    return(
    <div className="res-card p-4 m-4 w-[250px] h-[450px] rounded-lg bg-gray-100 hover:bg-g">
   <img className="Res-img w-[200px] h-auto object-contain" alt="Res-image"
    src={ CDN_URL + cloudinaryImageId}
   />
   <h3 className="font-bold py-2">{name}</h3>
   <h3>{cuisines.join(", ")}</h3>
   <h3>{avgRating}</h3>
   <h3>{costForTwo}</h3>
   <h3>{deliveryTime} Minutes</h3>
    </div>
    );
}
  export const PromotedRescard=(Rescard)=>{
        return (props)=>{
            
            return(
                <div>
         <label className="absolute py-2 m-2 bg-black text-white rounded-lg">promoted</label>
         <Rescard {...props}/>
         </div>
            );
        }
    }

export default Rescard;