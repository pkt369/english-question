// Design Ref: §10.3 — AdSense integration via env variables
// Bottom banner: fixed to viewport bottom, 90px reserved
// Inline: 250px height, used in AllQuestionsPage

import { useEffect, useRef } from 'react';

interface AdBannerProps {
  variant: 'banner' | 'inline';
}

export function AdBanner({ variant }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const adsbygoogle = (window as any).adsbygoogle;
      if (adsbygoogle) {
        adsbygoogle.push({});
        pushed.current = true;
      }
    } catch {
      // AdSense not loaded — ad slot stays empty
    }
  }, []);

  const slotId = variant === 'banner'
    ? import.meta.env.VITE_ADSENSE_SLOT_BANNER
    : import.meta.env.VITE_ADSENSE_SLOT_INLINE;

  const clientId = import.meta.env.VITE_ADSENSE_CLIENT_ID;

  // If no AdSense config, render placeholder in dev
  if (!clientId) {
    if (variant === 'banner') {
      return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex h-[90px] items-center justify-center bg-gray-100 text-xs text-gray-400 border-t border-gray-200">
          Ad Banner Placeholder
        </div>
      );
    }
    return (
      <div className="my-4 flex h-[250px] items-center justify-center rounded-xl bg-gray-100 text-xs text-gray-400">
        Inline Ad Placeholder
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-white border-t border-gray-200">
        <div ref={adRef}>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '90px' }}
            data-ad-client={clientId}
            data-ad-slot={slotId}
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="my-4" ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', height: '250px' }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="fluid"
        data-ad-layout-key="-6t+ed+2i-1n-4w"
      />
    </div>
  );
}
