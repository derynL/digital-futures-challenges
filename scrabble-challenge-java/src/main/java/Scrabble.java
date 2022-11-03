import org.jetbrains.annotations.Nullable;

import java.util.Map;
import java.util.HashMap;
public class Scrabble {
    private String word;
    private boolean invalidWord;
    private char[] lettersInWord;
    private boolean isDoubleWord;
    private boolean isTripleWord;
    private Character[] doubleLetter;
    private Character[] tripleLetter;
    private static final Map<Character, Integer> letterScores;
    static {
        Map<Character, Integer> scores = new HashMap<>();
        scores.put('a', 1);
        scores.put('b', 3);
        scores.put('c', 3);
        scores.put('d', 2);
        scores.put('e', 1);
        scores.put('f', 4);
        scores.put('g', 2);
        scores.put('h', 4);
        scores.put('i', 1);
        scores.put('j', 8);
        scores.put('k', 5);
        scores.put('l', 1);
        scores.put('m', 3);
        scores.put('n', 1);
        scores.put('o', 1);
        scores.put('p', 3);
        scores.put('q', 10);
        scores.put('r', 1);
        scores.put('s', 1);
        scores.put('t', 1);
        scores.put('u', 1);
        scores.put('v', 4);
        scores.put('w', 4);
        scores.put('x', 8);
        scores.put('y', 4);
        scores.put('z', 10);
        scores.put(' ', 0);
        letterScores = scores;
    }
    Scrabble(@Nullable String word) {
        this.word = word;
        if (word == null) {
            invalidWord = true;
        }
        if (word != null) {
            this.lettersInWord = word.toCharArray();
        }

    }
    Scrabble(String word, @Nullable Character[] doubleLetter, @Nullable Character[] tripleLetter, boolean doubleWord, boolean tripleWord) {
        this.word = word;
        this.lettersInWord = word.toCharArray();
        if (doubleWord) {
            this.isDoubleWord = true;
        }
        if (tripleWord) {
            this.isTripleWord = true;
        }
        if (doubleLetter.length > 0) {
            this.doubleLetter = new Character[1];
            this.doubleLetter[0] = doubleLetter[0];
        }
        if (tripleLetter.length > 0) {
            this.tripleLetter = new Character[1];
            this.tripleLetter[0] = tripleLetter[0];
        }
    }

    int getScore() {
        if (invalidWord) {
            return 0;
        }
        int score = 0;
        int extra = 0;
        if (lettersInWord.length > 0) {
            for (char letter : lettersInWord) {
                score += letterScores.get(Character.toLowerCase((letter)));
            }
            if (isDoubleWord) score *= 2;
            if (isTripleWord) score *= 3;
            if (doubleLetter!= null && tripleLetter == null) {
                extra += letterScores.get(Character.toLowerCase(doubleLetter[0]));
                score += extra;
            }
            if (tripleLetter!= null && doubleLetter == null) {
                extra += letterScores.get(Character.toLowerCase(tripleLetter[0]));
                score += (extra * 2);
            }
            if (doubleLetter != null && tripleLetter != null) {
                extra += (letterScores.get(Character.toLowerCase(tripleLetter[0])) * 2) + letterScores.get(Character.toLowerCase(doubleLetter[0]));
                score += extra;
            }
        }
        return score;

    }




}
