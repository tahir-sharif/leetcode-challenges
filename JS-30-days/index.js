// 30 days of js leetcode
console.log("Welcome to 30 days challenge");
// 2 counter
/**
 * @param {number} n
 * @return {Function} counter
 */
// var createCounter = function (n) {
//   let count = n ? n : 0;
//   return function () {
//     return count++;
//   };
// };

// const counter = createCounter(10);
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12

// 3 Equal
/**
 * @param {string} val
 * @return {Object}
 */
// var expect = function (val) {

//   const toBe = (v) => {
//     if (v === val) return true;
//     throw "Not Equal";
//   };
//   const notToBe = (v) => {
//     if (v !== val) return true;
//     throw "Equal";
//   };

//   return {
//     toBe,
//     notToBe,
//   };
// };

// console.log(expect(5).toBe(5)); // true
// console.log(expect(5).notToBe(5)); // throws "Equal"

// console.log(expect(5).notToBe(null));

// 4 counter
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function (init) {
//   let count = init;
//   const increment = () => ++count;
//   const decrement = () => --count;
//   const reset = () => {
//     count = init;
//     return init;
//   };

//   return {
//     increment,
//     reset,
//     decrement,
//   };
// };

// const counter = createCounter(5);
// console.log(counter.increment()); // 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4

// 5 mapping function
// const map = (arr, fn) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(fn(arr[i], i));
//   }

//   return newArr;
// };

// 6 filter function
// var filter = function (arr, fn) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i, arr)) newArr.push(arr[i]);
//   }

//   return newArr;
// };
// const arr = [0, 10, 20, 30];
// const fn = function greaterThan10(n) {
//   return n > 10;
// };
// console.log(filter(arr, fn));

// 7 reduce transformation
// var reduce = function (nums, fn, init) {
//   let result = init;

//   for (let i = 0; i < nums.length; i++) {
//     result = fn(result, nums[i]);
//   }

//   return result;
// };

// console.log(
//   reduce(
//     [1, 2, 3, 4],
//     function sum(accum, curr) {
//       return accum + curr;
//     },
//     0
//   )
// );

// 8 compose function
// var compose = function (functions) {
//   return function (x) {
//     let result = x;
//     for (let i = functions.length - 1; i >= 0; i--) {
//       result = functions[i](result);
//     }

//     return result;
//   };
// };
// const cmFn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
// console.log(cmFn(4));

// 9 arguments length
// var argumentsLength = function (...args) {
//   return args.length;
// };

// console.log(argumentsLength(1, 2, 3));

// 10 once function call
// var once = function (fn) {
//   let called = false;
//   return function (...args) {
//     if (!called) {
//       called = true;
//       return fn(...args);
//     }
//   };
// };

// const onceFn = once((a, b, c) => a + b + c);
// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // undefined, fn was not called

// 11 memoize function
// let callCount = 0;
// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (key in cache) {
//       return cache[key];
//     }

//     const result = fn(...args);
//     cache[key] = result;

//     return result;
//   };
// }
// const memoizedFn = memoize(function (a, b) {
//   return a + b;
// });
// console.log(memoizedFn(2, 3)); // 5
// console.log(memoizedFn(2, 3)); // 5
// console.log(callCount); // 1
// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const inputAsStr = JSON.stringify(args);
//     if (cache[inputAsStr]) return cache[inputAsStr];
//     else {
//       const output = fn(...args);
//       cache[inputAsStr] = output;
//       return output;
//     }
//   };
// }
// 12 add two prommises
// var addTwoPromises = async function (promise1, promise2) {
//   const num1 = await promise1;
//   const num2 = await promise2;

//   return num1 + num2;
// };
// // input
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));
// addTwoPromises(promise1, promise2).then(console.log);

// 13 sleep
// async function sleep(millis) {
//   return new Promise((res) => setTimeout(res, millis));
// }

// let t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t)); // 100

// 14 Timeout Cancellation
// var cancellable = function (fn, args, t) {
//   const timeout = setTimeout(fn.bind(null, ...args), t);

//   return () => {
//     clearTimeout(timeout);
//   };
// };

// const result = [];

// const fn = (x) => x * 5;
// const args = [2],
//   t = 20,
//   cancelTimeMs = 50;

// const start = performance.now();

// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start);
//   result.push({ time: diff, returned: fn(...argsArr) });
// };

// const cancel = cancellable(log, args, t);

// const maxT = Math.max(t, cancelTimeMs);

// setTimeout(cancel, cancelTimeMs);

// setTimeout(() => {
//   console.log(result); // [{"time":20,"returned":10}]
// }, maxT + 15);

// 15 Interval Cancellation
// var cancellable = function (fn, args, t) {
//   const call = fn.bind(null, ...args);
//   call();
//   const interval = setInterval(call, t);
//   return () => clearInterval(interval);
// };

// const result = [];

// const fn = (x) => x * 2;
// const args = [4],
//   t = 35,
//   cancelTimeMs = 190;

// const start = performance.now();

// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start);
//   result.push({ time: diff, returned: fn(...argsArr) });
// };

// const cancel = cancellable(log, args, t);

// setTimeout(cancel, cancelTimeMs);

// setTimeout(() => {
//   console.log(result); // [
//   //     {"time":0,"returned":8},
//   //     {"time":35,"returned":8},
//   //     {"time":70,"returned":8},
//   //     {"time":105,"returned":8},
//   //     {"time":140,"returned":8},
//   //     {"time":175,"returned":8}
//   // ]
// }, cancelTimeMs + t + 15);

// 16 Promise Time Limit
// var timeLimit = function (fn, t) {
//   return async function (...args) {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         rej("Time Limit Exceeded");
//       }, t);

//       fn(...args)
//         .then(res)
//         .catch(rej);
//     });
//   };
// };

// const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
// limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

// 17 Cache With Time Limit
// class TimeLimitedCache {
//   #cache = {};
//   #count = 0;

//   set(key, value, duration) {
//     const isHaveAlready = this.#cache.hasOwnProperty(key);

//     let timeId = setTimeout(() => {
//       const isDel = delete this.#cache[key];
//       if (isDel) this.#count--;
//     }, duration);

//     if (isHaveAlready) clearTimeout(this.#cache[key].timeId);

//     Object.assign(this.#cache, {
//       [key]: { timeId, value },
//     });
//     if (!isHaveAlready) this.#count++;

//     return isHaveAlready;
//   }
//   get(key) {
//     return this.#cache[key]?.value || -1;
//   }
//   count() {
//     return this.#count;
//   }
// }

// const timeLimitedCache = new TimeLimitedCache();
// // console.log(timeLimitedCache.set(1, 42, 1000)); // false
// // console.log(timeLimitedCache.get(1)); // 42
// // console.log(timeLimitedCache.count()); // 1

// console.log(timeLimitedCache.set(1, 42, 50)); // false

// setTimeout(() => {
//   console.log(timeLimitedCache.set(1, 50, 100)); // true
// }, 40);

// setTimeout(() => {
//   console.log(timeLimitedCache.get(1)); // 50
// }, 50);

// setTimeout(() => {
//   console.log(timeLimitedCache.get(1)); // 50
// }, 120);

// setTimeout(() => {
//   console.log(timeLimitedCache.get(1)); // -1
// }, 200);

// setTimeout(() => {
//   console.log(timeLimitedCache.count()); // 0
// }, 250);

// 18 Debounce
// var debounce = function (fn, t) {
//   let timeoutId = null;
//   return function (...args) {
//     clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       fn.apply(null, args);
//     }, t);
//   };
// };

// const log = debounce(console.log, 100);
// log("Hello"); // cancelled
// log("Hello"); // cancelled
// log("Hello"); // Logged at t=100ms

// 19 Execute Asynchronous Functions in Parallel
// var promiseAll = function (functions) {
//   const results = [];

//   return new Promise((resolve, reject) => {
//     let resolvedIndic = 0;

//     for (let i = 0; i < functions.length; i++) {
//       const promiseFn = functions[i];
//       if (resolvedIndic === "error") break;

//       promiseFn()
//         .then((res) => {
//           const isAllresolved = resolvedIndic === functions.length - 1;
//           results[i] = res
//           console.log("i -- res =>", i, res, results);
//           resolvedIndic++;

//           if (isAllresolved) resolve(results);
//         })
//         .catch((err) => {
//           resolvedIndic = "error";
//           reject(err);
//         });
//     }
//   });
// };

