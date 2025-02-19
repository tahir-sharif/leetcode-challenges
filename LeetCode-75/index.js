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

// var reverseWords = function (s) {
//   const words = s.split(" ").flatMap((s) => (s ? [s.trim()] : []));
//   return words.reverse().join(" ");
// };
// console.log(reverseWords("the sky is blue"));

// 6. Reverse Words in a String
// var reverseWords = function (s) {
//   const words = s.split(" ");
//   const newWords = [];

//   for (let i = words.length - 1; i >= 0; i--) {
//     const word = words[i];
//     if (word) newWords.push(word);
//   }

//   return newWords.join(" ");
// };

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world  "));

// 7. Product of Array Except Self
// var productExceptSelf = function (nums) {
//   const rightProducts = [];
//   const leftProducts = [];
//   const productsExceptSelf = [];

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const prevProduct = rightProducts[i - 1];
//     const product = prevProduct === undefined ? num : num * prevProduct;
//     rightProducts.push(product);
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     const num = nums[i];
//     const nextProduct = leftProducts[0];
//     const product = nextProduct === undefined ? num : num * nextProduct;
//     leftProducts.unshift(product);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const prevProds = rightProducts[i - 1],
//       nextProds = leftProducts[i + 1];

//     if (prevProds === undefined) productsExceptSelf.push(leftProducts[1]);
//     else if (nextProds === undefined) productsExceptSelf.push(prevProds);
//     else productsExceptSelf.push(prevProds * nextProds);
//   }

//   return productsExceptSelf;
// };

// Optimized Approach
// var productExceptSelf = function (nums) {
//   const products = new Array(nums.length).fill(1);

//   for (let i = 1; i < nums.length; i++) {
//     products[i] = products[i - 1] * nums[i - 1];
//   }

//   let rightProduct = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     products[i] *= rightProduct;
//     rightProduct *= nums[i];
//   }

//   return products;
// };

// console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
// console.log(productExceptSelf([4, 3, 2, 1, 2]));

// 8. Increasing Triplet Subsequence
// var increasingTriplet = function (nums) {
//   let left = Number.MAX_SAFE_INTEGER;
//   let mid = Number.MAX_SAFE_INTEGER;

//   for (const num of nums) {
//     if (left >= num) {
//       left = num;
//     } else if (mid >= num) {
//       mid = num;
//     } else {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
// console.log(
//   increasingTriplet([
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   ])
// );

// 9. String Compression
// This sol. has been rejected because we have to update input array also.
// var compress = function (chars) {
//   if (chars.length === 1) return chars;

//   let compressed = [];
//   let prevChar = chars[0];
//   let currentCharCount = 0;

//   for (let i = 0; i < chars.length; i++) {
//     const char = chars[i];
//     const isNotLast = i !== chars.length - 1;

//     if (prevChar === char) {
//       currentCharCount++;
//       if (isNotLast) continue;
//     }

//     compressed.push(prevChar, currentCharCount);
//     currentCharCount = 1;

//     prevChar = char;
//   }

//   return compressed.length;
// };

// var compress = function (chars = []) {
//   if (chars.length === 1) return 1;

//   let left = 0;
//   let leftFast = 1;
//   let leftChar = chars[left];
//   let leftFastChar = chars[leftFast];

//   while (left < chars.length) {
//     while (leftChar === leftFastChar) {
//       leftFast++;
//       leftFastChar = chars[leftFast];
//     }

//     const startIndex = left + 1;
//     const count = leftFast - left;
//     const countStr = count.toString().split("");

//     if (count > 1) {
//       chars.splice(startIndex, count - 1, ...countStr);
//       leftFast = startIndex + countStr.length;
//     }

//     left = leftFast;
//     leftChar = chars[left];
//   }

//   console.log(chars);
//   return chars.length;
// };

