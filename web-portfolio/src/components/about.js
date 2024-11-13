import React from 'react';
import ProfileImg from '../media/20240616_213408314_iOS.jpg';

const About = () => (
    <section id='about' className='about-me-section'>
        <div className='about-me-information'>
            <h2>A Little About Me...</h2>
            <div>
                <img src={ProfileImg} alt="Profile img" className="profile-picture" />
            </div> 
            <p>Greetings, I am Andrew and I am a Computer Science graduate and a current Software Engineering Student. 
               I have experience creating full stack websites, applications, and software and looking to grow my skills and experience as a developer.
            </p>
        </div>
        <div className='about-me-education'>
            <h2>Education</h2>
            <div className="education-row">
                <div className="education-item">
                    <h3>Associates In Computer Science</h3>
                    <p><strong>Renton Technical College</strong>, Renton, WA</p>
                    <p>GPA: 3.9</p>
                    <p><em>2021 - 2024</em></p>
                </div>
                <div className="education-item">
                <h3>Bachelors In Software Engineering</h3>
                <p><strong>Western Governors University</strong>, Salt lake City, UT</p>
                <p><em>2025 - Current</em></p> 
                </div> 
            </div>
        </div>
    </section>
);

export default About;
