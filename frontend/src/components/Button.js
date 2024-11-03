import React from 'react';
import '../components_css/Button.css'; // Import the CSS file for styling

const Button = ({ label, onClick }) => {
    return (
        <button className="custom-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;