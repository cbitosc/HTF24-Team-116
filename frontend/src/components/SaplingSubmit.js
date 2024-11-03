// src/components/SaplingSubmit.js
import React, { useState } from 'react';
import '../components_css/SaplingSubmit.css';

const SaplingSubmit = () => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const leaderboardData = [
    { name: 'Alice', points: 150, medal: 'gold' },
    { name: 'Bob', points: 120, medal: 'silver' },
    { name: 'Charlie', points: 110, medal: 'bronze' },
    { name: 'Daisy', points: 100 },
    { name: 'Eve', points: 90 },
  ];

  const inspiringStories = [
    { title: "A Boy Who Planted 1,000 Trees 🌳", content: "In his village, young Ravi made it his mission to plant trees after witnessing deforestation. He has since planted over 1,000 trees, turning barren land into a lush forest." },
    { title: "The Forest that Saved a Town 🌲", content: "A small community in Brazil planted trees to combat drought. Now, the forest they nurtured brings rains and sustains their agriculture." },
  ];

  const motivationQuote = "“The best time to plant a tree was 20 years ago. The second-best time is now.”";

  const handleVerify = () => {
    alert("Sapling verification successful! Ready to submit.");
  };

  const handleSubmit = () => {
    alert("Sapling submitted successfully! You've earned points.");
  };

  return (
    <div className="sapling-submit-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>🌱 Plant a Tree, Grow a Future 🌿</h1>
        <p>
          Every tree you plant contributes to a healthier planet. 
          Submit your saplings and climb the leaderboard!
        </p>
      </div>

      {/* Leaderboard Section */}
      <div className="leaderboard">
        <h3>🌟 Top Participants 🌟</h3>
        <button onClick={() => setShowLeaderboard(!showLeaderboard)}>
          {showLeaderboard ? "Hide Leaderboard" : "Show Leaderboard"}
        </button>
        {showLeaderboard && (
          <div className="leaderboard-row">
            {leaderboardData.slice(0, 3).map((user, index) => (
              <div key={index} className="leaderboard-card">
                {/* <img
                  src={`/images/${user.medal || 'default'}.png`}
                  alt={`${user.medal || 'Participant'} medal`}
                  className="medal-img"
                /> */}
                <div className="user-details">
                  <h4>#{index + 1} {user.name}</h4>
                  <p>{user.points} pts</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Verify & Submit Section */}
      <div className="verify-submit">
        <button className="verify-btn" onClick={handleVerify}>Verify</button>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>

      {/* Inspiring Stories Section */}
      <div className="inspiring-stories">
        <h2>Inspiring Stories 🌍</h2>
        {inspiringStories.map((story, index) => (
          <div key={index} className="story-card">
            <h3>{story.title}</h3>
            <p>{story.content}</p>
          </div>
        ))}
      </div>

      {/* Motivational Section */}
      <div className="motivation-section">
        <h2>Motivation to Plant More Trees 🌳</h2>
        <p>{motivationQuote}</p>
      </div>
    </div>
  );
};

export default SaplingSubmit;
