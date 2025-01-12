import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head';

const Home = () => {
  return (
    <>
    <Head>
      <title>Ayed Naber</title>
    </Head>
    <Layout>
      <Section $grid={true}>
        <Hero />
        <BgAnimation />
      </Section>
      <Experience />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
    </>
  );
};

export default Home;
