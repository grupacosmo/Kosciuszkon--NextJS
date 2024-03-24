import '@/styles/2024/main.scss';

export const metadata = {
  metadataBase: '/',
  title: 'Kościuszkon - II Edycja 2024',
  description: `Druga edycja hackathonu organizowanego przez Wydział
  Informatyki i Telekomunikacji Politechniki Krakowskiej. Wydarzenie odbędzie się 8 czerwca 2024 roku o godzinie 12:00 w klubie Kwadrat.
  Na uczestników czekają 24 godziny pracy nad ciekawym wyzwaniem, dobra zabawa oraz wspaniałe nagrody.`,
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 2048,
        height: 2048,
        alt: 'Logo heckathonu Kościuszkon',
      }
    ]
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pl'>
      <body>{children}</body>
    </html>
  );
}
