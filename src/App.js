import './App.css';
import { useRef } from 'react';

function App() {

  const countRef = useRef(0);
  let count = 0;

  function incrementRef() {
    countRef.current++;
    console.log("Valor de countRef", countRef.current);
  }

  function incrementLet() {
    count++
    console.log("Valor de count", count);
  }

  return (
    <div className="App">
      <button onClick={() => incrementRef()}>
        Increment ref
      </button>

      <button onClick={() => incrementLet()}>
        Increment let
      </button>

    </div>
  );
}

export default App;
