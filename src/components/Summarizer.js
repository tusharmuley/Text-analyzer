// src/components/Summarizer.js
import React, { useState } from 'react';
import axios from 'axios';

const Summarizer = ({ mode }) => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Summarize this text:\n\n${text}`
            }
          ],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPEN_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      const result = response.data.choices[0].message.content;
      setSummary(result);
    } catch (error) {
      console.error("Error while summarizing:", error);
      setSummary("Something went wrong. Try again!");
    }
    setLoading(false);
  };

  return (
    <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : '#042743' }}>
      <h2>AI Text Summarizer</h2>
      <textarea
        className="form-control my-2"
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to summarize"
      />
      <button className="btn btn-primary mb-3" onClick={handleSummarize} disabled={loading}>
        {loading ? 'Summarizing...' : 'Summarize Text'}
      </button>
      {summary && (
        <div className="alert alert-info">
          <strong>Summary:</strong> {summary}
        </div>
      )}
    </div>
  );
};

export default Summarizer;
