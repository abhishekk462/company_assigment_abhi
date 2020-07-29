import React from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './Components/SearchBar/SearchBar'

library.add(fab, faCheckSquare, faCoffee)


function App() {
  return (
    <div className="App">
    Hello
    <SearchBar/>
    </div>
  );
}

export default App;
