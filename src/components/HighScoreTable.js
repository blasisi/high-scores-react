import React, { useState } from "react";
import HighScoreTable from './data/scores';
import allCountryScores from "data/allCountryScores"
function sortName = (index) => {
index.sort((a,b)=>{
      if (a.name < b.name){
          return -1;
      }
      return 1;
});
}

 
function HighScoreTable =() => {
    sortName(allCountryScores)
    const [order, setOrder] = useState(allCountryScores);

}









export default HighScoreTable;

