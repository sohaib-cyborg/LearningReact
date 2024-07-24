import {useRouteError} from "react-router-dom";

const Error=()=>{
 const data = useRouteError();   
return(
<div className="ErrorText">
<h1>Oops Something went wrong!</h1>
<h2>{data.status}</h2>
<h2>{data.statusText}</h2>
</div>
);
}
export default Error;