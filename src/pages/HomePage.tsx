// Design Ref: §5.4 — HomePage: 4 LevelCards, no title, bottom ad

import { LevelCard } from '../components/LevelCard';
import { AdBanner } from '../components/AdBanner';
import { LEVELS } from '../types';

export function HomePage() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col px-4 py-12 pb-[110px]">
      <div className="grid gap-4 sm:grid-cols-2">
        {LEVELS.map((level) => (
          <LevelCard key={level.key} level={level} />
        ))}
      </div>
      <AdBanner variant="banner" />
    </div>
  );
}
