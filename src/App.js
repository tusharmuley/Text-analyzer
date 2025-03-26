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

  return (
    <div>
      {/* Props pass kar rahe hain */}
      <Navbar brand="Text Analyzer" links={links} />
      <TextForm heading="Enter the text to analyze"/>
      {/* <About></About> */}
    </div>
  );
}

export default App;
