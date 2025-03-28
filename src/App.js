import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import { TextForm } from './components/TextForm';

function App() {
  const links = [
    // { text: 'Home', url: '/' },
    // { text: 'About', url: '/about' },
    // { text: 'Contact', url: '/contact' },
  ];

  const [mode, setmode] =useState('light')

  const toggleMode= () =>{
    if (mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
    }else{
      setmode('light')
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <div>
      {/* Props pass kar rahe hain */}
      <Navbar brand="Text Analyzer" mode={mode} links={links} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      {/* <About></About> */}
    </div>
  );
}

export default App;
