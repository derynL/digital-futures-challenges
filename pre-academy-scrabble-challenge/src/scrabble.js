"use strict";
let letterPoints = {
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
    if (word == null) {
      this.word = "";
    } else {
      this.word = word.toLowerCase();
      // Ensure all letters in the given word are lower case to fulfil strict equality
    }
  }
  score() {
    let i,
      sum = 0;
    for (i = 0; i < this.word.length; i++) {
      sum += letterPoints[this.word[i]] || 0;
      // Iterate through the given word; check each letter against the key value pairs in the letterPoints object.
      // Assign and add up the appropriate points at the given indexes, or assign 0 if unknown characters are found.
    }
    console.log(sum);
    return sum;
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
