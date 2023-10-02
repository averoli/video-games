import { useState, useEffect } from "react";

const Favorite = () => {
 

   useEffect(() => {
  console.log(localStorage);
   }, []);
 
 
 

  return <div>Favorite</div>;
};

export default Favorite;
