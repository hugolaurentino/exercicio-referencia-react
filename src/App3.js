import './App.css';
import { useRef } from 'react';

function App3() {

  const strongdaniel = useRef(null);
  const strongjoao = useRef(null);
  const strongpedro = useRef(null);

  function danielClick() {

    if (strongdaniel.current.style.color === 'red') {
      strongdaniel.current.style.fontSize = 'unset';
      strongdaniel.current.style.color = 'black';
      return;
    }

    strongdaniel.current.style.fontSize = '30px';
    strongdaniel.current.style.color = 'red';
  }

  function joaoClick() {

    if (strongjoao.current.style.color === 'green') {
      strongjoao.current.style.fontSize = 'unset';
      strongjoao.current.style.color = 'black';
      return;
    }

    strongjoao.current.style.fontSize = '60px';
    strongjoao.current.style.color = 'green';
  }

  function pedroClick() {

    if (strongpedro.current.style.color === 'blue') {
      strongpedro.current.style.fontSize = 'unset';
      strongpedro.current.style.color = 'black';
      return;
    }

    strongpedro.current.style.fontSize = '90px';
    strongpedro.current.style.color = 'blue';
  }

  return (
    <div className="App">

      <strong
        onClick={() => danielClick()}
        ref={strongdaniel}
      >
        Daniel
      </strong>

      <strong
        onClick={() => joaoClick()}
        ref={strongjoao}>
        João
      </strong>

      <strong
        onClick={() => pedroClick()}
        ref={strongpedro}>
        Pedro
      </strong>
    </div>
  );
}

export default App3;
