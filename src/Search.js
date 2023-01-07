import React from "react";
import Pamplet from "./Pamplet";
import './Style.css';
import { useEffect,useState } from "react";
function Search(props)
{ 
  

return(
    <div>
<h2>Results :</h2>
<div>{console.log('ko')}</div>
<div >{
    Pamplet.map((w)=>{
        var reg=new RegExp(props.z);
        var u=reg.test(w.des);
  console.log(u)
  if(u==true)
  {
    return <div className="search"><h4>Module {w.module} Tab {w.tab}</h4>{w.des}</div>
  }
       
    })
}
</div>
    </div>
)
}
export default Search;