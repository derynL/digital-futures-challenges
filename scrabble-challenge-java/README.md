# Scrabble Challenge in Java

# Task

Given a word, compute the scrabble score for that word.

### Letter Values


| Letter                        | Value  |
| ----                          |  ----  |
| A, E, I, O, U, L, N, R, S, T  |     1  |
| D, G                          |     2  |
| B, C, M, P                    |     3  |
| F, H, V, W, Y                 |     4  |
| K                             |     5  |
| J, X                          |     8  |
| Q, Z                          |     10 |

Example
"cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A, twice
- 3 points for B, twice
- 2 points for G
- 1 point for E

And to total:

```
3 + 2x1 + 2x3 + 2 + 1
= 3 + 2 + 6 + 3
= 14
```

## Acceptance Criteria

```java

class ScrabbleRunner {

   public static void main(String[] args) {
      Scrabble scrabble = new Scrabble("");
      scrabble.score();   // => 0

      scrabble = new Scrabble(null);
      scrabble.score();   // => 0

      scrabble = new Scrabble("a");
      scrabble.score(); // => 1

      scrabble = new Scrabble("f");
      scrabble.score(); // => 4

      scrabble = new Scrabble("street");
      scrabble.score(); // =>, 6

      scrabble = new Scrabble("quirky");
      scrabble.score(); // => 22

      scrabble = new Scrabble("OXYPHENBUTAZONE");
      scrabble.score(); // => 41
   }
}
```

## Extended Acceptance Criteria
> Each `Scrabble` method should be no more than 5 lines and contain no more than 5 operations.

> You can play a double or a triple letter.

> You can play a double or a triple word.

## Project Review and Roadmap

- My main takeaways from this project:
   - Taking a challenge I had already completed in JavaScript and making it work/ improving upon the original in Java really helped me to draw clear distinctions between the two languages, as well as improving my understanding of their operational similarities.
   - As the tests were already written, I had to think in terms of code that would pass those tests, and why it should.
   - The extended criteria offered a great opportunity to work on more detailed aspects of Java, such as overloading constructor methods.
- What I would do differently if I were to do this again:
   - I would break my score method into several smaller private helper methods in order to maintain single responsibility principles
   - I would write my own tests in order to get a better grasp of testing frameworks for Java
