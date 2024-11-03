// // src/components/Profile.js
// import React from 'react';
// import '../components_css/Profile.css'; // Import CSS for styling

// const Profile = ({ treesPlanted, carbonFootprint }) => {
//     return (
//         <div className="profile-container">
//             <h2>🌳 Your Profile 🌳</h2>
//             <div className="profile-metrics">
//                 <div className="metric-card">
//                     <h3>Trees Planted</h3>
//                     <p>{treesPlanted}</p>
//                 </div>
//                 <div className="metric-card">
//                     <h3>Carbon Footprint Reduced</h3>
//                     <p>{carbonFootprint} kg CO2</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;

// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageUpload from './ImageUpload';
import '../components_css/Profile.css';

const Profile = () => {
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [inspiringStories, setInspiringStories] = useState([]);

  // Fetching metrics and inspiring stories on component load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/user/metrics');
        setTreesPlanted(data.treesPlanted);
        setCarbonFootprint(data.carbonFootprint);
        setInspiringStories(data.stories || []);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
        <div className="profile-container">
            <h1>Your Eco Profile 🌱</h1>

            {/* Metrics Section */}
            <div className="metrics">
                <div className="metric-card">
                    <h3>Trees Planted</h3>
                    <p>{treesPlanted}</p>
                </div>
                <div className="metric-card">
                    <h3>Carbon Footprint Saved (kg)</h3>
                    <p>{carbonFootprint} kg CO₂</p>
                </div>
            </div>
        </div>
              {/* Image Upload Section */}
        <div className="image-upload-section">
            <ImageUpload />
        </div>
    </div>
  );
};

export default Profile;