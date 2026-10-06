import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<div className="page-placeholder">Booking Page</div>} />
        <Route path="/drivers" element={<div className="page-placeholder">Drivers Page</div>} />
        <Route path="/login" element={<div className="page-placeholder">Login Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
