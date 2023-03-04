export class Kata {
  static dnaStrand(dna: string) {
    const complementaryDNA = Object.freeze({
      A: "T",
      T: "A",
      C: "G",
      G: "C",
    });

    const mappedDNA = dna
      .split("")
      .map(
        (dnaSymbol) =>
          complementaryDNA[dnaSymbol as keyof typeof complementaryDNA]
      );
    return mappedDNA.join("");
  }
}
