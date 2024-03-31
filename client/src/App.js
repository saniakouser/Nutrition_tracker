import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContent from '../src/Components/Home/HomeContent.jsx';
import Subscription from '../src/Components/Subscription/Subscription.jsx';
import ChatApp from './Components/Subscription/chatApp.jsx';
import Chat from './Components/Subscription/Chat.jsx';
import About from './Components/About/About.js'

function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/chatapp" element={<ChatApp />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about_us" element={<About/>} />
      </Routes>
    // </Router>
  );
}

export default App;

