import React from "react";
import './features.css'

const style = {
  feature : {
    background: '#ec6408', 
    borderRadius: '50%' 
  },
  background : {
    backgroundColor : "white"
  }
}
export const Features = (props) => {
  return (
    <div style={style.background} id="features" className="text-center">
      <div  className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row" >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4">
                  {" "}
                  <i style={style.feature} className={d.icon}></i>
                  <h3>{d.title}</h3>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
