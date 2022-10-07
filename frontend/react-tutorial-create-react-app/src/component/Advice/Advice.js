import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './Advice.css';


function Advice() {
  const [advice, setAdvice] = useState('');
  const [advices, setAdvices] = useState([]);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice', {
      mode: 'no-cors'})
      .then((response) => {
        const { advice } = response.data.slip;
        //console.log(advice);
        setAdvice(advice)
      }).catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log('advice init once...');
    fetchAdvice();
  }, []);

  useEffect(() => {
    console.log('advice change, update advices:', advice)
    if(advice) {
      setAdvices([...advices, advice]);
    }
  }, [advice]);

  console.log('advice:', advice, '; advices:', advices);

  
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>Give Me Advice!</span>
        </button>
      </div>
    </div>
    
  );
}

export default Advice;