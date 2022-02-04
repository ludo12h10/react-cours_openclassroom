import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function Header() {
//     return (<h1>La maison jungle</h1>)
// }
//
// function Description(){
//     const text = "Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵";
//     const emoji = "😀👏👍"
//     return (<p>{text + emoji}</p>)
// }
//
// function Banner(){
//     return(
//         <React.Fragment>
//             <Header/>
//             <Description/>
//         </React.Fragment>
//     )
// }
//
// ReactDOM.render(<Banner />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
