import React from "react";
import Colfour from "./Colfour";
import Colone from "./Colone";
import Colthree from "./Colthree";
import Coltwo from "./Coltwo";
import './Style.css';
function App(){
return(
<div>
  <div><h1>Welcome to My Lists</h1></div>
  <div className="stacks">
  <Colone></Colone>
  <Coltwo></Coltwo>
  <Colthree></Colthree>
  <Colfour></Colfour>
</div>
</div>


)
}
export default App;