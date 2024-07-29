import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />,document.getElementById("root"));


// 1st method rendering inside function 
// var count= 0;

// function increase(){
//   count ++;
//   ReactDOM.render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>,
//     document.getElementById("root")
//   );
  
// }

// function decrease(){
//   count --;
//   ReactDOM.render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>,
//     document.getElementById("root")
//   );
// }

// ReactDOM.render(
//   <div className="container">
//     <h1>{count}</h1>
//     <button onClick={increase}>+</button>
//     <button onClick={decrease}>-</button>
//   </div>,
//   document.getElementById("root")
// );
