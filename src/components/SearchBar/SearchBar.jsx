import { useState } from "react";
import styled from "styled-components";
import React from "react";
// const styleInput = {

// }
const Input = styled.input`
  font-size: 20px;
  padding: 8px 20px;
  margin: 0px;
  background: papayawhip;
  border-radius: 8px;
`;
const Button = styled.button`
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 4px solid palevioletred;
  border-radius: 10px;
`;
export default function SearchBar(props) {
  const [character, setCharacter] = useState(0);
  const handleSearch = (event) => {
    let { value } = event.target;
    setCharacter(value);
  };
  return (
    <div>
      <Input type="search" onChange={handleSearch} />
      <Button onClick={() => props.onSearch(character)}>Agregar</Button>
      <Button onClick={props.random}>Random Character</Button>
    </div>
  );
}
