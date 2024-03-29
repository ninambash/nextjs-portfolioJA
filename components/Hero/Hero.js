import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
      <div style={{ width: '60%', marginLeft: '5rem', maxWidth: '500px' }}>
        <img src="/images/profile.JPG" alt="Profile picture" style={{ maxWidth: '100%', height: 'auto', borderRadius: 50 }} />
      </div>
      <div style={{ width: '47%' }}>
        <SectionTitle main center className="fade-in">
          Hello, I'm JOSIAH ADIEMA ADIEMA
        </SectionTitle>
        <SectionText>
        COMMUNICATIONS, GOVERNANCE AND PUBLIC POLICY CONSULTANT
        </SectionText>
        <Button onClick={() => (window.location = 'https://www.linkedin.com/in/josiah-adiema-adiema-ab95b826')}>
          View my LinkedIn Profile
        </Button>
      </div>
    </LeftSection>
  </Section>
);

export default Hero;




