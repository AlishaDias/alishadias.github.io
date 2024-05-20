import React from 'react';
import './project.css';
import chessboard from '../../assets/chess.jpg';
import architecture from '../../assets/az.jpg';
import cookbook from '../../assets/cookbook.jpg';

const Project = () => {
    const projects = [
        {
            id: 1,
            project_name: "CookBook+ | iOS Application",
            description: [
                "This is a comprehensive mobile application designed to serve as a user-friendly culinary companion.",
                "Developed using Xcode 15 and Swift"
            ],
            date: "January 2024 – Present",
            image: cookbook,
            link: "https://github.com/AlishaDias/CookBookPlus" 
        },
        {
            id: 2,
            project_name: "App to Simplify Alzheimer’s | Android & Web Application",
            description: [
                "Collaborated with a dynamic team of 4 to conceive and develop an application, demonstrating teamwork and collaboration.",
                "Engineered the application using ReactJs, NodeJs, and embedded ML algorithms for enhanced functionalities, showcasing adaptability to the latest standards.",
                "Architected user authentication, login, and signup pages."
            ],
            date: "August 2020 – June 2021",
            image: architecture,
            link: "https://github.com/AlishaDias/SimplifyAlzheimers" 
        },
        {
            id: 3,
            project_name: "Chess | Education Tech Web Application",
            description: [
                "Pioneered the development of a live web application for online chess using AngularJs, NodeJs, and Chessboard.js, showcasing expertise in interactive experiences and user interface."
            ],
            date: "September 2020",
            image: chessboard,
            link: "https://github.com/AlishaDias/Mychess" 
        }
    ];

    return (
        <div className="project">
            <h1 className="project-title">My Projects</h1>
            <div className="project-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-item">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt="Project" />
                        </a>
                        <h4 className="project-name">{project.project_name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
