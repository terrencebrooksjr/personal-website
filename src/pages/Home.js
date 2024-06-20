import React, { useState, useEffect } from 'react';
import '../App.css'; // Make sure to import your stylesheet

function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  
useEffect(() => {
  const texts = ['Hello', 'World']; // Define the texts array inside the useEffect callback

  let currentText = texts[textIndex];
  let currentCharIndex = 0;

  const typingInterval = setInterval(() => {
    if (currentCharIndex <= currentText.length) {
      setDisplayedText(currentText.slice(0, currentCharIndex));
      currentCharIndex++;
    } else {
      clearInterval(typingInterval);
      // Change text after a delay
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000); // Delay before switching to the next text
    }
  }, 150); // Typing speed

  return () => {
    clearInterval(typingInterval);
  };
}, [textIndex]); // Only rerun the effect if textIndex changes

  return (
    <div>
      <h1>{displayedText}<span className="wave">👋</span><span className="cursor">|</span></h1>
      <p>This is where I share my projects and blog posts.</p>
    </div>
  );
}

export default Home;