// console.log(compress(["a", "a", "b", "b", "c", "c", "c", "c", "e", "e"]));
// console.log(compress(["a", "a", "a", "b", "b", "a", "a"]));
// console.log(compress(["a", "a", "a", "b", "b", "a", "a"]));
// console.log(
//   compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
// );

// var moveZeroes = function (nums = []) {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0) nums.push(...nums.splice(i, 1));
//   }

//   return nums;
// };

// 10. Move Zeros.
// var moveZeroes = function (nums) {
//   let left = 0;
//   let right = 1;
//   while (right < nums.length) {
//     console.log({ left, right });
//     if (nums[left] !== 0) {
//       left++;
//       right++;
//     } else if (nums[right] === 0) {
//       right++;
//     } else {
//       let temp = nums[right];
//       nums[right] = nums[left];
//       nums[left] = temp;
//     }

//     console.log(nums);
//   }
// };

// console.log(moveZeroes([0, 1, 0, 3, 12]));

// 11. Is Subsequence

// var isSubsequence = function (s = "", t = "") {
//   const sArr = s.split("");

//   for (let i = 0; i < t.length; i++) {
//     if (sArr[0] === t[i]) sArr.shift();
//   }

//   return sArr.length === 0;
// };
// var isSubsequence = function (s = "", t = "") {
//   let sIn = 0;

//   for (let i = 0; i < t.length; i++) {
//     if (s[sIn] === t[i]) sIn++;
//   }

//   return sIn === s.length;
// };

// console.log(isSubsequence("abc", "ahbgdc"));

// 11. Container With Most Water

// var maxArea = function (height = []) {
//   let left = 0;
//   let right = 1;
//   let maxArea = 0;

//   while (right < height.length) {
//     let leftNum = height[left];
//     let rightNum = height[right];

//     if (rightNum > leftNum) {
//       left = right;
//       leftNum = height[left];
//     }

//     const newArea = Math.min(leftNum, rightNum) * (right - left);

//     if (newArea > maxArea) {
//       maxArea = newArea;
//     }

//     right++;
//   }

//   return maxArea;
// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 2, 1]));

// class Wallet {
//   constructor() {
//     this.totalPoints = 0;
//     this.expirablePoints = [];
//     this.currentMonth = new Date().getMonth();
//   }

//   // Method to add non-expiring points to the wallet
//   addPoints(points) {
//     this.totalPoints += points;
//     console.log(`Added ${points} points. Total points: ${this.totalPoints}`);
//   }

//   // Method to add expiring points
//   addExpirablePoints(points) {
//     const expiryDate = new Date();
//     expiryDate.setDate(expiryDate.getDate() + 60); // Set expiration date 60 days from now
//     this.expirablePoints.push({ points, expiryDate });
//     this.totalPoints += points;
//     console.log(
//       `Added ${points} expirable points. Total points: ${
//         this.totalPoints
//       }. Expiry Date: ${expiryDate.toLocaleDateString()}`
//     );
//   }

//   // Method to spend points
//   spendPoints(points) {
//     if (points > this.totalPoints) {
//       console.log("Insufficient points available.");
//       return false;
//     }
//     this.totalPoints -= points;
//     console.log(
//       `Spent ${points} points. Remaining total points: ${this.totalPoints}`
//     );

//     // Deduct from expirable points first
//     let remainingToDeduct = points;
//     console.log("expirablePoints =>", this.expirablePoints);
//     for (
//       let i = 0;
//       i < this.expirablePoints.length && remainingToDeduct > 0;
//       i++
//     ) {
//       let deduction = Math.min(
//         remainingToDeduct,
//         this.expirablePoints[i].points
//       );
//       this.expirablePoints[i].points -= deduction;
//       remainingToDeduct -= deduction;
//     }

//     // Clean up expirable points array
//     this.expirablePoints = this.expirablePoints.filter(
//       (point) => point.points > 0
//     );

//     console.log("expirablePoints =>", this.expirablePoints);

//     return true;
//   }

