// Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function
function correctfn(sentence, wrong, correct) {
    let regex = new RegExp("\\b" + wrong + "\\b", "gi");
    let correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
  }
  let originalSentence =
    "Something is the GOAT";
  let wrongWord = "Something";
  let correctWord = "Texture";
  let correctedSentence = correctfn(originalSentence, wrongWord, correctWord);
  console.log(correctedSentence);