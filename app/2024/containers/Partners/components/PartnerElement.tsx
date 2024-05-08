import { ReactElement } from 'react';


export type PartnerElementProps = {
  id: string;
  img: string;
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
        <img src={img} alt={partnerName} />
      </a>
    </div>
  );
}
