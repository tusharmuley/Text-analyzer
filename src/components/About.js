import React from 'react';

export default function About(props) {
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#042743'
  };

  return (
    <div className='container py-2' style={myStyle}>
      <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panel1" aria-expanded="true" aria-controls="panel1">
              Analyze Your text
            </button>
          </h2>
          <div id="panel1" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panel2" aria-expanded="false" aria-controls="panel2">
              Free to use
            </button>
          </h2>
          <div id="panel2" className="accordion-collapse collapse">
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. It is suitable for writing text with word/character limits.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panel3" aria-expanded="false" aria-controls="panel3">
              Browser Compatible
            </button>
          </h2>
          <div id="panel3" className="accordion-collapse collapse">
            <div className="accordion-body">
              This word counter software works in any web browsers like Chrome, Firefox, Internet Explorer, Safari, Opera. Perfect for Facebook, blogs, books, documents, etc.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
