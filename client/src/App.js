import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColStats from './components/stats/colstats';
import DbStats from './components/stats/dbstats'

function App() {
  return (
    <div className="App">
        <DbStats />
        <ColStats />
    </div>
  );
}

export default App;
