import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions.js";

const NameStyle = styled.h2`
  position: relative;
  bottom: 0px;
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const DivStyle = styled.div`
  display: inline-block;
  margin-top: 10px;
  font-size: 20px;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 15px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const DivCards = styled.div`
  display: inline-block;
  background-color: grey;
  border-radius: 10px;
  // overflow: hidden;
  margin: 25px 0px;
`;
const Button1 = styled.button`
  position: relative;
  font-weight: bold;
  font-size: 20px;
  width: 35px;
  height: 35px;
  margin: 30px;
  padding: 5px 20px;
  border: 3px solid palevioletred;
  border-radius: 10px;
`;
const Button2 = styled.button`
  position: relative;
  left: 0px;
  font-weight: bold;
  font-size: 15px;
  width: 35px;
  height: 35px;
  margin: 30px;
  padding: 5px 20px;
  border: 3px solid palevioletred;
  border-radius: 10px;
`;
const Img = styled.img`
  dysplay: block;
  border-radius: 10px
`;
export function Card(props) {
  const [isFav, setIsFav] = useState(props.fav);

  useEffect(() => {
    props.myFavorites &&
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
  },);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav({
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
        id: props.id,
      });
    }
  }
  return (
    <DivCards>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      {isFav ? (
        <Button2 onClick={handleFavorite}>❤️</Button2>
      ) : (
        <Button2 onClick={handleFavorite}>🤍</Button2>
      )}
      {props.onClose && <Button1 onClick={props.onClose}>X</Button1>}
      </div>
      <Link
        to={`/detail/${props.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
       <NameStyle><h2>{props.name}</h2></NameStyle>

        
      </Link>
      <DivStyle>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </DivStyle>
      <Img src={props.image} alt="" />
    </DivCards>
  );
}
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function(personaje) {
      dispatch(addFav(personaje));
    },
    removeFav: function(id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
