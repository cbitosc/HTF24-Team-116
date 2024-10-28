// src/components/SaplingSubmit.js
import React, { useState } from 'react';
import '../components_css/SaplingSubmit.css';
import { NavLink } from 'react-router-dom';

const SaplingSubmit = () => {
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const leaderboardData = [
        { name: 'Alice', points: 150 },
        { name: 'Bob', points: 120 },
        { name: 'Charlie', points: 110 },
        { name: 'Daisy', points: 100 },
        { name: 'Eve', points: 90 },
    ];

    const handleVerify = () => {
        alert("Sapling verification successful! Ready to submit.");
    };

    const handleSubmit = () => {
        alert("Sapling submitted successfully! You've earned points.");
    };

    return (
        <div>
            <NavLink/>
            <div className="sapling-submit-container">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>🌱 Plant a Tree, Grow a Future 🌿</h1>
                    <p>Every tree you plant contributes to a healthier planet. Submit your saplings and climb the leaderboard!</p>
                </div>

                {/* Leaderboard Section */}
                <div className="leaderboard">
                    <h3>🌟 Top Participants 🌟</h3>
                    <button onClick={() => setShowLeaderboard(!showLeaderboard)}>
                        {showLeaderboard ? "Hide Leaderboard" : "Show Leaderboard"}
                    </button>
                    
                    {showLeaderboard && (
                        <div className="leaderboard-rankings">
                            <div className="top-ranks">
                                {leaderboardData.slice(0, 3).map((user, index) => (
                                    <div key={index} className={`rank-card rank-${index + 1}`}>
                                        <h4>#{index + 1} {user.name}</h4>
                                        <p>{user.points} pts</p>
                                    </div>
                                ))}
                            </div>
                            <ul className="other-participants">
                                {leaderboardData.slice(3).map((user, index) => (
                                    <li key={index}>
                                        <span>{index + 4}. {user.name}</span>
                                        <span>{user.points} pts</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Verify & Submit Section */}
                <div className="verify-submit">
                    <button className="verify-btn" onClick={handleVerify}>Verify</button>
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default SaplingSubmit;
