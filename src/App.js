import React ,{useState} from "react";

function App() {

  const[count , stateCount]= useState(0)

    function increase(){
      stateCount(count+1);
    }
    function decrease(){
      stateCount(count-1);
    }    
  return  (
  <div className="container">
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
  </div>);
}

export default App;





// 1st method

// import React from "react";

// function App() {
//   return <div />;
// }

// export default App;

