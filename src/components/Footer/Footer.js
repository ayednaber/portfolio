import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:3658886075">365-888-6075</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Mail To</LinkTitle>
        <LinkItem href="mailto:naberayed@gmail.com">naberayed@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Crafting a digital future, one line of code at a time. 💻✨</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "13px"}}>
        <p>© 2023 Ayed Naber. All rights reserved.</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
