import React from 'react';
import './App.css';
import Header from './Header/';
import Calendar from './Calendar';
import TaskManager from './TaskManager';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <div className="app-body">
          <Calendar/>
          <TaskManager/>
        </div>
      </div>
    </div>
  );
}

export default App;
