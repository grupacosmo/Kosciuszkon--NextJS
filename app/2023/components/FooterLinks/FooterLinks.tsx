import Image, { StaticImageData } from 'next/image';
import { type ReactElement } from 'react';
import { type IconType } from 'react-icons';

type BaseLink = {
  id: number;
  href: string;
  label: string;
};

type IconLink = {
  id: number;
  href: string;
  label: string;
  Icon: IconType;
};

type ImageLink = {
  id: number;
  href: string;
  alt: string;
  src: StaticImageData;
};

type FooterLinksProps = {
  baseLinks?: BaseLink[];
  iconLinks?: IconLink[];
  imageLinks?: ImageLink[];
};

export function FooterLinks({
  baseLinks,
  imageLinks,
  iconLinks,
}: FooterLinksProps): ReactElement {
  return (
    <>
      {baseLinks &&
        baseLinks.map(({ id, href, label }) => (
          <a key={id} href={href} target='_blank' rel='noreferrer'>
            {label}
          </a>
        ))}

      {iconLinks &&
        iconLinks.map(({ id, href, label, Icon }) => (
          <a key={id} href={href} target='_blank' rel='noreferrer'>
            <Icon />
            {label}
          </a>
        ))}
      {imageLinks &&
        imageLinks.map(({ id, href, alt, src }) => (
          <a key={id} href={href} target='_blank' rel='noreferrer'>
            <Image src={src} alt={alt} width={50} height={50}/>
          </a>
        ))}
    </>
  );
}
