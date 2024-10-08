// import P from 'prop-types';
// import './App.css';
// import React, { useEffect, useMemo, useState } from 'react';

// const Post = ({ post }) => {
//   console.log('post rendering');

//   return (
//     <div className="post" key={post.id}>
//       <h1>{post.title}</h1>
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
// };

// function App() {
//   console.log('App renderizou');
//   const [posts, setPosts] = useState([]);
//   const [value, setValue] = useState('');

//   useEffect(() => {
//     setTimeout(function () {
//       fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((r) => r.json())
//         .then((r) => setPosts(r));
//     }, 5000);
//   }, []);
//   return (
//     <div className="App">
//       <p>
//         <input type="search" value={value} onChange={(e) => setValue(e.target.value)}></input>
//       </p>
//       {useMemo(() => {
//         return (
//           posts.length > 0 &&
//           posts.map((post) => {
//             return <Post key={post.id} post={post} />;
//           })
//         );
//       }, [posts])}

//       {posts.length <= 0 && <p>Ainda nao carregou os posts.</p>}
//     </div>
//   );
// }

// export default App;
