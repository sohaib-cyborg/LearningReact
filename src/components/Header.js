import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnline";
const Header=()=>{
    const checkStat = useOnlineStatus();
    
    return(
<div className="header">
   <div className="header-logo">  
   <img 
   className="logo"
   src="https://st2.depositphotos.com/3867453/5508/v/600/depositphotos_55081557-stock-illustration-food-word-sign-logo-icon.jpg"
   />
   </div>
 <div className="header-items">
    <ul>
        <li>Online: {checkStat? "🟢":"🔴"}</li>
        <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/about"}>about us</Link></li>
    <li><Link to={"/grocery"}>Grocery</Link></li>
        <li>contact us</li>
        <li>Cart</li>
    </ul>
 </div>
   </div>
    );
}
export default Header;