import { useEffect, useState } from 'react';
import { PageLayout } from './Components/Layout/Layout';
import { Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import { Header } from './Components/Header/Header';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery, useLazyGetPostsQuery, useGetPostsMutation } from './services/postService/postService';
import { useGetPokemonByNameQuery } from './services/postService/postService';



function App() {
  // const dispatch = useDispatch
  // const { value } = useSelector((state) => state.counterReducer)
  // console.log('value', value)

  const [posts, setPosts] = useState([])

  const post = useSelector((state) => state.postService)
  const { getPokemon, data } = useGetPokemonByNameQuery()
  console.log('GetPokemon', getPokemon, data)

  useEffect(() => {
    // getPosts()
  }, [])
  // const getPosts = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(res => setPosts(res))
  // }

  const [comments, setComments] = useState([])
  useEffect(() => {
    getComments()
  }, [])
  const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(res => setComments(res))
  }

  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers()
  }, [])
  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setUsers(res))
  }

  const user = {
    name: 'Ivan',
    role: 'admin'
  }
  const isAdmin = (element) => (user.role == 'admin' ? element : <Navigate to='/error/' />)
  return (
    <Routes>
      <Route path='/*' element={<PageLayout />}>
        <Route index element={<HomeComponent postsFunction={posts} usersFunction={users} />} />
        <Route path='post/:postId' element={<HomeComments commentsFunction={comments} />} />
        <Route path='info' element={<InfoPage />} />
        <Route path='user' element={<>user</>} />
      </Route>

      <Route path='/error/*'>
        <Route index element={<>У вас нет доступа</>} />
      </Route>
    </Routes>
  )
}

export default App;

const HomeComponent = ({ postsFunction, usersFunction }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '64 em', margin: '0 auto', marginTop: '20px' }}>
      {postsFunction.map((post, index) => (
        usersFunction.map((user) => {
          if (user.id == post.userId)
            return (
              <div style={{ border: '1px solid #333', padding: '12px', borderRadius: '12px' }}>
                <h2>{user.username}</h2>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <Link to={`post/${post.id}`} state={{ name: user.username, postBody: post.body, postTitle: post.title, id: post.id }}>
                  <Button type="primary">
                    Перейти к комментариям
                  </Button>
                </Link>
              </div>
            )
        })
      ))}
    </div >
  )
}

const HomeComments = ({ commentsFunction }) => {
  const location = useLocation()
  const postId = location.state.id

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h2>Post:</h2>
      <div style={{ border: '1px solid #333', padding: '12px', borderRadius: '12px', gap: '8px' }}>
        <h2>{location.state.name}</h2>
        <h3>{location.state.postBody}</h3>
        <p>{location.state.postTitle}</p>
      </div>
      {/* <br /> */}
      <h2>Comments:</h2>
      {/* <br /> */}
      {commentsFunction.map((comment, index) => {
        if (comment.postId === postId) {
          return (
            <div style={{ border: '1px solid #333', padding: '12px', borderRadius: '12px', gap: '8px' }} >
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
              <br />
            </div>
          )
        }
      })}
    </div>
  )
}
const InfoPage = () => {
  const location = useLocation()

  return (
    <div>
      info:
    </div>
  )
}

