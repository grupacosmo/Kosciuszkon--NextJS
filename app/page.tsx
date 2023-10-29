import {
  Header,
  Hero,
  Informations,
  TopicList,
  Schedule,
  Questions,
  Partners,
  Footer,
  SectionDivider,
  SectionGradient,
} from './2023/containers';

export default function Home() {
  return (
    <main className='main'>
      <Header />
      <Hero />
      <SectionDivider name='o wydarzeniu' />
      <Informations />
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
