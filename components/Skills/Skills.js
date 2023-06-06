import React from 'react';
import  { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

`;

const SkillsTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  text-align: center;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #333333;
`;

const SkillsItem = styled.li`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
  
`;


const Skills = () => {
  return (
    <SkillsContainer>
      {/* <SkillsTitle>Skills & Abilities</SkillsTitle> */}
      <SkillsList>
        {/* <SkillsItem>Research and Analytical Skills</SkillsItem>
        <SkillsItem>Report Writing</SkillsItem>
        <SkillsItem>Public Policy Analyst</SkillsItem>
        <SkillsItem>Event MC and Moderation</SkillsItem>
        <SkillsItem>Trainer in Public Speaking, Debate, and Critical Thinking</SkillsItem>
        <SkillsItem>Social Media Trainer, Strategist, and Consultant</SkillsItem> */}
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;
