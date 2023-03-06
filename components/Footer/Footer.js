import React from 'react';
import { BsFacebook } from 'react-icons/bs'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+254724267087">+254724267087</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:adiemaadiema@gmail.com">
          adiemaadiema@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Revolutionizing debate with brilliance</Slogan>
         
         
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://www.facebook.com/kingjosiahadiemaadiema/">
        <BsFacebook size="3rem" />
      </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ninambarack-dev/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
         
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;