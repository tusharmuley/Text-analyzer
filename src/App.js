import './App.css';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';

function App() {
  const links = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <div>
      {/* Props pass kar rahe hain */}
      <Navbar brand="MyApp" links={links} />
      <TextForm heading="Enter the text to analyze"/>
    </div>
  );
}

export default App;
