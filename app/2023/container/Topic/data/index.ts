import kwadrat from '@/public/2023/backgrounds/kwadrat.png';
import kodowanie from '@/public/2023/backgrounds/kodowanie.webp';
import prelekcja_1 from '@/public/2023/backgrounds/prelekcje.jpg';
import prelekcja_2 from '@/public/2023/backgrounds/prelekcje2.webp';

export const sliderContent = [
  {
    id: '1',
    slide: {
      src: kwadrat,
      alt: 'Budynek w którym mieści się studio kwadrat.',
    },
    content: {
      title: 'I Edycja',
      text: `Zapraszamy do wzięcia udziału w pierwszej edycji kościuszkonu
      organizowanego przez WRSS WIiT oraz Fundację Samorządu Studentów
      Politechniki we współpracy z KN COSMO PK. Na wydarzeniu
      przewidzieliśmy wiele atrakcji, gdzie główną z nich jest prawie
      całodniowy Hackathon a oprócz tego prelekcje i wykłady prowadzone
      przez przedstawicieli firm oraz naszej uczelni, targi pracy z
      przedstawicielami firm IT i pokrewnych a także mini konkursy i
      pokazy.`,
    },
  },
  {
    id: '2',
    slide: {
      src: kodowanie,
      alt: 'Uczestnicy heckathonu, którzy piszą kod.',
    },
    content: {
      title: 'Hackathon',
      text: `Chcesz przetestować swoje umiejętności i stworzyć praktyczną
      aplikację? A może jesteś poprostu kreatywny, potrafisz dobrze
      sprzedać pomysł i szybko się uczysz nowych technologii? Zbierz
      drużynę lub zapisz się, a my ją dla Ciebie znajdziemy. W
      tegorocznej edycji przewidzieliśmy 3 kategorie projektów, które
      zostają udostępnione już w krótce. Dla uczestników zapewniamy
      jedzie i napoje oraz miejsce do odpoczynku.`,
    },
  },
  {
    id: '3',
    slide: {
      src: prelekcja_1,
      alt: 'Sala wykładowa.',
    },
    content: {
      title: 'Prelekcje i wykłady',
      text: `Czy wiedziałeś, że rekruterzy coraz częściej zwracają uwagę na
      umiejętności miękkie u kandydatów do pracy? Będzie to jeden z
      tematów prelekcji, które odbędą się na naszym wydarzeniu. Oprócz
      tego nie zabraknie wykładów i warsztatów technicznych,
      dotyczacych technologii wykorzystywanych w programowaniu,
      Machine Learningu i Sztucznej inteligencji oraz problemów z tym
      związanych. Szczegóły znajdują się w
      <a href='#harmonogram' style='color: #1eca94; text-decoration: underline;'> harmonogramie</a> wydarzenia`,
    },
  },
  {
    id: '4',
    slide: {
      src: prelekcja_2,
      alt: 'Sala wykładowa.',
    },
    content: {
      title: 'Targi pracy i inne atrakcje',
      text: `Na wydarzeniu nie zabraknie innych atrakcji. Jedną z nich będą
      targi pracy oraz stoiska firm, na których będziecie mogli
      porozmawiać z przedstawicielami firm na temat pracy oraz zadać
      dowolne pytania. Oprócz tego mini konkursy organizowane przez
      nasz samorząd zachęcą do rywalizacji i do sprawdzenia swojej
      wiedzy. Będzie też dostępne stoisko z fotobudką oraz okularami
      do rozszerzonej rzeczywistości.`,
    },
  },
];
