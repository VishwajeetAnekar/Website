import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    
    <div>
      <a href="https://www.linkedin.com/in/vishwajeet-anekar-664a66287/">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/VishwajeetAnekar">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/vishwajeet_anekar?igshid=ZGUzMzM3NWJiOQ==">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
