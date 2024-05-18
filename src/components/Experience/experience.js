import React from 'react';
import './experience.css';

const Experience = () => {
    
    const experiences = [
        {
          id: 1,
          title: 'AI Prompt Engineering Intern',
          date: 'April 2024 - Present',
          description: [
            <ul>
                <li>Collaborated closely with product engineering and design teams to develop and integrate AI-based date planning algorithms.</li>
                <li>Continuously monitored and refined performance for optimal efficiency and effectiveness through prompt engineering.</li>
                <br/>
            </ul>
          ],
          skills: ['AI', 'Algorithm Development', 'Product Engineering', 'Design Collaboration']
        },
        {
          id: 2,
          title: 'Technical Graduate Admission Assistant',
          date: 'June 2023 - Present',
          description: [
            <ul>
                <li>Implemented and maintained Slate for admissions, configured to meet institutional needs.</li>
                <li>Managed applicant data, tracked statuses, executed queries, and provided technical support for platform efficiency.</li>
                <br/>
            </ul>
          ],
          skills: ['Slate', 'Admissions', 'Technical Support', 'Data Management']
        },
        {
          id: 3,
          title: 'Software Developer',
          date: 'June 2021 - August 2022',
          description: [
            <ul>
                <li>Integrated and deployed client sites using RestAPIs, MongoDB, and CRUD methods.</li>
                <li>Developed highly responsive applications by leveraging a tech stack comprising JavaScript, MongoDB, Express, Node.js, and React, utilizing a well-structured MVC architectural pattern.</li>
                <li>Implemented Agile methodologies, specifically SCRUM, as a project management approach, resulting in improved team collaboration, enhanced productivity, and on-time project deliveries.</li>
                <br/>
            </ul>
          ],
          skills: ['JavaScript', 'MongoDB', 'Express.js', 'Node.js', 'React', 'MVC', 'Agile', 'SCRUM']
        },
        {
          id: 4,
          title: 'Fullstack Developer Intern',
          date: 'June 2020 - June 2021',
          description: [
            <ul>
                <li>Engineered a sophisticated web application for a startup coaching company using AngularJs, NodeJs, and JavaScript.</li>
                <li>Utilized GitHub for seamless collaboration and version control and MongoDB for robust database management.</li>
                <br/>
            </ul>
          ],
          skills: ['AngularJs', 'NodeJs', 'JavaScript', 'GitHub', 'MongoDB', 'Web Development']
        },
        {
          id: 5,
          title: 'Web Developer Intern',
          date: 'December 2019 - June 2020',
          description: [
            <ul>
                <li>Designed a responsive website for the client according to their requirement using HTML, CSS, JavaScript, Bootstrap 5.</li>
                <li>Streamlined the development process, incorporating client feedback through in-person tests.</li>
                <br/>
            </ul>
          ],
          skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design']
        }
      ];
      
  
  
    return (
      <div className="experience-container">
        <span className="experience">Experience</span>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            id={`experience-${experience.id}`}
            className="experience-card"
          >
            <div className="experience-left">
              <div className="experience-date">{experience.date}</div>
            </div>
            <div className="experience-right">
              <div className="experience-title">{experience.title}</div>
              <div className="experience-description">{experience.description}</div>
              <div className="experience-skills">
                {experience.skills.map((skill, index) => (
                  <button key={index} className="skill-btn">{skill}</button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  

export default Experience