import { useState } from "react";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje Repetido, prueba otro ID.");
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }
  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} random={random} />
      <Routes>
        <Route exact path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
      {/* <></> */}
    </div>
  );
}

export default App;
