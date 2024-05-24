import './App.css'
import Header from './header'
import Footer from './footer'
import Home from './home'
import Register from './register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameLogin from './GameModalHandlerComponent/GameLogin'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
