import "./Hero.css"
import React from 'react'
import PhotoImg from "../assets/photo-1559163179-3fd017552229.avif"
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask" >
        <img className="full" src={PhotoImg} alt="img" />
      </div>
      <div className="contant">
        <p>Take a View</p>
        <h1>React Portfolio.</h1>
        <div className="button">
          <Link to="/Project" className="btnn">Projects</Link>
          <Link to="/Contact" className="btnn-Light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
