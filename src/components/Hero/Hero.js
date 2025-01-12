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
        New Grad Computer Science @ McMaster U | Full Stack Developer
      </SectionText>
      <Button onClick={() => window.open('https://drive.google.com/file/d/1B0uAsfz5D10Jkja3guGLQGjNEinnrYuo/view?usp=sharing', '_blank')}>My Resume</Button>
    </LeftSection>
    {/* <img src="/images/ayedmemoji.png" style={{objectFit: "contain", width: 450, marginLeft: 20}} /> */}
  </Section>
);

export default Hero;