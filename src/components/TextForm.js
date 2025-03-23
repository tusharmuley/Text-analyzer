import React, { useState } from 'react';

export const TextForm = (props) => {
  const [text, setText] = useState('');

  const inputOnChange = (event) => {
    console.log('text', event.target.value);
    setText(event.target.value);
  };

  const convertToUppercase = () => {
    console.log('uppercase clicked', { text });
    const upperText = text.toUpperCase();
    setText(upperText);
  };

  const convertToLowercase = () => {
    console.log('lowercase clicked', { text });
    const lowerText = text.toLowerCase();
    setText(lowerText);
  };

  const convertClearText = () => {
    // console.log('lowercase clicked', { text });
    const lowerText = "";
    setText(lowerText);
  };

  // New function to count words properly
  const getWordCount = (text) => {
    // Trim the text and replace multiple spaces with single space
    const cleanedText = text.trim().replace(/\s+/g, ' ');
    // If text is empty, return 0
    if (!cleanedText) return 0;
    // Split by single space and count
    return cleanedText.split(' ').length;
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea className="form-control border-primary shadow-sm focus-ring" value={text} onChange={inputOnChange} rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary m-2 m" onClick={convertToUppercase}>
          Convert to UPPERCASE{' '}
        </button>
        <button type="button" className="btn btn-primary m-2" onClick={convertToLowercase}>
          Convert to lowercase
        </button>
        <button type="button" className="btn btn-primary m-2" onClick={convertClearText}>
          Clear Text
        </button>
      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>
          {getWordCount(text)} words and {text.length} characters
        </p>
        <p>{(0.008 * getWordCount(text)).toFixed(2)} sec will take to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};