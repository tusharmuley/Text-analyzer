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
    props.showAlertMsg("converted in uppercase", 'success')
  };

  const convertToLowercase = () => {
    console.log('lowercase clicked', { text });
    const lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlertMsg("converted in lowercase", 'success')
  };

  const convertClearText = () => {
    // console.log('lowercase clicked', { text });
    if (text.length === 0){
      props.showAlertMsg("empty text found", 'warning')
      return
    }
    const clearText = "";
    setText(clearText);
    props.showAlertMsg("clear the text successfully", 'success')
  };

  const copyText = () =>{
    navigator.clipboard.writeText(text);
    // alert("Copied the text: "+text)
    props.showAlertMsg("successfully copied the text", 'success')
  };

  const handleExtraSpaces = () => {
    const text = document.getElementById('mytext').value;
    setText(
        text
            .split('\n') // Newline ke basis pe split karo
            .map(line => line.trim().replace(/\s+/g, ' ')) // Har line ke andar ke extra spaces ko remove karo
            .join('\n') // Wapas newline ke saath join karo
    );
    props.showAlertMsg("Removed the extra spaces from text.", 'success')
};

  // New function to count words properly
  const getWordCount = (text) => {
    const cleanedText = text.trim().replace(/\s+/g, ' ');
    if (!cleanedText) return 0;
    return cleanedText.split(' ').length;
  };

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="form-group">
          <textarea className="form-control border-primary shadow-sm focus-ring" value={text} onChange={inputOnChange} rows="8" id="mytext" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}}></textarea>
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
        <button type="button" className="btn btn-primary m-2" onClick={copyText}>Copy Text</button>
        <button type="button" className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Text Summary</h1>
        <p>
          {getWordCount(text)} words and {text.length} characters
        </p>
        <p>{(0.08 * getWordCount(text)).toFixed(2)} sec will take to read.</p>
        <h2>Preview</h2>
        <p>{text.length >0?text:'Write something to preview here'}</p>
      </div>
    </>
  );
};