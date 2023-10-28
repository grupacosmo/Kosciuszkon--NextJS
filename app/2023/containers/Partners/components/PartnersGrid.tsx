import { PartnerElement, PartnerElementProps } from './PartnerElement';
import styles from './PartnersGrid.module.scss';

type PartnersGridProps = {
  partnerArray: PartnerElementProps[];
  categoryName?: string;
  elementClassName?: string;
  containerClassName?: string;
};

export function PartnersGrid({
  partnerArray,
  categoryName,
  elementClassName,
  containerClassName,
}: PartnersGridProps) {
  return (
    <article className={styles.container}>
      {categoryName && <h4 className={styles.header}>{categoryName}</h4>}
      <div className={containerClassName}>
        {partnerArray.map((element) => (
          <PartnerElement
            key={element.id}
            className={elementClassName}
            {...element}
          />
        ))}
      </div>
    </article>
  );
}
