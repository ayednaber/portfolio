import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';
import {IoIosPaper} from 'react-icons/io';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
const Header = () =>  (
  <Container>
    <Div1>
      <Link 
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}
      >
          <DiCode size="3rem" /> <Span>Ayed Naber</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ayednaber">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ayed-naber/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ayed-naber/overlay/1635511507965/single-media-viewer/?profileId=ACoAAC1pJI0BdrgLfYaYNh6WGmJT_AzvXqr-JJA">
        <IoIosPaper size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
