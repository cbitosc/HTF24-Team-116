// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; // Import the NavBar
import HomePage from './components/HomePage';
// import HomePage from './Test/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import ImageUpload from './components/SaplingSubmit';
// import testImageUpload from './Test/SaplingSubmit';

const App = () => {
    return (
        <Router>
            <NavBar /> {/* Include NavBar here */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Profile />} />
                <Route path="/upload" element={<ImageUpload />} />
                {/* <Route path="/upload" element={<testImageUpload />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
