import { type ReactElement } from 'react';
import { IconType } from 'react-icons';

type Contact = {
  id: number;
  href: string;
  label: string;
  Icon: IconType;
};

type FooterContactsProps = {
  contactArray: Contact[];
  containerClassName?: string;
  className?: string;
};

export function FooterContacts({
  contactArray,
  containerClassName,
  className,
}: FooterContactsProps): ReactElement {
  return (
    <ul className={containerClassName}>
      {contactArray.map(({ id, href, label, Icon }) => (
        <li key={id} className={className}>
          <a href={href}>
            <Icon />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
