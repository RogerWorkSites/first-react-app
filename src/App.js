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

  return (
    <div className="App">
      <form>
        <MyInput placeholder="Post Title" />
        <MyInput placeholder="Post Text" />
        <MyButton></MyButton>Add Post</MyButton>
      </form>
      <PostList posts={posts} title='Posts about JS' />
    </div >
  );
}

export default App;