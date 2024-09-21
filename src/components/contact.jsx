import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';

const style = {
  ContactIcon : {
    color : "#ec6408"
  },
  ContactText : {
    color : "black"
  } , 
  FormBody: {
    backgroundColor : "white"
  },
  FormFields : {
    border : "#ec6408 solid",
    borderRadius : "12px" 
  },

  ButtonHover : {
    border : "#ec6408 solid",
    borderRadius : "12px" 
  }
}
const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

  
  
    const options = {
      "subject" : `message from ${name}`,
      "recipient" : "parkezy17@gmail.com",
      "message" : `Hello My name is ${name} and I am interested about flextrips
                   plese find my email address below : ${email}`
    }
    
    axios.post('https://mailapi-production-be96.up.railway.app/send-email', options)
      .then(function (response) {
        toast.success("We received your message!");
        console.log(response);
      })
      .catch(function (error) {
        toast.error("We did not recieved messaage!");
        console.log(error);
      });
    
  };

  

  return (
    <div>
      <div id="contact">
        <div style={style.FormBody} className="text">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div style={style.ContactText} className="section-title">
                  <h2 className="text-center" style={style.ContactText} >Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we will
                    get back to you as soon as possible.
                  </p>
                </div>
                <form name="sentMessage" validate onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          style={style.FormFields}
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div  className="form-group">
                        <input 
                          style={style.FormFields }
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      style={style.FormFields}
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button  style={{backgroundColor : "ec6408"}} type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                  <Toaster/>
                </form>
              </div>
            </div>
            <div style={style.FormBody} className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3 style={style.ContactText}>Contact Info</h3>
                <p style={style.ContactText}>
                  <span style={style.ContactText}>
                    <i style={style.ContactIcon} className="fa fa-map-marker"></i> Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p style={style.ContactText}>
                  <span style={style.ContactText}>
                    <i style={style.ContactIcon} className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p style={style.ContactText}>
                  <span style={style.ContactText}>
                    <i style={style.ContactIcon} className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                
                <SocialIcon href="" url="instagram" bgColor="white" fgColor="#ec6408" />
                {" "}
                <SocialIcon href="" url="facebook" bgColor="white" fgColor="#ec6408" />
                {" "}
                <SocialIcon href="" url="linkedin" bgColor="white" fgColor="#ec6408" />
                {" "}
                <SocialIcon href="" url="youtube" bgColor="white" fgColor="#ec6408" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
