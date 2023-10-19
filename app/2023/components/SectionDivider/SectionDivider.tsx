import classes from './SectionDivider.module.scss';

export function SectionDivider({ name }: { name: string }) {
  return (
    <div className={classes['section-divider']} id={name}>
      <div className={classes['section-divider__inner']}>
        <div className={classes['section-divider__title-outer']}>
          <div className={classes['section-divider__title-inner']}>
            <h3>{name.toUpperCase()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}


