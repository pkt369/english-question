import { beginnerQuestions } from './beginner';
import { intermediateQuestions } from './intermediate';
import { advancedQuestions } from './advanced';
import { expertQuestions } from './expert';
import type { Level, Question } from '../types';

export const questions: Record<Level, Question[]> = {
  beginner: beginnerQuestions,
  intermediate: intermediateQuestions,
  advanced: advancedQuestions,
  expert: expertQuestions,
};
