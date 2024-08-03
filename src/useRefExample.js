// import P from 'prop-types';
// import './App.css';
// import React, { useEffect, useMemo, useRef, useState } from 'react';

// const Post = ({ post, handleClick }) => {
//   console.log('post rendering');

//   return (
//     <div className="post" key={post.id}>
//       <h1 onClick={handleClick}>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// };

// Post.propTypes = {
//   post: P.shape({
//     id: P.number,
//     title: P.string,
//     body: P.string,
//   }),
//   handleClick: P.func,
// };

// function App() {
//   console.log('App renderizou');
//   const [posts, setPosts] = useState([]);
//   const [value, setValue] = useState('');
//   const input = useRef(null);
//   const contador = useRef(0);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((r) => r.json())
//       .then((r) => setPosts(r));
//   }, []);

//   const handleClick = (value) => {
//     setValue(value);
//   };
//   useEffect(() => {
//     input.current.focus();
//     console.log(input.current);
//   }, [value]);

//   useEffect(() => {
//     contador.current += 1;
//   });

//   return (
//     <div className="App">
//       <h1>renderizou: {contador.current}x</h1>
//       <p>
//         <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)}></input>
//       </p>
//       {useMemo(() => {
//         return (
//           posts.length > 0 &&
//           posts.map((post) => {
//             return <Post handleClick={() => handleClick(post.title)} key={post.id} post={post} />;
//           })
//         );
//       }, [posts])}

//       {posts.length <= 0 && <p>Ainda nao carregou os posts.</p>}
//     </div>
//   );
// }

// export default App;
