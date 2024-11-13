import React from 'react';

const ProjectCard = ({ title, images, onClick }) => (
    <div className="project-card" onClick={onClick}>
        <h3>{title}</h3>
        <img src={images}alt={`${title}`}/>
    </div>
);

export default ProjectCard;