// const promise = promiseAll([
//   () => new Promise((resolve) => setTimeout(() => resolve(83), 90)),
//   () => new Promise((resolve) => setTimeout(() => resolve(16), 60)),
//   () => new Promise((resolve) => setTimeout(() => resolve(76), 30)),
//   () => new Promise((resolve) => setTimeout(() => resolve(83), 120)),
// ]);
// promise.then(console.log).catch(console.log);

// 20 Is Object Empty
// var isEmpty = function (obj) {
//   if (!obj) return false;
//   return Object.keys(obj).length === 0;
// };
// console.log(isEmpty({ a: 1 }));
// console.log(isEmpty({}));

// 21 Chunk Array
// var chunk = function (arr = [], size = 0) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }

//   return newArr;
// };

// console.log(chunk([1, 9, 6, 3, 2], 3));

// 22 Array Prototype Last
// Array.prototype.last = function () {
//   if (this.length === 0) return -1;
//   return this[this.length - 1];
// };

// const arr = [1, 2, 3];
// console.log(arr.last());

// 23 group Array
// Array.prototype.groupBy = function (fn) {
//   const array = this;
//   const grouped = {};

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const key = fn(element);
//     if (!(key in grouped)) grouped[key] = [];

//     grouped[key].push(element);
//   }

//   return grouped;
// };

// console.log(
//   [{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(function (item) {
//     return item.id;
//   })
// ); // {"1":[1],"2":[2],"3":[3]}

// 24 Sort By
// var sortBy = function (arr, fn) {
//   return arr.sort((a, b) => fn(a) - fn(b));
// };

// console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x));

// 25 Join Two Arrays by ID
// var join = function (arr1, arr2) {
//   const storedIdsIndexes = {};
//   const newArr = [...arr1];

//   for (let i = 0; i < newArr.length; i++) {
//     const element = newArr[i];
//     storedIdsIndexes[element.id] = i;
//   }
//   console.log(storedIdsIndexes);

//   for (let j = 0; j < arr2.length; j++) {
//     const element = arr2[j];
//     if (element.id in storedIdsIndexes) {
//       const pointedInd = storedIdsIndexes[element.id];
//       newArr[pointedInd] = { ...newArr[pointedInd], ...element };
//     } else {
//       newArr.push(element);
//     }
//   }

//   return newArr.sort((a, b) => {
//     return a.id - b.id;
//   });
// };

// const arr1 = [
//   { id: 3, c: 20, z: 75 },
//   { id: 1, x: 36, d: 26, f: 35 },
// ];

// const arr2 = [
//   { id: 2, o: 48, z: 84, y: 61 },
//   { id: 1, x: 36, d: 26, f: 35, isNew: true },
// ];

// console.log(join(arr1, arr2));

// 26  Flatten Deeply Nested Array
// var flat = function (arr = [], n) {
//   const newArr = [];

//   const startFlat = (arr, depth = 0) => {
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];

