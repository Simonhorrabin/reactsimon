import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/simon-horrabin-50822a1a6/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
