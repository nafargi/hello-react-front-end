// src/Greeting.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    const fetchRandomGreeting = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/greetings/random');
        setRandomGreeting(response.data.greeting);
      } catch (error) {
        console.error('Error fetching random greeting:', error);
      }
    };

    fetchRandomGreeting();
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default Greeting;
