import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from "./pages/Post"
import Registration from "./pages/Registration"
import Login from "./pages/Login"

function App() {
    return (
        <Router>
            <div className='top-bar'>
                <Link to={"/"}> Home </Link>
                <Link to={"/createPost"}> Create Post</Link>

                {!localStorage.getItem('accessToken') && (
                    <>
                        <Link to={"/login"}> Login </Link>
                        <Link to={"/registration"}>Registration</Link>
                    </>
                )}
            </div>
            <div className='routesPath'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/createPost' element={<CreatePost />} />
                    <Route path='/post/:id' element={<Post />} />
                    <Route path='/registration' element={<Registration />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
