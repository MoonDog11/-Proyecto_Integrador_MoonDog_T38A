import style from './SearchBar.module.css'
import { useState } from 'react';
import logo from "../asets/BG_searchBar_RM_5.svg";



const SearchBar = ({onSearch}) => {
  const [id, setId] = useState('');

  const handleChange = (event) => {
     setId(event.target.value)
  };

  return (
     <div className={style.contenedor}>
         <img src={logo} alt="Logo" /> {/* agregar la imagen del logo */}
        <input type='search' onChange={handleChange} value={id}/> 
        <button onClick={()=> {onSearch(id)}}>Search</button> 
     </div>
  );
};

export default SearchBar;

