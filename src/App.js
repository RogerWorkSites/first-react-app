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

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now }]);
    setPost({ title: '', body: '' });

  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Post Title"
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Post Text" />
        <MyButton onClick={addNewPost}>Add Post</MyButton>
      </form>
      <PostList posts={posts} title='Posts about JS' />
    </div >
  );
}

export default App;