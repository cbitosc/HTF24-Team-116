// // src/components/ImageUpload.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../components_css/ImageUpload.css';

// const ImageUpload = () => {
//     const [file, setFile] = useState(null);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('image', file);

//         try {
//             const token = localStorage.getItem('authToken');
//             await axios.post('/api/upload/upload-image', formData, {
//                 headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
//             });
//             alert('Image uploaded successfully');
//         } catch (error) {
//             alert('Image upload failed');
//         }
//     };

//     return (
//         <div className="image-upload">
//             <h2>Upload an Image to Verify Your Eco-Challenge</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="file" onChange={handleFileChange} required />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ImageUpload;

// src/components/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import '../components_css/ImageUpload.css';

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const token = localStorage.getItem('authToken');
      await axios.post('/api/upload/upload-image', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Image uploaded successfully!');
    } catch (error) {
      alert('Image upload failed. Please try again.');
    }
  };

  return (
    <div className="image-upload">
      <h2>Upload an Image to Verify Your Eco-Challenge 🌿</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageUpload;
