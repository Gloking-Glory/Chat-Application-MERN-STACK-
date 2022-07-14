import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/website/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Register />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/dashboard" element={ <Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
