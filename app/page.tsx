import {
  Header,
  Hero,
  Topic,
  TopicList,
  Schedule,
  Questions,
  Partners,
  Footer,
} from './2023/container';
import { SectionDivider, SectionGradient } from './2023/components';

export default function Home() {
  return (
    <main className='main'>
      <Header />
      <Hero />
      <SectionDivider name='o wydarzeniu' />
      <Topic />
      <SectionGradient />
      <SectionDivider name='tematy' />
      <TopicList />
      <SectionGradient />
      <SectionDivider name='harmonogram' />
      <Schedule />
      <SectionGradient />
      <SectionDivider name='zapisy' />
      <Questions />
      <SectionGradient />
      <SectionDivider name='partnerzy' />
      <Partners />
      <Footer />
    </main>
  );
}
