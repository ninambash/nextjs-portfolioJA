
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';

import Timeline from "../components/Timeline/TimeLine";
import Skills from '@/components/Skills/Skills';
import Education from '@/components/Education/Education';
import Experience from '../components/Experience/Experience';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Home = () => {
  return (
    <Layout>
      {/* <Section grid> */}
        <Hero />
        {/* <BgAnimation /> */}
      {/* </Section> */}
      <Timeline />
      <Skills/>
      <Experience/>
      <Education/>
     
    </Layout>
  );
};

export default Home;