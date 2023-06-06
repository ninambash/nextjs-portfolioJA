import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills and Abilities</SectionTitle>
    <SectionText>
    Throughout my extensive professional career, I have garnered invaluable expertise in various domains, including communication, public policy, governance, social media management, debate, and public speaking.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Trainer in Public Speaking, Debate, and Critical Thinking</ListTitle>
          <ListParagraph>
          I teach and guide individuals in improving their public speaking skills, engaging in structured debates, and cultivating critical thinking abilities. <br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Public Policy Analyst</ListTitle>
          <ListParagraph>
          I studying and evaluating public policies implemented by governments and organizations <br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Social Media Specialist</ListTitle>
          <ListParagraph>
          I utilizes social media platforms to boost engagement, brand visibility, and business expansion. <br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;