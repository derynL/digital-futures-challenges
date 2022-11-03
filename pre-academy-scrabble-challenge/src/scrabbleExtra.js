"use strict";

const letterPoints = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10,
};

class Scrabble {
  constructor(word) {
    if (word === null) {
      this.word = "";
    } else {
      this.word = word.toLowerCase();
      // Ensure all letters in the given word are lower case to fulfil strict equality
    }
  }
  score() {
    let currentScore = 0, // This will be the score based purely on the letter points.
      accumulator = 0, // This will add any additional points obtained from double/ triple letter/ word scores.
      doubleLetter = Math.floor(Math.random() * 12) + 1, // generates approx. 1 in 12 chance of a double letter score
      tripleLetter = Math.floor(Math.random() * 23) + 1, // generates approx. 1 in 23 chance of a triple letter score
      doubleWord = Math.floor(Math.random() * 17) + 1, // generates approx. 1 in 17 chance of a double word score
      tripleWord = Math.floor(Math.random() * 34) + 1; // generates approx. 1 in 34 chance of a triple word score
    let letterSelector =
      this.word[Math.floor(Math.random() * this.word.length)];
    let dl, tl, dw, tw;

    for (let i = 0; i < this.word.length; i++) {
      currentScore += letterPoints[this.word[i]] || 0;
      // Iterate through the given word; check each letter against the key value pairs in the letterPoints object.
      // Assign and add up the appropriate points at the given indexes, or assign 0 if unknown characters are found or string is empty or null
      // If the double/ triple letter/word variables match the given numbers, appropriate points are added to the score.
      if (currentScore > 0) {
        if (doubleLetter === 12) {
          accumulator = letterPoints[letterSelector];
          dl = true;
        } else if (tripleLetter === 23) {
          accumulator = letterPoints[letterSelector] * 2;
          tl = true;
        } else if (doubleWord === 17) {
          accumulator = currentScore;
          dw = true;
        } else if (tripleWord === 34) {
          accumulator = currentScore * 2;
          tw = true;
        }
      }
    }
    // console.log(
    //   `${doubleLetter} | ${tripleLetter} | ${doubleWord} | ${tripleWord}`
    // );
    let totalScore = currentScore + accumulator;
    if (currentScore === 0) {
      console.log(
        `That is not a word I recognise. You score ${currentScore}.\n************************************************************************`
      );
    } else if (totalScore === currentScore) {
      console.log(
        `Your word, '${this.word}' scored ${currentScore}. \nNo additional points\n************************************************************************`
      );
    } else if (dl) {
      console.log(
        `Your word, '${this.word}' scored ${currentScore}. You also scored double points on letter '${letterSelector}'. \nAdditional points: ${accumulator} \nTotal points: ${totalScore}\n************************************************************************`
      );
    } else if (tl) {
      console.log(
        `Your word, '${this.word}' scored ${currentScore}. You also scored triple points on letter '${letterSelector}'. \nAdditional points: ${accumulator} \nTotal points: ${totalScore}\n************************************************************************`
      );
    } else if (dw) {
      console.log(
        `Your word, '${this.word}' scored ${currentScore}. You also got a double word score. \nAdditional points: ${accumulator} \nTotal points: ${totalScore}\n************************************************************************`
      );
    } else if (tw) {
      console.log(
        `Your word, '${this.word}' scored ${currentScore}. You also got a triple word score. \nAdditional points: ${accumulator} \nTotal points: ${totalScore}\n************************************************************************`
      );
    }
  }
}

let test1 = new Scrabble("");
test1.score(); // => 0

let test2 = new Scrabble(" \t\n");
test2.score(); // => 0

let test3 = new Scrabble(null);
test3.score(); // => 0

let test4 = new Scrabble("a");
test4.score(); // => 1

let test5 = new Scrabble("f");
test5.score(); // => 4

let test6 = new Scrabble("street");
test6.score(); // => 6

let test7 = new Scrabble("quirky");
test7.score(); // => 22

let test8 = new Scrabble("OXYPHENBUTAZONE");
test8.score(); // => 41

export default Scrabble;
