import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Modal from './components/Modal';
import { useModal } from './context/modal-context';
import TodoDetail from './components/TodoDetail';
import { useState } from 'react';


function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const { isOpen } = useModal()
  return (
    <Router>
      {isOpen && <Modal />}
      <Header searchQuery={searchQuery} handleChange={handleChange} />
      <div className="app">
        <Routes>
          <Route path='/' element={<Home searchQuery={searchQuery} />} />
          <Route path='/todo/:Id' element={<TodoDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
