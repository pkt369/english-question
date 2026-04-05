// Design Ref: §5.4 — AllQuestionsPage: back button, all 100 questions, inline ads, bottom ad
// Plan SC: FR-06, FR-07

import { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router';
import { BackButton } from '../components/BackButton';
import { AdBanner } from '../components/AdBanner';
import { questions } from '../data';
import { LEVELS } from '../types';
import { generateAdIndices } from '../lib/adScheduler';
import type { Level } from '../types';

export function AllQuestionsPage() {
  const { level } = useParams<{ level: string }>();

  const levelInfo = LEVELS.find((l) => l.key === level);
  const levelQuestions = level ? questions[level as Level] : undefined;

  const adIndices = useMemo(
    () => generateAdIndices(levelQuestions?.length ?? 0),
    [levelQuestions?.length],
  );

  if (!levelInfo || !levelQuestions) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mx-auto min-h-dvh max-w-2xl px-4 pb-[110px]">
      <BackButton to={`/${levelInfo.key}`} label={levelInfo.title} />
      <h1 className={`px-4 pb-6 text-xl font-bold ${levelInfo.color}`}>
        All Questions — {levelInfo.title}
      </h1>
      <ol className="flex flex-col gap-2 px-4">
        {levelQuestions.map((q, i) => (
          <li key={q.id}>
            {adIndices.has(i) && <AdBanner variant="inline" />}
            <Link
              to={`/${levelInfo.key}?q=${q.id}`}
              className="block rounded-xl p-4 text-gray-700 transition-colors hover:bg-gray-50"
            >
              <span className="mr-3 text-sm text-gray-400">{q.id}.</span>
              {q.text}
            </Link>
          </li>
        ))}
      </ol>
      <AdBanner variant="banner" />
    </div>
  );
}
