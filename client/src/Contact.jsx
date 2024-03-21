"use client";
import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FullName: ", fullName);
    console.log("Email: ", email);
    console.log("Phone:", phone);
    console.log("Subject: ", subject);
    axios
      .post("http://localhost:3007/comment", {
        fullName,
        email,
        phone,
        subject,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="contact">
      <Navbar />
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Contact</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="First Name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Coco"
                      autoComplete="off"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="coco22@gmail.com"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Phone
                    </label>
                    <input
                      type="PhoneNo"
                      className="form-control"
                      id="email"
                      placeholder="9833674797"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{}}>
                      <h5>Subject</h5>
                    </label>{" "}
                    <br />
                    <textarea
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className=""
                      id="message"
                      style={{ width: 510, height: 100 }}
                      placeholder="Write here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success w-100 bg-dark"
                  >
                    SEND
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
