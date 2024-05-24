// 1. Merge Strings Alternately
// var mergeAlternately = function (word1, word2) {
//   let joined = "";
//   const word2Stack = [...word2];

//   for (let i = 0; i < word1.length; i++) {
//     const currentLetter = word1[i];
//     joined += currentLetter + (word2Stack.length ? word2Stack.shift() : "");
//   }

//   console.log("joined", joined);

//   if (word2Stack.length) {
//     joined += word2Stack.join("");
//   }

//   return joined;
// };

// console.log(mergeAlternately("abc", "pqr"));

// 2. Greatest Common Divisor of Strings
// var gcdOfStrings = function (str1, str2) {
//   if (str2.length > str1.length) {
//     return gcdOfStrings(str2, str1);
//   }

//   if (str1 === str2) return str1;

//   if (str1.startsWith(str2)) {
//     return gcdOfStrings(str1.substring(str2.length), str2);
//   }

//   return "";
// };

// console.log(gcdOfStrings("ABCABC", "ABC"));

// 3. Kids With the Greatest Number of Candies
// var kidsWithCandies = function (candies, extraCandies) {
//   const maxCandiesCount = Math.max(...candies);

//   return candies.map((c) => {
//     const newCurrChildCandiesCount = c + extraCandies;
//     return newCurrChildCandiesCount >= maxCandiesCount;
//   });
// };

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

// 4. Can Place Flowers
// var canPlaceFlowers = function (flowerbed = [], n = 0) {
//   let plantedCount = 0;

//   for (let i = 0; i < flowerbed.length; i++) {
//     const currentSpaceEmpty = !flowerbed[i];
//     const isAdjecentSpaceEmpty = !flowerbed[i - 1] && !flowerbed[i + 1];

//     if (currentSpaceEmpty && isAdjecentSpaceEmpty) {
//       flowerbed[i] = 1;
//       plantedCount++;
//     }
//   }

//   return plantedCount >= n;
// };

// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));

// 5. Reverse Vowels of a String
// var reverseVowels = function (s) {
//   const vowels = {
//     a: true,
//     e: true,
//     i: true,
//     o: true,
//     u: true,
//     A: true,
//     E: true,
//     I: true,
//     O: true,
//     U: true,
//   };
//   const wordVowels = [];
//   let newWord = "";

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     const isVowel = vowels[char];
//     if (isVowel) wordVowels.unshift(char);
//   }

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     const isVowel = vowels[char];
//     newWord += isVowel ? wordVowels.shift() : char;
//   }

//   return newWord;
// };

// console.log(reverseVowels("aA"));

// New Approach
// var reverseVowels = function (s) {
//   let left = 0;
//   let right = s.length - 1;
//   const sArr = s.split("");
//   const vowels = new Set("aeiouAEIOU");

//   while (left < right) {
//     let leftChar = sArr[left];
//     let rightChar = sArr[right];

//     while (left < right && !vowels.has(leftChar)) {
//       left++;
//       leftChar = sArr[left];
//     }

//     while (left < right && !vowels.has(rightChar)) {
//       right--;
//       rightChar = sArr[right];
//     }

//     if (left !== right) {
//       let temp = leftChar;
//       sArr[left] = rightChar;
//       sArr[right] = temp;
//     }

//     right--;
//     left++;
//   }

//   return sArr.join("");
// };

// console.log(reverseVowels("leetcode"));
