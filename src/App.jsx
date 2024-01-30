import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./Components/Navbar/NavBar";
import ItemListContainer  from "./Components/ItemContainer/ItemListContainer";


const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting = {'Bienvenidos a mi tienda'}/>
        </>
    );
};

export default App;
