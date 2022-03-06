import React from "react";
import Image from "./Image";
import card from "../Images/ace-card.png"

export default function CardTable() {
    return (
        <>
        <h1>BlackJack</h1>
        <div className="card-table">
            <div className="dealer-hand">
               <div className="first-hand"> 
              <Image isSelected={true} img={card} className="card-slot"/> 
              <Image isSelected={true} img={card} className="card-slot"/>
              </div> 
              <Image isSelected={true} img={card} className="card-slot"/>
              <Image isSelected={true} img={card} className="card-slot"/>
            </div>
         <div className="user-hand">
             <div className="first-hand"> 
             <Image isSelected={true} img={card} className="card-slot"/> 
             <Image isSelected={true} img={card} className="card-slot"/>
              </div> 
             <Image isSelected={true} img={card} className="card-slot"/>
             <Image isSelected={true} img={card} className="card-slot"/>    
         </div>
         
        </div>
        </>
    )
}