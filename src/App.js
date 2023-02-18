import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import  Form from "./components/Form/Form.jsx";
function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = "ejemplo@gmail.com";
  const password = "1234";
  
  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  function logout() {
    setAccess(false);
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

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
  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }

  const location = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
         {location.pathname !== "/" && (
        <Nav onSearch={onSearch} random={random} logout={logout} />
      )}

      <Routes>
        <Route exact path="/" element={<Form login={login} />}></Route>
        <Route exact path="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
        <Route exact path="/about" element={<About />} ></Route>
        <Route exact path="/favorites" element={<Favorites />}></Route>
        <Route exact path="/detail/:detailId" element={<Detail />} ></Route>
        <Route exact path='*' element={<Error />} ></Route>
      </Routes>
      {/* <></> */}
    </div>
  );
}

export default App;
