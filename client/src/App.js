import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from "./pages/Post"

function App() {
    return (
        <Router>
            <div className='top-bar'>
                <Link to={"/"}> Home </Link>
                <Link to={"/createPost"}> Create Post</Link>
            </div>
        <div className='routesPath'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/createPost' element={<CreatePost />}/>
                    <Route path='/post/:id' element={<Post />}/>
                </Routes>
        </div>
        </Router>
    );
}
export default App;
