import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { BiBrain, BiCameraHome, BiMobile } from 'react-icons/bi';
import {FaTools} from 'react-icons/fa';
import {AiOutlineSetting, AiFillCloud} from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies, covering all aspects of the development stack.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, Angular, HTML, CSS, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Java, Python, Node.js, Express, MongoDB, SQL, Spring Boot
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiMobile size='3rem' />
        <ListContainer>
          <ListTitle>Mobile Development</ListTitle>
          <ListParagraph>
            React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaTools size='3rem' />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            VS Code, Visual Studio, Git, GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineSetting size='3rem' />
        <ListContainer>
          <ListTitle>Scripting / Automation</ListTitle>
          <ListParagraph>
            Bash, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillCloud size='3rem' />
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Azure, OpenShift, PCF, Hashicorp Vault, Docker, Kubernetes
          </ListParagraph>
        </ListContainer>
      </ListItem>
      </List>
  </Section>
);

export default Technologies;
