export function getTextStats(text) {
  const characters = text.length;

  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return { words, characters };
}
