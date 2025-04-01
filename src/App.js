import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
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
    <div>
      {/* Props pass kar rahe hain */}
      <Navbar brand="Text Analyzer" mode={mode} links={links} toggleMode={toggleMode} />
      <Alerts alerts={alertMsg}/>
      <TextForm heading="Enter the text to analyze" mode={mode} showAlertMsg={showAlertMsg}/>
      {/* <About></About> */}
    </div>
  );
}

export default App;
