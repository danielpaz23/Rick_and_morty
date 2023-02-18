import SearchBar from "../SearchBar/SearchBar.jsx";
import style from './Nav.module.css';
import React from "react";
import { Link} from "react-router-dom";
export default function Nav(props){
    return(
        <nav>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92fd94ce-597b-471f-bb2f-3f6de15b60e4/db72d4x-3d279db0-5e34-430a-a76e-b58b095617d5.png/v1/fill/w_1024,h_906,strp/rick_and_morty_png_by_lalingla_db72d4x-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA2IiwicGF0aCI6IlwvZlwvOTJmZDk0Y2UtNTk3Yi00NzFmLWJiMmYtM2Y2ZGUxNWI2MGU0XC9kYjcyZDR4LTNkMjc5ZGIwLTVlMzQtNDMwYS1hNzZlLWI1OGIwOTU2MTdkNS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GtHOsdm2EVwgeP-866LIoq1P2e8gDb5taaKBjtUcazA" alt="Rick" width='30%' />
            <div>
            <Link to="/home" className={style.links}>Home</Link>
            <Link to="/favorites" className={style.links}>Favorites</Link>
            <Link to="/about" className={style.links}>About</Link>
            <button className={style.links} onClick={props.logout}>LogOut</button>
            </div>
            <SearchBar onSearch = {props.onSearch} random= {props.random}/>
        </nav>
    )
}