//       if (Array.isArray(element) && depth < n) {
//         startFlat(element, depth + 1);
//       } else {
//         newArr.push(element);
//       }
//     }
//   };
//   startFlat(arr);
//   return newArr;
// };
// new approach
// var flat = function (arr = [], n) {
//   const flatted = [];
//   const isValidDepth = n > 0;

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (Array.isArray(element) && isValidDepth) {
//       flatted.push(...flat(element, n - 1));
//     } else flatted.push(element);
//   }

//   return flatted;
// };

// console.log(
//   flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
// );

// 27 Compact Object
// const isPrimitive = (element) => {
//   return (
//     Array.isArray(element) || (typeof element === "object" && element !== null)
//   );
// };
// var compactObject = function (object) {
//   const isObjArray = Array.isArray(object);

//   // for array
//   if (isObjArray) {
//     for (let i = object.length - 1; i >= 0; i--) {
//       const element = object[i];

//       if (isPrimitive(element)) {
//         compactObject(element);
//         continue;
//       } else {
//         if (!element) object.splice(i, 1);
//       }
//     }
//   } else if (typeof object === "object" && object !== null) {
//     // for object
//     for (const key in object) {
//       if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//         if (isPrimitive(element)) {
//           compactObject(element);
//           continue;
//         }
//         if (!element) delete object[key];
//       }
//     }
//   }

//   return object;
// };

// new approach
// var compactObject = function (object) {
//   if (Array.isArray(object)) {
//     return object.flatMap((value) => {
//       if (!value) return [];
//       if (typeof value === "object") return [compactObject(value)];
//       return [value];
//     });
//   } else if (typeof object === "object" && object !== null) {
//     for (const [key, value] of Object.entries(object)) {
//       if (!value) {
//         delete object[key];
//         continue;
//       }
//       if (typeof value === "object") {
//         object[key] = compactObject(value);
//       }
//     }
//   }

//   return object;
// };

// console.log(compactObject({ a: 1, b: 2, c: false, f: { a: false, b: 1 } }));
// console.log(compactObject([1, 2, [true, false], 3]));
// console.log(compactObject([null, 0, false, 1]));
// console.log(compactObject({ a: null, b: [false, 1] }));

// 28 Event Emitter
// class EventEmitter {
//   #subscribed_events = {};

//   #isEventSubscribed(event) {
//     return Object.prototype.hasOwnProperty.call(this.#subscribed_events, event);
//   }

//   subscribe(eventName, fn) {
//     const subscribedEvents = this.#subscribed_events;

//     if (!this.#isEventSubscribed(eventName)) {
//       subscribedEvents[eventName] = [fn];
//     } else {
//       subscribedEvents[eventName].push(fn);
//     }

//     return {
//       unsubscribe() {
//         const removed = subscribedEvents[eventName].filter((sFn) => sFn !== fn);
//         subscribedEvents[eventName] = removed;
//       },
//     };
//   }

//   emit(eventName, args = []) {
//     if (this.#isEventSubscribed(eventName)) {
//       const fns = this.#subscribed_events[eventName];

//       return fns.reduce((acc, fn) => {
//         acc.push(fn.apply(null, args));
//         return acc;
//       }, []);
//     }

//     return [];
//   }
// }

// const emitter = new EventEmitter();
// console.log(emitter.emit("firstEvent")); // [], no callback are subscribed yet
// emitter.subscribe("firstEvent", function cb1() {
//   return 5;
// });
// emitter.subscribe("firstEvent", function cb2() {
//   return 6;
// });
// console.log(emitter.emit("firstEvent")); // [5, 6], returns the output of cb1 and cb2

// const emitter = new EventEmitter();
// const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
// const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
// sub1.unsubscribe(); // undefined
// console.log(emitter.emit("firstEvent", [5])); // [7]

// 29 Array Wrapper
// var ArrayWrapper = function (nums) {
//   this.nums = nums;
// };

// /**
//  * @return {number}
//  */
// ArrayWrapper.prototype.valueOf = function () {
//   return this.nums.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
// };

// /**
//  * @return {string}
//  */
// ArrayWrapper.prototype.toString = function () {
//   return JSON.stringify(this.nums);
// };

// const obj1 = new ArrayWrapper([1, 2]);
// const obj2 = new ArrayWrapper([3, 4]);
// console.log(obj1 + obj2); // 10
// console.log(String(obj1)); // "[1,2]"
// console.log(String(obj2)); // "[3,4]"

// 30 Calculator with Method Chaining
// class Calculator {
//   /**
//    * @param {number} value
//    */
//   #result = 0;
//   constructor(value) {
//     this.#result = value;
//   }

//   /**
//    * @param {number} value
//    * @return {Calculator}
//    */
//   add(value) {
//     this.#result = this.#result + value;
//     return this;
//   }

//   /**
//    * @param {number} value
//    * @return {Calculator}
//    */
//   subtract(value) {
//     this.#result = this.#result - value;
//     return this;
//   }

//   /**
//    * @param {number} value
//    * @return {Calculator}
//    */
//   multiply(value) {
//     this.#result = this.#result * value;
//     return this;
//   }

//   /**
//    * @param {number} value
//    * @return {Calculator}
//    */
//   divide(value) {
//     if (value === 0) throw "Division by zero is not allowed";
//     this.#result = this.#result / value;
//     return this;
//   }

//   /**
//    * @param {number} value
//    * @return {Calculator}
//    */
//   power(value) {
//     this.#result = this.#result ** value;
//     return this;
//   }

//   /**
//    * @return {number}
//    */
//   getResult() {
//     return this.#result;
//   }
// }

// console.log(new Calculator(2).multiply(5).power(2).getResult()); // 2 * 5 ^ 2