//   // Method to check and expire points
//   expirePoints() {
//     const now = new Date();
//     let expiredPoints = 0;
//     this.expirablePoints.forEach((point) => {
//       if (point.expiryDate <= now) {
//         expiredPoints += point.points;
//       }
//     });
//     if (expiredPoints > 0) {
//       this.totalPoints -= expiredPoints;
//       this.expirablePoints = this.expirablePoints.filter(
//         (point) => point.expiryDate > now
//       );
//       console.log(
//         `Expired ${expiredPoints} points. Remaining total points: ${this.totalPoints}`
//       );
//     }
//   }

//   // Method to add new expirable points at the start of each month
//   addMonthlyExpirablePoints(points) {
//     if (new Date().getMonth() !== this.currentMonth) {
//       this.currentMonth = new Date().getMonth();
//       this.addExpirablePoints(points);
//     } else {
//       console.log("Expirable points for the month already added.");
//     }
//   }
// }

// // Example usage
// const wallet = new Wallet();
// wallet.addPoints(100);
// wallet.addExpirablePoints(50);
// wallet.spendPoints(70); // Tries to spend 70 points, using expirable points first
// wallet.expirePoints(); // Check for and remove expired points
// wallet.addMonthlyExpirablePoints(40);

// Implemented Custom Promise
// class MyPromise {
//   constructor(fn) {
//     fn(this.#resolve.bind(this), this.#reject.bind(this));
//   }
//   #value;
//   #state = "pending";
//   #onFulfilledCallbacks = [];
//   #onRejectCallbacks = [];

//   #resolve(val) {
//     this.#state = "fulfilled";
//     this.#value = val;
//     this.#onFulfilledCallbacks.forEach((cb) => {
//       this.#value = cb(this.#value);
//     });
//   }
//   #reject(reason) {
//     this.#state = "rejected";
//     this.#value = reason;
//     this.#onRejectCallbacks.forEach((cb) => {
//       this.#value = cb(this.#value);
//     });

//     return this.#value;
//   }
//   then(onFullFilled) {
//     try {
//       const isFn = typeof onFullFilled === "function";
//       const callback = isFn ? onFullFilled : () => onFullFilled;
//       this.#onFulfilledCallbacks.push(callback);

//       if (isFn) {
//         return new MyPromise((res, rej) => {
//           this.#onFulfilledCallbacks.push(res);
//           this.#onRejectCallbacks.push(rej);
//         });
//       }
//     } catch (error) {
//       this.#reject(error);
//     }
//   }
//   catch(onReject) {
//     const callback = typeof onReject === "function" ? onReject : () => onReject;
//     this.#onRejectCallbacks.push(callback);

//     return new MyPromise((res, rej) => {
//       this.#onFulfilledCallbacks.push(res);
//       this.#onRejectCallbacks.push(rej);
//     });
//   }
// }

// const checkPromise = async () => {
//   try {
//     console.log("promise started");

//     const promise = new MyPromise((res, rej) => {
//       setTimeout(() => {
//         res("okkkay");
//       }, 1500);
//     })
//       .then(() => {
//         console.log("yesss!");
//       })
//       .catch((res) => {
//         console.log("catch 1", res);
//       })
//       .catch((res) => {
//         console.log("catch 2", res);
//       })
//       .catch((res) => {
//         console.log("catch 3", res);
//       });

//     const res = await promise;
//     console.log("res after await", res);
//   } catch (error) {
//     console.log("error", error);
//   }

//   console.log("ended");
// };

// checkPromise();

// 1598. Crawler Log Folder
/**
 * @param {string[]} logs
 * @return {number}
 */
// var minOperations = function (logs = []) {
//   const stack = [];

//   for (let i = 0; i < logs.length; i++) {
//     const path = logs[i];

//     if (path === "./") continue;

//     if (path === "../") stack.pop();
//     else stack.push(path);
//   }

//   return stack.length;
// };

// console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
// console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
// console.log(minOperations(["./", "../", "./"]));
