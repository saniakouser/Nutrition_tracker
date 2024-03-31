import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Home.css"
import Navbar from './Navbar';

function Home() {
  const [chatGptResponse, setChatGptResponse] = useState('');

  
  const getChatGptResponse = async () => {
    const prompt = "I want to know what foods are healthy for me.";

    try {
      const response = await axios.post('http://localhost:3001/chat', { prompt });
      setChatGptResponse(response.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="HomeContent">
      <Navbar/>
      <div className="Banner">
        <div className="container">
          <h1>
            Welcome to Nutro-Builder
          </h1>
            
          <p>you are here for out best nutrition-Guildline</p>
          <br />
          <div className="ChatGptResponse">
        <h2 style={{color:'black'}}>ChatGPT Response</h2>
        <button onClick={getChatGptResponse} style={{color:'black'}}>Get Response</button>
        <br />
        <div className="response">{chatGptResponse}</div>
      </div>
      <br />
      <br />
          <Link to='/subscription' className="link">Subscription</Link>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 Fitness Website. All Rights Reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        <p>Contact us at: info@fitnesswebsite.com</p>
      </footer>
    </div>
  );
}

export default Home;
