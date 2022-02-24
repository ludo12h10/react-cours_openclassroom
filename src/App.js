import logo from './assets/logo.png'
import './App.css';
import Banner from "./composants/Banner";
import React from "react";
import ShoppingList from "./composants/ShoppingList";
import Cart from './composants/Cart';

import QuestionForm from "./composants/QuestionForm";

function App() {
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart />
                <ShoppingList />
            </div>
        </div>
    )
}

export default App;
