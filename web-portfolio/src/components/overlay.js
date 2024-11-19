import React, { useState } from 'react';

const Overlay = ({ project, onClose }) => {
  const [imageIndex, setImageIndex] = useState(0);
  if (!project) return null; 

  // Goes through array of images for the model
  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };
  
  //closes overlay and resets image index and prevents index value transfering to other overlays.
  const closeOverlay = () => {
    setImageIndex(0);
    onClose();
  };

  return (
    <div className="project-overlay">
         
        <div className="project-overlay-container">
            <div className="overlay-header">
                <h2>{project.title}</h2>
                <p>{project.titleDescription}</p>
            </div>
            <div className="proj-overlay-content">
                <div className='proj-overlay-img'>
                    <img src={project.images[imageIndex]} alt={`${project.title}_Img${imageIndex}`}/>
                    <br/>
                    <button onClick={prevImage}>←</button>
                    <button onClick={nextImage}>→</button>
                </div >
                <div className="proj-overlay-information">
                    <p>{project.description}</p>
                    <h4>{project.techDescription}</h4>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Github</a>
                    <br/>
                    <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Try It Out?</a>
                </div>
            </div>
            <div className="proj-overlay-footer">
                <button className="footer-close-btn" onClick={closeOverlay}>Close</button>
            </div>  
        </div>
    </div>
  );
};

export default Overlay;
