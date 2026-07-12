export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  organization: string;
  summary: string;
  challenge: string;
  constraints: readonly string[];
  approach: readonly string[];
  outcome: string;
  role: string;
  disclosureNote: string;
};

export const caseStudies = [
  {
    slug: 'decomposing-payment-processor-service',
    title: 'Decomposing a coupled payment-processor service',
    eyebrow: 'Architecture hardening',
    organization: 'Strictly',
    summary:
      'Turned an oversized processor service into focused, independently testable modules behind a stable facade.',
    challenge:
      'Processor responsibilities had accumulated in one tightly coupled service, increasing the cost and risk of certification and production changes.',
    constraints: [
      'Preserve externally observable behavior during the decomposition.',
      'Keep callers behind the existing facade while responsibilities moved.',
      'Improve testability without a broad platform rewrite.',
    ],
    approach: [
      'Identified cohesive processor responsibilities and extracted focused modules.',
      'Retained a stable facade so callers did not absorb the refactor.',
      'Made the extracted responsibilities independently testable.',
    ],
    outcome:
      'Processor logic became less coupled and independently testable while callers continued to use the stable facade.',
    role: 'Architecture direction, plan-driven decomposition, review, and delivery leadership.',
    disclosureNote:
      'Details are intentionally limited to protect client and platform confidentiality.',
  },
] as const satisfies readonly CaseStudy[];

export function getCaseStudy(slug: string) {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
}
