import React from "react";
import './services.css';

export const Services = (props) => {
const style = {
  text : {
    color : "black"
  },
  body : {
    backgroundColor : "white"
  },
  icon : {
    background : "#ec6408" ,
    borderRadius : "50%"
  }
}

  return (
      <div style={style.body} id="services" className="text-center">
        <div style={style.body} className="container">
          <div className="section-title">
            <h2 style={style.text}>Our Services</h2>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i style={style.icon} className={d.icon}></i>
                    <div className="service-desc">
                      <h3 style={{color: "black"}}>{d.name}</h3>
                      <p style={{color: "black"}} >{d.text}</p>
                    </div>
                  </div>
                ))
                : "loading"}
          </div>
        </div>
      </div>
  );
};
