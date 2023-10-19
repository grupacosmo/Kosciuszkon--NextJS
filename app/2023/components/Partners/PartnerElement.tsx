import Image, { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export type PartnerElementProps = {
  id: number;
  img: StaticImageData;
  link: string;
  partnerName: string;
  className?: string;
};

export function PartnerElement({
  img,
  link,
  partnerName,
  className,
}: PartnerElementProps): ReactElement {
  return (
    <div className={className}>
      <a href={link} target='_blank' rel='noreferrer' aria-label={partnerName}>
        <Image src={img} alt={partnerName} />
      </a>
    </div>
  );
}
