import styles from "@/assets/styles/components/web/WebProjectDetail.module.scss";
import type { WebProjectDetail as ProjectDetail } from "@/types/web";

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

type Props = { project: ProjectDetail };

export default function WebProjectDetail({ project }: Props) {
  const {
    pageNumber,
    brandAccent,
    heroBg,
    hero,
    coreValue,
    typography,
    color,
    intro,
    mockPreview,
  } = project;

  const totalFlex = color.swatches.reduce((a, s) => a + s.flex, 0);

  return (
    <main
      className={styles.page}
      style={{ ["--brand" as string]: brandAccent }}
    >
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />

      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroTitleBlock}>
            <h1 className={styles.heroTitle}>{hero.title}</h1>
            {hero.subtitle && (
              <p className={styles.heroSubtitle}>{hero.subtitle}</p>
            )}
          </div>
          <div className={styles.heroBody}>
            <div className={styles.heroParagraphs}>
              {hero.paragraphs.map((p, i) => (
                <p key={i} className={styles.heroParagraph}>
                  {p}
                </p>
              ))}
            </div>
            <dl className={styles.heroMeta}>
              {hero.meta.map((m) => (
                <div key={m.label} className={styles.heroMetaRow}>
                  <dt className={styles.heroMetaLabel}>{m.label}</dt>
                  <dd className={styles.heroMetaValue}>{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.pill}>{coreValue.eyebrow}</span>
            <div className={styles.sectionHeadRow}>
              <h2 className={styles.headline}>
                {renderInlineBold(coreValue.title)}
              </h2>
              {coreValue.subParagraph && (
                <p className={styles.subParagraph}>{coreValue.subParagraph}</p>
              )}
            </div>
          </header>
          <div className={styles.coreGrid}>
            {coreValue.cards.map((c, i) => (
              <article
                key={c.num}
                className={`${styles.coreCard} ${
                  i === 0 ? styles.coreCardFirst : ""
                } ${i === coreValue.cards.length - 1 ? styles.coreCardLast : ""}`}
              >
                <div className={styles.coreIcon}>
                  {c.icon && <img src={c.icon} alt="" />}
                </div>
                <div className={styles.coreText}>
                  <span className={styles.coreNum}>{c.num}.</span>
                  <h3 className={styles.coreTitle}>{c.title}</h3>
                  <p className={styles.coreDesc}>{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.pill}>{typography.eyebrow}</span>
            <div className={styles.sectionHeadRow}>
              <h2 className={styles.headlineLg}>
                {renderInlineBold(typography.title)}
              </h2>
              {typography.subParagraph && (
                <p className={styles.subParagraph}>{typography.subParagraph}</p>
              )}
            </div>
          </header>
          <div className={styles.typoStack}>
            {typography.decoration ? (
              (() => {
                const s = typography.specimens[0];
                if (!s) return null;
                return (
                  <div className={`${styles.typoRow} ${styles.typoVariantBold}`}>
                    <div className={styles.typoLeft}>
                      <p className={styles.typoDisplay}>{s.display}</p>
                      <p className={styles.typoSample}>{s.sample}</p>
                    </div>
                    <p className={styles.typoDecoration}>
                      {typography.decoration}
                    </p>
                  </div>
                );
              })()
            ) : (
              typography.specimens.map((s) => {
                const variant =
                  s.weight.toLowerCase() === "bold"
                    ? styles.typoVariantBold
                    : s.weight.toLowerCase() === "medium"
                    ? styles.typoVariantMedium
                    : styles.typoVariantRegular;
                return (
                  <div key={s.weight} className={`${styles.typoRow} ${variant}`}>
                    <div className={styles.typoLeft}>
                      <p className={styles.typoDisplay}>{s.display}</p>
                      <p className={styles.typoSample}>{s.sample}</p>
                    </div>
                    <div className={styles.typoSpecs}>
                      {chunkBy(s.specs, 2).map((row, i) => (
                        <div key={i} className={styles.typoSpecsRow}>
                          {row.map((sp) => (
                            <div key={sp.label} className={styles.typoSpecChip}>
                              <span className={styles.typoSpecValue}>
                                {sp.value}
                              </span>
                              <span className={styles.typoSpecLabel}>
                                {sp.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.pill}>{color.eyebrow}</span>
            <div className={styles.sectionHeadRow}>
              <h2 className={styles.headlineLg}>
                {renderInlineBold(color.title)}
              </h2>
              {color.subParagraph && (
                <p className={styles.subParagraph}>{color.subParagraph}</p>
              )}
            </div>
          </header>
          <div className={styles.swatchStrip}>
            {color.swatches.map((sw) => (
              <div
                key={sw.hex}
                className={`${styles.swatchChip} ${
                  sw.bordered ? styles.swatchChipBordered : ""
                }`}
                style={{
                  flexGrow: sw.flex / totalFlex,
                  background: sw.hex,
                }}
              >
                <div
                  className={`${styles.swatchLabel} ${
                    sw.labelOnDark ? styles.swatchLabelDark : styles.swatchLabelLight
                  }`}
                >
                  <span className={styles.swatchKey}>Hex Code:</span>
                  <span className={styles.swatchHex}>{sw.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.intro}>
          <p className={styles.introEyebrow}>{intro.eyebrow}</p>
          <p className={styles.introParagraph}>{intro.paragraph}</p>
        </section>
      </div>

      <section
        className={`${styles.mockBlock} ${
          mockPreview.bleed ? styles.mockBlockBleed : ""
        }`}
      >
        <div
          className={`${styles.mockCard} ${
            mockPreview.bleed ? styles.mockCardBleed : ""
          }`}
        >
          <img
            src={mockPreview.src}
            alt={mockPreview.alt}
            className={styles.mockImg}
          />
        </div>
      </section>
    </main>
  );
}

function chunkBy<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
