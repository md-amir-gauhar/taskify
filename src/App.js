import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Modal from './components/Modal';
import { useModal } from './context/modal-context';
import TodoDetail from './components/TodoDetail';


function App() {
  const { isOpen } = useModal()
  return (
    <Router>
      {isOpen && <Modal />}
      <Header />
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo/:Id' element={<TodoDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
