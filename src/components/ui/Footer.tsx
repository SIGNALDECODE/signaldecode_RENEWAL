import styles from "@/assets/styles/components/Footer.module.scss";
import { footer } from "@/data/ui/footer";
import type { FooterField } from "@/types/ui";

function Field({ label, value }: FooterField) {
  return (
    <div className={styles.field}>
      <p className={styles.fieldLabel}>{label}</p>
      <p className={styles.fieldValue}>{value}</p>
    </div>
  );
}

export default function Footer() {
  const sourceFields = footer.source.fields;
  const infoFields = footer.info.fields;
  const infoRows = [
    infoFields.slice(0, 2),
    infoFields.slice(2, 4),
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cols}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{footer.source.title}</h3>
            {sourceFields.map((f) => (
              <Field key={f.label} {...f} />
            ))}
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>{footer.info.title}</h3>
            {infoRows.map((row, i) => (
              <div key={i} className={styles.row}>
                {row.map((f) => (
                  <Field key={f.label} {...f} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{footer.copyright}</p>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className={styles.bigText}>
                  {footer.marquee}&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
