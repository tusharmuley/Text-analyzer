import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import About from './components/About';
import Summarizer from './components/Summarizer';
import { TextForm } from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const links = [
    // { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'AI Text Summarizer', url: '/summarizer' },
  ];

  const [mode, setmode] =useState('light')
  const [alertMsg, setAlertMsg] =useState(null)

  const showAlertMsg=(msg, type)=>{
    setAlertMsg({msg, type})
    
    setTimeout(() => {
      setAlertMsg(null)
    }, 1500);
  }

  const toggleMode= () =>{
    if (mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showAlertMsg("dark mode enabaled", 'success')
    }else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlertMsg('light mode enabled', 'success')
    }
  }

  return (
    <Router>
      <div>
        {/* Props pass kar rahe hain */}
        <Navbar brand="Text Analyzer" mode={mode} links={links} toggleMode={toggleMode} />
        <Alerts alerts={alertMsg}/>
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={
            <TextForm
              heading="Enter the text to Manipulate"
              mode={mode}
              showAlertMsg={showAlertMsg}
            />
          } />

          <Route path="/summarizer" element={<Summarizer mode={mode} />} />
        </Routes>
        
      </div>

    </Router>
    
  );
}

export default App;
