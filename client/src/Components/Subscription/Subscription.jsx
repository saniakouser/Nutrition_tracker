import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";
import img7 from "../Images/img7.jpg";
import "./subscription.css";
import { Link } from "react-router-dom";
import ChatApp from "./chatApp.jsx";
import { useState } from "react";

export default function Subscription(){

  
    return(
        <div class="container" >
        <header>
            <h1>Subscription Plans</h1>
        </header>

        <div class="pricing-table">
            <div class="plan">
                  <h2> Free 2 day Demo-plan</h2>
                  <div className="cardy">
                        <span id="NoDays"> Chat with OUR Nutrionist</span>
                        <br/>
                        <span id="price">$0</span>
                        <br/>
                        <span id="SubsDes">Explore the free guidance from our Nutrionst fo 10 minutes per day till 2 days</span>
                        <br/>
                        <br/>
                        <br/>
                       <Link to='/chatapp' className="link">Let's Chat</Link>
                    </div>
               
        </div>
    </div>
    </div>)}
   