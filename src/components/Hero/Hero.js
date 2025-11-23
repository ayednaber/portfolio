import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section $row={true} $nopadding={true}>
    <LeftSection>
      <SectionTitle $main={true} $center={true}>
        Hello! <br />
        I'm Ayed
      </SectionTitle>
      <SectionText>
        Software Engineer at EllisDon | Prev @ RBC | Computer Science at McMaster University
      </SectionText>
      <Button onClick={() => window.open('https://drive.google.com/file/d/1FRyXDTNu9Ercqb1O2OHxRyb7qH0LW1_G/view?usp=sharing', '_blank')}>My Resume</Button>
    </LeftSection>
    {/* <img src="/images/ayedmemoji.png" style={{objectFit: "contain", width: 450, marginLeft: 20}} /> */}
  </Section>
);

export default Hero;