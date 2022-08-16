import React from "react";
import "./More.scss";

const More = ({ languages, habilities }) => {
  return (
    <div className="more card">

      <div className="card">
        <div key={languages.language}>
          <p><b>{languages.language}</b></p>
          <p>{languages.wrlevel}</p>
          <p>{languages.splevel}</p>
        </div>
      </div>



      <div className="card">
        {habilities.map((item)=>{
          return(
            <div key={JSON.stringify(item)}>
              <p>{item}</p>
            </div>
          )
        })}
      </div>



    </div>
  );
};

export default More