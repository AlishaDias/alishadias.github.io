import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './fixedicons.css';

const FixedIcons = () => {
  return (
    <div className="fixed-icons">
      <a href="https://www.linkedin.com/in/alishadias/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/AlishaDias" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="mailto:adias1@depaul.edu">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  );
}

export default FixedIcons;
