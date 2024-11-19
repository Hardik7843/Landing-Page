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

export const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const data = new FormData();
    
    if(formData.name && formData.email && formData.message )
    {
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);
  
      // const Sheet_Url = String(import.meta.env.SHEET_URL)
      const Sheet_Url="https://script.google.com/macros/s/AKfycbzdJyxzGGLHrhMEXpB5YAmAo2u2VhsSzH4CAeiqZl6dEN-ns_cwo1-6RFVNQscseoc7_A/exec"
      try {
        await fetch(Sheet_Url, {
          method: 'POST',
          body: data,
          muteHttpExceptions: true,
        }).then((response) => {
          if(response.status == 200)
          {
            console.log("response object", response)
            toast.success("We reciever message ✅")
          }
        }).catch((error) => {
          console.log("Error in Success from contact page",error)
          toast.error("We did not recieved message ❎");
        }) 
  
        setFormData({
          fullNameame: '',
          email: '',
          phoneNumber: '',
        });
      } 
      catch(err) {
        toast.error("We did not recieved message ❎");
      }
    }
    else {
      toast.error("Please Fill all fields correctly ❗");
    }
  
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
                <form name="sentMessage" validate onSubmit={(e) => handleSubmit(e)}>
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
