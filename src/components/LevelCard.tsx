import { Link } from 'react-router';
import type { LevelInfo } from '../types';

interface LevelCardProps {
  level: LevelInfo;
}

export function LevelCard({ level }: LevelCardProps) {
  return (
    <Link
      to={`/${level.key}`}
      className={`block rounded-2xl border border-gray-200 p-8 transition-all duration-200 ${level.bgColor} ${level.hoverColor} hover:shadow-lg hover:scale-[1.02]`}
    >
      <h2 className={`text-2xl font-bold ${level.color}`}>{level.title}</h2>
      <p className="mt-2 text-gray-600">{level.description}</p>
      <p className="mt-4 text-sm text-gray-400">{level.questionCount} questions</p>
    </Link>
  );
}
