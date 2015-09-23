(function(){

   function isLetter (unicodeOfCharacter) {
      var unicodeUpperCaseA = 'A'.charCodeAt(0);
      var unicodeUpperCaseZ = 'Z'.charCodeAt(0);
      var unicodeLowerCaseA = 'a'.charCodeAt(0);
      var unicodeLowerCaseZ = 'z'.charCodeAt(0);
      if((unicodeOfCharacter >= unicodeUpperCaseA &&
         unicodeOfCharacter <= unicodeUpperCaseZ) ||
         (unicodeOfCharacter >= unicodeLowerCaseA &&
         unicodeOfCharacter <= unicodeLowerCaseZ))
      {
         return true;
      }
      else
      {
         return false;
      }
   }

   function createWordArray(sentence) {
      var words = [];
      var wordIndex = 0;
      var wordFound = false;
      for(var sentenceIndex = 0; sentenceIndex < sentence.length; sentenceIndex++)
      {
         if(isLetter(sentence.charCodeAt(sentenceIndex)))
         {
            if(! wordFound)
            {
               words.push("");
            }
            wordFound = true;
            words[wordIndex] += sentence.charAt(sentenceIndex);
         }
         else
         {
            if(wordFound)
            {
               wordFound = false;
               wordIndex++;
            }
         }
      }
      return words;
   }

   function findLongestWord(wordArray) {
      var longestWordLength = 0;
      var longestWord = "";
      for(var indexWordArray = 0; indexWordArray < wordArray.length; indexWordArray++)
      {
         var currentWord = wordArray[indexWordArray]
         var currentWordLength = currentWord.length;
         if(currentWordLength > longestWordLength)
         {
            longestWordLength = currentWordLength;
            longestWord = currentWord;
         }
      }

      return longestWord;
   }

   function getLongestWord(sentence) {
      var wordArray = createWordArray(sentence);
      var longestWord = findLongestWord(wordArray);
      return longestWord;
   }

   var testString1 = document.getElementById("Test String 1").textContent;
   document.getElementById("Longest Word 1").innerHTML = getLongestWord(testString1);

   var testString2 = document.getElementById("Test String 2").textContent;
   document.getElementById("Longest Word 2").innerHTML = getLongestWord(testString2);
})();