import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

const textos = { color: "violet" };
const info = { textAlign: "left", fontSize: "24px" };
const image = { borderRadius: "10px", border: "2px solid darkslateblue" };
const divPrincipal = {
  color: "white",
  display: "flex",
  justifyContent: "space-around",
  width: "80%",
  margin: "auto",
  marginTop: "75px",
};
const styleButton = {
  fontSize: "20px",
  width: "110px",
  height: "70px",
  margin:" 100px",
  padding:" 5px 20px",
  border:" 3px solid palevioletred",
  borderradius: "10px",
  backgroundcolor: "pink",
  color: "rgb(240, 123, 240)",
  cursor: "pointer",
};
export default function Detail() {

    const {detailId} = useParams();
    const [character, setCharacter]= useState({
        name:'',
        status:'',
        specie:'' ,
        gender:'',
        origin:'',
        image:'',
    })
    const navigate= useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name:char.name,
            status:char.status,
            specie:char.specie,
            gender:char.gender,
            origin:char.origin.name,
            image:char.image,
        });
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        alert("No hay personajes con ese ID");
      });
  }, [detailId]);
  return (
    <div>
      <div style={divPrincipal}>
        <div style={info}>
          {character.name && (<p>
            <b style={textos}>Name:</b>
            {character.name}
          </p>)}
          {character.status && (<p>
            <b style={textos}>Status:</b>
            {character.status}
          </p>)}
          {character.specie && (<p>
            <b style={textos}>Specie:</b>
            {character.specie}
          </p>)}
          {character.gender && (<p>
            <b style={textos}>Gender:</b>
            {character.gender}
          </p>)}
          {character.origin && (<p>
            <b style={textos}>Origin:</b>
            {character.origin}
          </p>)}
        </div>
        <img style={image} src={character.image} />
      </div>
      <button style={styleButton} onClick={()=> navigate('/home')}>Back to Home</button>
    </div>
  );
}
