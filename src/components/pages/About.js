import React, { useState } from 'react';

function About({ uploadedImages }) {
  
  return (
    <div>
      <h2>dito yung mga article/proofs ng legitimacy ng successful adoption</h2>
      <div className="image-container">
        {uploadedImages.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
