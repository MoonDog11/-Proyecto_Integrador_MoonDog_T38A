import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div class="container" className={style.nav}>
      

      
      <SearchBar onSearch={onSearch} />


      <Link to="/home">
        <button  className={style.btn}>Home</button>
      </Link>

      <NavLink to="/about">
        <button className={style.btn}>About</button>
      </NavLink>

      <NavLink to='/favorites'>
        <button className={style.btn}>Favorites</button>
      </NavLink>

    </div>
  );
};

export default NavBar;