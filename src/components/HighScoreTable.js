import React, { useState } from "react";
import Header from "./Header";

const  HighScoreTable = (props) => {


    const sortDec = props.scores.sort((a, b) => {
        //return value positive
        if (a.s < b.s) {
          return +1;
        } else if (a.s > b.s) {
          return -1;
        } else {
          return 0;
        }
      });

return (
  <div>
    <Header country={props.name} />
    <table className="box">
        {sortDec.map(score => <tr> 
            <td>{score.n}</td>
            <td>{score.s}</td>
                 </tr>
        )}   
    </table>
  </div>
)
}

export default HighScoreTable;
