const styleInput ={

}
const styleButton={
   margin: '',
   padding: '',
   border: '',
   borderRadius:'',
   backgroundColor:'',
   
}



export default function SearchBar(props) {
   return (
      <div>
         <input styled={styleInput} type='search' />
      <button styled={styleButton} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
