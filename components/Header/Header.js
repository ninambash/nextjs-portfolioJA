import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" passHref legacyBehavior>
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about" passHref legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#Experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li> 
              
      <li>
        <a href="/images/Resume.pdf" download>
          <NavLink>CV</NavLink>
        </a>
      </li>          
    </Div2>
    <Div3>
      <SocialIcons href="https://www.facebook.com/kingjosiahadiemaadiema/">
        <BsFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ninambarack-dev/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.Twitter.com/in/TheDebateGuru/">
        <FaTwitterSquare size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
