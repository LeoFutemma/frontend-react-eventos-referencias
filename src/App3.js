import { useRef } from 'react';
import './App.css';

function App3() {
  const danielRef = useRef(null);
  const joaoRef = useRef(null);
  const pedroRef = useRef(null);

  function handleDaniel() {
    danielRef.current.style.fontSize = '30px';
    danielRef.current.style.color = 'red';
  }

  function handleJoao() {
    joaoRef.current.style.fontSize = '60px';
    joaoRef.current.style.color = 'green';
  }

  function handlePedro() {
    pedroRef.current.style.fontSize = '90px';
    pedroRef.current.style.color = 'blue';
  }

  return (
    <div className="App">
      <strong ref={danielRef} onClick={() => handleDaniel()}>Daniel</strong>
      <strong ref={joaoRef} onClick={() => handleJoao()}>João</strong>
      <strong ref={pedroRef} onClick={() => handlePedro()}>Pedro</strong>
    </div>
  );
}

export default App3;
