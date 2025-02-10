export default function cell(bit: boolean) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return bit ? '' : '◼';
    // return bit ? '✅' : '◼️';

  }
  return bit ? '✅' : '◻️';
}