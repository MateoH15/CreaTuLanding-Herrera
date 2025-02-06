import React from 'react';
import NavBar from './components/layout/NavBar';
import ItemListContainer from './components/common/ItemListContainer/ItemListContainer';
import './App.css';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi tienda" />
    </>
  )
}

export default App
