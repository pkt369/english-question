// Design Ref: §3 — Data Model

export type Level = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Question {
  id: number;
  text: string;
  level: Level;
}

export interface LevelInfo {
  key: Level;
  title: string;
  description: string;
  questionCount: number;
  color: string;
  bgColor: string;
  hoverColor: string;
}

export const LEVELS: LevelInfo[] = [
  {
    key: 'beginner',
    title: 'Beginner',
    description: 'Simple daily life questions to get you talking',
    questionCount: 100,
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    hoverColor: 'hover:bg-emerald-100',
  },
  {
    key: 'intermediate',
    title: 'Intermediate',
    description: 'Share your opinions and experiences',
    questionCount: 100,
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    hoverColor: 'hover:bg-blue-100',
  },
  {
    key: 'advanced',
    title: 'Advanced',
    description: 'Thought-provoking topics that challenge your thinking',
    questionCount: 100,
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
    hoverColor: 'hover:bg-purple-100',
  },
  {
    key: 'expert',
    title: 'Expert',
    description: 'Deep philosophical questions for meaningful discussions',
    questionCount: 100,
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    hoverColor: 'hover:bg-rose-100',
  },
];
