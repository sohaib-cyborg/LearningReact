import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnline";
const Header=()=>{
    const checkStat = useOnlineStatus();
    
    return(
<div className="header flex items-center justify-between bg-yellow-500 shadow-xl">
   <div className="header-logo" >  
   <img 
   className="logo w-[20%]"
   src="https://st2.depositphotos.com/3867453/5508/v/600/depositphotos_55081557-stock-illustration-food-word-sign-logo-icon.jpg"
   />
   </div>
 <div className="header-items flex items-center">
    <ul className="flex items-center gap-5 px-5 m-2">
        <li className="px-2">Online: {checkStat? "🟢":"🔴"}</li>
        <li className="px-2"><Link to={"/"}>Home</Link></li>
    <li className="px-2"><Link to={"/about"}>about us</Link></li>
    <li className="px-2"><Link to={"/grocery"}>Grocery</Link></li>
        <li className="px-2">contact us</li>
        <li className="px-2"><Link to={"/cart"}>Cart</Link></li>
    </ul>
 </div>
   </div>
    );
}
export default Header;