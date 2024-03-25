import { type ReactElement } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { type IconType } from 'react-icons';

type BaseLink = {
  id: string;
  href: string;
  label: string;
};

type IconLink = {
  id: string;
  href: string;
  label: string;
  Icon: IconType;
};

type ImageLink = {
  id: string;
  href: string;
  alt: string;
  src: string;
};

type FooterLinksProps = {
  baseLinks?: BaseLink[];
  iconLinks?: IconLink[];
  imageLinks?: ImageLink[];
  containerClassName?: string;
  className?: string;
};

export function FooterLinks({
  baseLinks,
  imageLinks,
  iconLinks,
  className,
  containerClassName,
}: FooterLinksProps): ReactElement {
  return (
    <ul className={containerClassName}>
      {baseLinks &&
        baseLinks.map(({ id, href, label }) => (
          <li key={id} className={className}>
            <a href={href} target='_blank' rel='noreferrer'>
              {label}
            </a>
          </li>
        ))}

      {iconLinks &&
        iconLinks.map(({ id, href, label, Icon }) => (
          <li key={id} className={className}>
            <a href={href} target='_blank' rel='noreferrer'>
              <Icon />
              {label}
            </a>
          </li>
        ))}
      {imageLinks &&
        imageLinks.map(({ id, href, alt, src }) => (
          <li key={id} className={className}>
            <a key={id} href={href} target='_blank' rel='noreferrer'>
              <img src={src} alt={alt} />
            </a>
          </li>
        ))}
    </ul>
  );
}
