import type { MetadataRoute } from 'next';

import { caseStudies } from './content/case-studies';

const baseUrl = 'https://chaplindev.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl },
    ...caseStudies.map(caseStudy => ({
      url: `${baseUrl}/work/${caseStudy.slug}`,
    })),
  ];
}
