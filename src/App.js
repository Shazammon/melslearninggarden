import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/partials/Navbar'
import Classes from './components/pages/Classes'
import Schedule from './components/pages/Schedule'
import TuitionCost from './components/pages/TuitionCost';
import AboutMe from './components/pages/AboutMe';
import Payment from './components/pages/Payment';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
            path="/"
            element={<Home />}
        />
        <Route 
            path="/classes"
            element={<Classes />}
        />
        <Route 
            path="/schedule"
            element={<Schedule />}
        />
        <Route 
            path="/tuition"
            element={<TuitionCost />}
        />
        <Route 
            path="/about"
            element={<AboutMe />}
        />
        <Route 
            path="/payment"
            element={<Payment />}
        />
      </Routes>
    </Router>
  );
}

export default App;
