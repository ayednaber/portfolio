import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        I'm Ayed
      </SectionTitle>
      <SectionText>
        Final Year Computer Science at McMaster U | Seeking SWE New Grad Roles
      </SectionText>
      <Button onClick={() => window.open('https://drive.google.com/file/d/1kIVIPGc4rMMo1i98Rc2uBaO2WfIOVvRn/view?usp=sharing', '_blank')}>My Resume</Button>
    </LeftSection>
    {/* <img src="/images/ayedmemoji.png" style={{objectFit: "contain", width: 450, marginLeft: 20}} /> */}
  </Section>
);

export default Hero;