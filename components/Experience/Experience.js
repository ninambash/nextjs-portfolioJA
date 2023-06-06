import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    <ExperienceContainer>
      <ExperienceTitle></ExperienceTitle>
      <ExperienceList>
        {/* <li>Expertise in communication, public policy, governance, social media, debate, and public speaking.</li>
        <li>Leadership positions at Lean Leap Consultants, UN Women Eastern and Southern Region, Partnership for African Social and Governance Research, and Kenya National Debate Council.</li>
        <li>Managed finances, developed and implemented strategic plans, established partnerships, conducted training, and moderated debates and discussions.</li>
        <li>Worked as a communication director and moderator for various events and organizations.</li> */}
      </ExperienceList>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  margin: 2rem 0;
`;

const ExperienceTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem;
`;

const ExperienceList = styled.ul`
  margin: 1.5rem 0 0 0;
  padding-left: 2rem;
  font-size: 1.7rem;
  line-height: 1.6;

  li {
    margin-bottom: 1rem;
    font-weight: 600;
    list-style-type: circle;
    color: rgba(255, 255, 255, 0.75);
  }
`;

export default Experience;

