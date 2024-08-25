import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';

function App() {
    return (
        <Router>
            <div className='top-bar'>
                <div className='links'>
                    <Link to="/CreateTask">Create Task</Link>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/CreateTask" element={<CreateTask />} />
                </Routes>
            </div>
        </Router>
    );

}

export default App;
