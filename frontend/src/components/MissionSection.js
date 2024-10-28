import React from 'react';
import '../components_css/MissionSection.css';
import img1 from '../images/carousel/img1.jpg';
import img2 from '../images/carousel/img2.jpg';
import img5 from '../images/carousel/img5.jpg';
import img4 from '../images/carousel/img4.jpg';

function MissionSection() {
  const missionItems = [
    {
      title: 'SAVE TREES',
      image: img1, // Replace with actual image paths
      description: 'Trees produce oxygen that is life...'
    },
    {
      title: 'TREE PLANTATION',
      image: img2,
      description: 'Our main motive is to plant more and more trees...'
    },
    {
      title: 'PAPER RECYCLING',
      image: img4,
      description: '"Paper Recycling" is the only sustainable way...'
    },
    {
      title: 'AWARENESS',
      image: img5,
      description: 'Whenever we talk about any problem...'
    },
  ];

  return (
    <div className="mission-section">
      <h2>OUR MISSION</h2>
      <p>"Plant a Tree, Grow a Tree, Save Future, Save Earth"</p>
      <div className="mission-cards">
        {missionItems.map((item, index) => (
          <div className="mission-card" key={index}>
            <img src={item.image} alt={item.title} className="mission-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionSection;
