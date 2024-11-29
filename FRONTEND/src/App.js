import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import FileUpload from './components/FileUpload';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <Chat/>
        <FileUpload /> </div>
    </Router>
  );
}

export default App;
