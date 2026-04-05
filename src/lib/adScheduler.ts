// Design Ref: §5 — Ad placement: first at 10, then random 10-14 intervals

const AD_FIRST_INDEX = 10;
const AD_MIN_GAP = 10;
const AD_MAX_GAP = 14;

export function generateAdIndices(totalQuestions: number): Set<number> {
  const indices = new Set<number>();
  let current = AD_FIRST_INDEX;

  while (current < totalQuestions) {
    indices.add(current);
    const gap = AD_MIN_GAP + Math.floor(Math.random() * (AD_MAX_GAP - AD_MIN_GAP + 1));
    current += gap;
  }

  return indices;
}
