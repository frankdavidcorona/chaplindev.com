import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readSource = path =>
  readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('the social preview image is 1200 by 630', async () => {
  const image = await readFile(new URL('../public/og.png', import.meta.url));

  assert.equal(image.toString('ascii', 1, 4), 'PNG');
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
});

test('root metadata describes the preview image for Open Graph and Twitter', async () => {
  const source = await readSource('app/layout.tsx');

  assert.match(source, /width:\s*1200/);
  assert.match(source, /height:\s*630/);
  assert.match(source, /alt:/);
  assert.match(source, /twitter:\s*{[\s\S]*description,[\s\S]*images:/);
});

test('case studies publish route-specific Open Graph and Twitter metadata', async () => {
  const source = await readSource('app/work/[slug]/page.tsx');

  assert.match(source, /openGraph:\s*{[\s\S]*images:/);
  assert.match(
    source,
    /twitter:\s*{[\s\S]*title:\s*caseStudy\.title,[\s\S]*description:\s*caseStudy\.summary,[\s\S]*images:/
  );
});
