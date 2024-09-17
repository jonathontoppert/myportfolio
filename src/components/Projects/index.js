import React, { useState, useEffect } from 'react';
import './index.scss'; 

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    return (
        <div className="projects-section">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
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
