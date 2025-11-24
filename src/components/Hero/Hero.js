import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, MemojiImage, HeroContentWrapper } from './HeroStyles';

const Hero = (props) => (
  <Section $row={true} $nopadding={true}>
    <HeroContentWrapper>
      <LeftSection>
        <SectionTitle $main={true} $center={false}>
          Hello! <br />
          I'm Ayed
        </SectionTitle>
        <SectionText>
          Software Engineer at EllisDon | Prev @ RBC | Computer Science at McMaster University
        </SectionText>
        <Button onClick={() => window.open('https://drive.google.com/file/d/1FRyXDTNu9Ercqb1O2OHxRyb7qH0LW1_G/view?usp=sharing', '_blank')}>My Resume</Button>
      </LeftSection>
      <MemojiImage 
        src="https://ayednaber.github.io/portfolio/images/ayed-memoji.png" 
        alt="Ayed Memoji" 
      />
    </HeroContentWrapper>
  </Section>
);

export default Hero;