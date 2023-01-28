import Card from "./Card";
import styled from "styled-components"

const DivCards = styled.div`
  display:flex;
  justify-content: space-evenly; 
`;
export default function Cards(props) {
  const { characters } = props;
  let i = 0;
  return (
    <DivCards>
      {characters.map((e) => (
        <Card
          name={e.name}
          species={e.species}
          gender={e.gender}
          image={e.image}
          onClose={() => alert('Emulamos que se cierra la card')}
          key={i++}
        />
      ))}
    </DivCards>
  );
}
