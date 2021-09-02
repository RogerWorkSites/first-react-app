import React, { useState } from 'react';

function App() {

  const [likes, setLikes] = useState(5);
  const [text, setText] = useState('Some text');

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h2>{text}</h2>
      <input type="text" onChange={event => setText(event.target.value)} value={text}></input>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}

export default App;