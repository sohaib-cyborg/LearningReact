import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
   const [onlineStat,setOnlineStat] = useState(true);
   useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOnlineStat(false);
    });
    window.addEventListener("offline",()=>{
        setOnlineStat(false);
    })
   },[]);
    return onlineStat
}
export default useOnlineStatus;