import { Link } from 'react-router';
import type { Level } from '../types';

interface NavigationProps {
  currentIndex: number;
  total: number;
  level: Level;
  onPrev: () => void;
  onNext: () => void;
  onRandom: () => void;
}

export function Navigation({ currentIndex, total, level, onPrev, onNext, onRandom }: NavigationProps) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 pb-4">
      <div className="flex items-center gap-4">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          &larr; Prev
        </button>
        <span className="text-sm tabular-nums text-gray-400">
          {currentIndex + 1} / {total}
        </span>
        <button
          onClick={onNext}
          disabled={currentIndex === total - 1}
          className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next &rarr;
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onRandom}
          className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          Random
        </button>
        <Link
          to={`/${level}/all`}
          className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          All Questions
        </Link>
      </div>
    </div>
  );
}
