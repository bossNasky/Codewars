String.prototype.toJadenCase = function () {
  // Your code here
  const jadenCase = this.split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
  return jadenCase;
};

interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}
