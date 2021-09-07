import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Javascript - programming language' },
    { id: 2, title: 'Javascript 2', body: 'Javascript - programming language' },
    { id: 3, title: 'Javascript 3', body: 'Javascript - programming language' },
  ])
  const [title, setTitle] = useState('');
  const [body, setText] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    console.log(newPost);
    setPosts([...posts, newPost]);
    setTitle('');
    setText('')
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Post Title"
        />
        <MyInput
          value={body}
          onChange={e => setText(e.target.value)}
          type="text"
          placeholder="Post Text" />
        <MyButton onClick={addNewPost}>Add Post</MyButton>
      </form>
      <PostList posts={posts} title='Posts about JS' />
    </div >
  );
}

export default App;