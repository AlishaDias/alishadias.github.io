import React from 'react';
import './skills.css';

// Example images. Replace these paths with the actual paths to your images.
import jsLogo from '../../assets/js.png';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css-3.png';
import swiftLogo from '../../assets/swiftui.png';
import pythonLogo from '../../assets/python.png';
import javaLogo from '../../assets/java.png';
import mysqlLogo from '../../assets/mysql.png';
import mongodbLogo from '../../assets/mongodb.png';
import githubLogo from '../../assets/github.png';
import reactLogo from '../../assets/react.png';
import angularLogo from '../../assets/angular.png';
import nodeLogo from '../../assets/nodejs.png';
import bootstrapLogo from '../../assets/bootstrap.png';

const Skills = () => {
  const programmingLanguages = [
    { name: 'JavaScript', imgSrc: jsLogo },
    { name: 'HTML5', imgSrc: htmlLogo },
    { name: 'CSS3', imgSrc: cssLogo },
    { name: 'SwiftUI', imgSrc: swiftLogo },
    { name: 'Python', imgSrc: pythonLogo },
    { name: 'Java', imgSrc: javaLogo },
  ];

  const databases = [
    { name: 'MySQL', imgSrc: mysqlLogo },
    { name: 'MongoDB', imgSrc: mongodbLogo },
  ];

  const toolsFrameworks = [
    { name: 'GitHub', imgSrc: githubLogo },
    { name: 'React', imgSrc: reactLogo },
    { name: 'AngularJS', imgSrc: angularLogo },
    { name: 'Node.js', imgSrc: nodeLogo },
    { name: 'Bootstrap 5', imgSrc: bootstrapLogo },
  ];

  return (
    <div className="skills-container">
      <span className="skills">Skills</span>

      <div className="skills-category">
        <div className="skills-category-title">Programming Languages</div>
        <div className="skills-list">
          {programmingLanguages.map(skill => (
            <div className="skill-item" key={skill.name}>
              <img src={skill.imgSrc} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <div className="skills-category-title">Databases</div>
        <div className="skills-list">
          {databases.map(skill => (
            <div className="skill-item" key={skill.name}>
              <img src={skill.imgSrc} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <div className="skills-category-title">Tools and Frameworks</div>
        <div className="skills-list">
          {toolsFrameworks.map(skill => (
            <div className="skill-item" key={skill.name}>
              <img src={skill.imgSrc} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
