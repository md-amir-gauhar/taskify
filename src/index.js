import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ModalProvider } from './context/modal-context';
import { TodoProvider } from './context/TodoContext';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ModalProvider>
  </React.StrictMode >,
  document.getElementById('root')
);
