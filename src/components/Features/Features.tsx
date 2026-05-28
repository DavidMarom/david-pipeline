import { FeatureCard } from "../FeatureCard/FeatureCard";
import type { Feature } from "./Features.types";
import styles from "./Features.module.css";

const FEATURES: Feature[] = [
  {
    id: "fast",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast by default",
    description:
      "Pre-wired with sensible defaults so you spend zero time on boilerplate and 100% on your product.",
  },
  {
    id: "composable",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="8" height="8" rx="2" />
        <rect x="14" y="2" width="8" height="8" rx="2" />
        <rect x="2" y="14" width="8" height="8" rx="2" />
        <rect x="14" y="14" width="8" height="8" rx="2" />
      </svg>
    ),
    title: "Composable",
    description:
      "Every stage of the pipeline is a small, swappable module. Extend, replace, or skip anything.",
  },
  {
    id: "developer-first",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    title: "Developer-first",
    description:
      "Built for the command line. Integrates with the tools you already use.",
  },
  {
    id: "open-source",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 01-9 9" />
      </svg>
    ),
    title: "Open source",
    description:
      "MIT licensed. Fork it, own it, ship it your way.",
  },
];

export function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Why David Pipeline</p>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
