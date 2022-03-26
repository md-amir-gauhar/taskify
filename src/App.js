import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './compoenets/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
