import React, { useState } from "react";
import "./HomeStyles.css";

function Home(){

   const [left,setLeft]=useState(60);
   const [top,setTop]=useState(0);
    return(
        <div className="container">
         <div className="box">
         <div className="horizontal">
            <button onClick={()=>{setTop(top-50);}} className="hsize" disabled={top===0 &&"false"}>Up</button>
         </div>
         <div className="dice" style={{
                         top:`${top}px`,
                        left: `${left}px`,
                    }}></div>
         <div className="vertical">
            <button onClick={()=>{setLeft(left-50);}} className="vsize" disabled={left===60 &&"false"}>Left</button>
            <button onClick={()=>{setLeft(left+50);}} className="vsize" disabled={left===510 &&"false"}>Right</button>
         </div>
         <div className="horizontal2">
            <button onClick={()=>{setTop(top+50);}} className="hsize" disabled={top===450 &&"false"}>Down</button>
         </div>
         </div>
        </div>
        
    );

}
export default Home;