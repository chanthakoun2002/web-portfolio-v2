import React, { useState } from 'react';
import ProjectCard from './projectCard';
import Overlay from './overlay';

import portfolioImg1 from '../media/projectScreenshots/Screenshot 2024-11-12 185202.png';
import portfolioImg2 from '../media/projectScreenshots/Screenshot 2024-11-12 185211.png';
import pomodoroImg1 from '../media/projectScreenshots/pomodoro.png';
import gameImg1 from '../media/projectScreenshots/GameScreenSwordAdventurer.png';
import inventoryImg1 from '../media/projectScreenshots/InvenMangApp.png';

import placeholder from '../media/underconstrucntion.jpg';

const projectData = [
  {
    title: 'Pomodoro Timer',
    titleDescription: 'Web Application',
    image: [pomodoroImg1],
    images: [pomodoroImg1],
    description: 'A pomodoro timer ',
    techDescription: 'HTML/CSS | Javascript | React.js | MongoDB | Node.js | Express.js',
    githubLink: 'https://github.com/chanthakoun2002/pomodoro-application',
    siteLink: 'https://github.com/chanthakoun2002/web-portfolio' 
  },
  
  {
    title: 'Web Portfolio',
    image: [portfolioImg1],
    images: [portfolioImg1, portfolioImg2],
    description: 'My humble portfolio showcasing information and background about me, my skills and projects.',
    techDescription: 'HTML/CSS | javascript | React.js',
    githubLink: 'https://github.com/chanthakoun2002/web-portfolio',
    siteLink: 'https://github.com/chanthakoun2002/web-portfolio'
  },
  {
    title: 'Inventory Management ',
    image: [inventoryImg1],
    images: [inventoryImg1],
    description: 'An inventory management web application with CRUD operations to handle user login/registration and authentication. Allows users to alter inventory items and create orders that update the data in a noSQL database.',
    techDescription: 'HTML/CSS | javascript | Express.js | MongoDB',
    githubLink: 'https://github.com/chanthakoun2002/Inventory-management-api',
    siteLink: 'https://github.com/chanthakoun2002/web-portfolio'
  },
  {
    title: 'Sword Adventurer',
    titleDescription: 'Video Game',
    image: [gameImg1],
    images: [gameImg1],
    description: 'An Isometric 2D action fighter game where you go around and try to slay as many slimes as you can before you die, created using C# in the unity engine.',
    techDescription: 'C# | Unity Engine',
    githubLink: 'https://github.com/chanthakoun2002/game-dev-project-2d-isometric-rpg',
    siteLink: 'https://github.com/chanthakoun2002/web-portfolio'
  },
  
  
  {
    title: 'Under Construction',
    image: [placeholder],
    images: [placeholder],
    description: '(•‿•)',
    techDescription: 'More projects coming soon...',
    githubLink: 'https://github.com/chanthakoun2002/web-portfolio',
    siteLink: 'https://github.com/chanthakoun2002/web-portfolio'
  },
  {
    title: 'Under Construction',
    image: [placeholder],
    images: [placeholder],
    description: '(•‿•)',
    techDescription: 'More projects coming soon...',
    githubLink: 'https://github.com/chanthakoun2002/web-portfolio',
    siteLink: 'https://github.com/chanthakoun2002/web-portfolio'
  },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const handleCardClick = (project) => {
        setSelectedProject(project);
    };
    const handleCloseOverlay = () => {
        setSelectedProject(null);
    };
    return (
        <section id='projects' className='project-section'>
            <h2>My Projects</h2>
            <div className='proj-grid'>
                {projectData.map((project, index) => (
                <ProjectCard
                    key={index}
                    images={project.image}
                    title={project.title}
                    onClick={() => handleCardClick(project)}
                />))}
            </div>
            <Overlay project={selectedProject} onClose={handleCloseOverlay} />
        </section>    
    );
};

export default Projects;
