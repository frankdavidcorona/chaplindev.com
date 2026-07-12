'use client';

import { track } from '@vercel/analytics/react';

import type { AnchorHTMLAttributes } from 'react';

type EventProperties = Record<string, string | number | boolean | null>;

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventProperties?: EventProperties;
};

export function TrackedLink({
  eventName,
  eventProperties,
  onClick,
  ...anchorProps
}: TrackedLinkProps) {
  return (
    <a
      {...anchorProps}
      onClick={event => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          track(eventName, eventProperties);
        }
      }}
    />
  );
}
