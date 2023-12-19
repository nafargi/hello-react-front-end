// src/Greetings.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setRandomGreeting, selectRandomGreeting } from './store/greetingsSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector(selectRandomGreeting);

  useEffect(() => {
    const fetchRandomGreeting = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/greetings/random');
        dispatch(setRandomGreeting(response.data.greeting));
      } catch (error) {
        console.error('Error fetching random greeting:', error);
      }
    };

    fetchRandomGreeting();
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default Greetings;
