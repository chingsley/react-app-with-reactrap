import React from 'react';
import { Button } from 'reactstrap';
import NavBar from './components/NavBar';
import CardCollection from './components/CardCollection';
import TitleSection from './components/TitleSection';
import ButtonCollection from './components/ButtonCollection';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TitleSection />
      <CardCollection />
      <ButtonCollection />
    </div>
  );
}

export default App;
