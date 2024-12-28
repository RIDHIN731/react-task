import React, { useState } from 'react';

function LiveTextDisplay() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <label htmlFor="userInput" style={{ display: 'block', marginBottom: '10px' }}>
        Enter text:
      </label>
      <input
        id="userInput"
        type="text"
        value={text}
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '16px', width: '100%' }}
      />
      <p style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>You typed: {text}</p>
    </div>
  );
}

export default LiveTextDisplay;
