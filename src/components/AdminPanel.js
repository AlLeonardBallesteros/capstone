import React, { useState } from 'react';

function AdminPanel({ onUpload }) {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (image) {
      onUpload(image);
      setImage(null); // Reset the image state after uploading
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Upload Image</button>
    </div>
  );
}

export default AdminPanel;