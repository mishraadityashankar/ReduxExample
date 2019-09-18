import React from 'react';
import logo from './logo.svg';
import './App.css';
import './componenets/ShowList'
import ShowList from './componenets/ShowList';
import AddItem from './componenets/AddItem';

function App() {
  return (
    <div className="App">
      <AddItem></AddItem>
      <ShowList></ShowList>
      
    </div>
  );
}

export default App;
