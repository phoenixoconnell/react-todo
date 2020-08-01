import React from 'react';
import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div>
          <header>
            <h1>My To-Do List</h1>
          </header>
        </div>
        <div>
          <Display />
        </div>
      </div>
    </div>
  );
}

export default App;
