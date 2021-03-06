import React from 'react';

import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';

import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';


function App() {
  

  return (
    <div className="app">
      <Header />

        <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
        
      

    </div>
  );
}

export default App;
