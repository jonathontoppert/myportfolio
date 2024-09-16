import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import Projects from '../Projects';
import './index.scss';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="header">
                <nav className="nav">
                    <a href="#about">about</a>
                    <a href="#blog">blog</a>
                    <a href="#projects">projects</a>
                </nav>
            </header>
            <div className="content">
                <h1>
                    Hello, I'm Jonathon Toppert |{' '}
                    <Typed
                        strings={[
                            'Aspiring Software Engineer',
                            'Aspiring Software Developer',
                            'UX Designer',
                            'Web Developer',
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </h1>
                <p>🌟Welcome to my portfolio!🌙 </p>
            </div>

            <Projects />

            <div className="clouds">
      <img src="cloud.png" alt="cloud" className="cloud cloud-1" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-2" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-3" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-4" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-5" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-6" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-7" />
        </div>
    </div>
    );
};

export default HomePage;
