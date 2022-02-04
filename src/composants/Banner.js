import React from "react";
import '../styles/banner.css'
import logo from '../assets/logo.png'

// function Banner(){
//     const title = 'La maison jungle';
//     return(
//         <div className={'lmj-banner'}>
//             <img src={logo} alt="La maison jungle" className={"lmj-logo"}/>
//             <h1 className="lmj-title">{title}</h1>
//         </div>
//     );
// }

function Banner({children}){
    return <div className='lmj-banner'>{children}</div>
}

export default Banner;