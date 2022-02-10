import logo from './assets/logo.png'
import './App.css';
import Banner from "./composants/Banner";
import React from "react";
import ShoppingList from "./composants/ShoppingList";
import QuestionForm from "./composants/QuestionForm";

function App() {
    return (
        <React.Fragment>
            {/*<Banner/>*/}
            <Banner>
                <img src={logo} alt="la maison jungle" className='lmj-logo'/>
                <h1 className='lmj-title'> La maison jungle </h1>
            </Banner>
            <ShoppingList/>
            <QuestionForm/>
        </React.Fragment>
    );
}

export default App;
