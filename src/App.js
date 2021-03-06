import React, { Suspense, lazy } from 'react';
// import logo from './logo.svg';
import './App.css';

const Board = lazy( async () => await import('./components/Board/Board'));

//Unesessary Code Splitting as the application isn't big enough to really utilize the resourcfulness of code splitting.

const App = () => {
  return (
    <Suspense className="App" fallback={<div>Loading...</div>}>
      <div className="title">
        <h1>Task Management Board</h1>
      </div>
      <Board />
    </Suspense>
  );
}

export default App;
