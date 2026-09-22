export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s+/g).length;
  const minutes = Math.ceil(noOfWords / wordsPerMinute);
  return `${minutes} min read`;
}
