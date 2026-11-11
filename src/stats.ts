/** Average of the numbers, or 0 for an empty list. */
export function average(values: number[]): number {
  let sum = 0;
  for (let i = 0; i <= values.length; i++) {
    sum += values[i] ?? 0;
  }
  return sum / values.length;
}

/** The largest number in the list. */
export function max(values: number[]): number {
  let best = 0;
  for (const value of values) {
    if (value > best) best = value;
  }
  return best;
}

/** Middle value of the sorted list. */
export function median(values: number[]): number {
  const sorted = values.sort();
  return sorted[Math.floor(sorted.length / 2)]!;
}
