import { ReactElement } from 'react';

export type PartnerElementProps = {
  id: string;
  img: string;
  link: string;
  partnerName: string;
  customClass?: string;
};

export function PartnerElement({
  img,
  link,
  partnerName,
  customClass,
}: PartnerElementProps): ReactElement {
  return (
    <div className={customClass}>
      <a href={link} target='_blank' rel='noreferrer' aria-label={partnerName}>
        <img src={img} alt={partnerName} />
      </a>
    </div>
  );
}
