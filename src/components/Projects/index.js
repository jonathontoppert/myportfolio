import React from 'react';
import './index.scss'; 

const projectsData = [
    {
        title: "This is a Test1",
        description: "This is a test description1",
        liveDemo: 'https://www.linkedin.com/in/jonathon-toppert-129347216/', 
        github: 'https://www.linkedin.com/in/jonathon-toppert-129347216/',
        image: '/homer_test.jpeg' 
    },
    {
        title: "This is a Test2",
        description: "This is a test description2",
        liveDemo: 'https://www.linkedin.com/in/jonathon-toppert-129347216/',
        github: 'https://www.linkedin.com/in/jonathon-toppert-129347216/',
        image: '/homer_test.jpeg'
    },
    {
        title: "This is a Test3",
        description: "This is a test description3",
        liveDemo: "https://example.com",
        github: "https://github.com",
        image: '/homer_test.jpeg' 
    },
];



const Projects = () => {
    return (
        <div className="projects-section">
            <h2>Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-buttons">
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Projects;
