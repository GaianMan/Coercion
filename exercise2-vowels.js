function countVowels(str) {
    let vowelCountNo = 0;
    let hasVowel = false;

    for (let letter of str) {
        switch (letter.toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowelCountNo++;
                hasVowel = true;
                break;
            default:
                break;
        }
    }
    return hasVowel ? vowelCountNo : "No vowels";
}

/*countVowels("Hello World"); // Output: 3
countVowels("JavaScript"); // Output: 3
countVowels("OpenAI"); // Output: 3*/


