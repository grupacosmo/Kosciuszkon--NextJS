import { Header, Hero } from '@/app/2023/container';
import { SectionDivider } from './2023/components';

export default function Home() {
  return (
    <main className='main'>
      <Header />
      <Hero />
      <SectionDivider name='o wydarzeniu' />
      Hello COSMO PK !
    </main>
  );
}
