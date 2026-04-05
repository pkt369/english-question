// Design Ref: §5.4 — QuestionPage: back button, question card, navigation, bottom ad
// Plan SC: FR-02 to FR-05, FR-08, FR-09, FR-10

import { useState, useCallback, useMemo } from 'react';
import { useParams, useSearchParams, Navigate } from 'react-router';
import { QuestionCard } from '../components/QuestionCard';
import { Navigation } from '../components/Navigation';
import { BackButton } from '../components/BackButton';
import { AdBanner } from '../components/AdBanner';
import { questions } from '../data';
import { LEVELS } from '../types';
import type { Level } from '../types';

export function QuestionPage() {
  const { level } = useParams<{ level: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const levelInfo = LEVELS.find((l) => l.key === level);
  const levelQuestions = level ? questions[level as Level] : undefined;

  const initialIndex = useMemo(() => {
    const q = searchParams.get('q');
    if (q) {
      const parsed = parseInt(q, 10);
      if (parsed >= 1 && parsed <= (levelQuestions?.length ?? 0)) {
        return parsed - 1;
      }
    }
    return Math.floor(Math.random() * (levelQuestions?.length ?? 1));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
    setSearchParams({});
  }, [setSearchParams]);

  const handleNext = useCallback(() => {
    setCurrentIndex((i) => Math.min((levelQuestions?.length ?? 1) - 1, i + 1));
    setSearchParams({});
  }, [levelQuestions, setSearchParams]);

  const handleRandom = useCallback(() => {
    const total = levelQuestions?.length ?? 1;
    let next: number;
    do {
      next = Math.floor(Math.random() * total);
    } while (next === currentIndex && total > 1);
    setCurrentIndex(next);
    setSearchParams({});
  }, [currentIndex, levelQuestions, setSearchParams]);

  if (!levelInfo || !levelQuestions) {
    return <Navigate to="/" replace />;
  }

  const question = levelQuestions[currentIndex];

  return (
    <div className="flex min-h-dvh flex-col pb-[110px]">
      <BackButton to="/" label={levelInfo.title} />
      <QuestionCard text={question.text} />
      <Navigation
        currentIndex={currentIndex}
        total={levelQuestions.length}
        level={levelInfo.key}
        onPrev={handlePrev}
        onNext={handleNext}
        onRandom={handleRandom}
      />
      <AdBanner variant="banner" />
    </div>
  );
}
