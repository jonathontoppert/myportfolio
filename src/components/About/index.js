import React from 'react';
import './index.scss';

const About = () => {
    return (
        <div className="about-page">
            <header className="header">
                <nav className="nav">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/about">About</a>
                </nav>
            </header>
            <div className="about-content">
                <div className="about-section">
                    <img src="/myPhoto.jpg" alt="Jonathon Toppert" className="about-photo" />
                    <div className="about-text">
                        <h1>About Me</h1>
                        <p>
                        Hi there!! I’m Jonathon Toppert and welcome to my portfolio. I am an aspiring software engineer with a passion for building clean, efficient, and visually engaging applications.
I specialize in front-end development with React, but I also enjoy working with back-end technologies such as Node.js to create full-stack solutions, along with various other languages such as C++, Java, and more.
I graduated from the University of Wisconsin with a degree in Computer Science, and I currently work at Von Maur headquarters in Davenport, Iowa, as a hardware technician.

Outside of programming, I enjoy spending time with my family, friends, and my wonderful pets.
I have three dogs—Luke, Leia, and Chewy, named after Star Wars characters—and two cats, Asta and Yuno, named after characters from Black Clover.
They keep me busy when I’m not working on my next project!

In my free time, I love playing video games and spending time with loved ones. Whether I’m working on personal projects or spending time with my family, I’m always driven to push my skills further and explore new challenges.
Feel free to check out my work and don’t hesitate to get in touch if you want to collaborate!
                        </p>
                    </div>
                </div>
            </div>
            <div class="clouds">
    <img src="cloud.png" alt="cloud" class="cloud cloud-1" />
    <img src="cloud.png" alt="cloud" class="cloud cloud-2" />
    <img src="cloud.png" alt="cloud" class="cloud cloud-3" />
    <img src="cloud.png" alt="cloud" class="cloud cloud-4" />
    <img src="cloud.png" alt="cloud" class="cloud cloud-5" />
    <img src="cloud.png" alt="cloud" class="cloud cloud-6" />
    <img src="cloud.png" alt="cloud" class="cloud cloud-7" />
</div>
        </div>
    );
};

export default About;
