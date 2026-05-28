import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Open Source</p>
        <h1 className={styles.headline}>David Pipeline</h1>
        <p className={styles.tagline}>
          Start with /product
        </p>
        <div className={styles.ctaGroup}>
          <a href="#get-started" className={styles.primaryCta}>
            Get Started
          </a>
          <a
            href="https://github.com/DavidMarom/david-pipeline"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryCta}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
