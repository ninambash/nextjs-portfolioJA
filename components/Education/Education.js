import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #000;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0 1rem;
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Education = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleLine />
        <Title>EDUCATION</Title>
        <TitleLine />
      </TitleWrapper>
      <Subtitle>The University of Nairobi</Subtitle>
      <Text>Sept 2019 - 2021</Text>
      <Text>Masters on Research and Public Policy</Text>
      <Subtitle>Uganda Christian University</Subtitle>
      <Text>Oct. 2010</Text>
      <Text>B.A Mass Communication</Text>
      <TitleWrapper>
        <TitleLine />
        <Title>CERTIFICATIONS</Title>
        <TitleLine />
      </TitleWrapper>
      <Text>Honours College Leadership Programme (UCU) Aug 2011-May 2009</Text>
      <Text>• Political Facilitation Training- MSTCDC Oct 2018</Text>
      <Text>• Trainer of trainer Advance Certificate – Action Aid Dec 2017</Text>
    </Wrapper>
  );
};

export default Education;
