const {
  log,
  def,
  isAFun,
  isString,
  isEmpty,
  formatStr,
  flatten,
  reduce,
} = require("./utils/functions");

const tab = [1, 3, 4, 2, 2, 34, -2, 1, 3, 4, 2, 2, 34];

const add = (x, y) => x + y;
const sum = ([head, ...tail]) => (def(head) ? head + sum(tail) : 0);
const sumWithReduce = (tab) => tab.reduce(add, 0);

const reverse = ([head, ...tail]) =>
  def(head) ? [...reverse(tail), head] : [];

const capitalizeString = ([head, ...tail]) =>
  def(head) ? `${head.toUpperCase()}${tail.join("")}` : "";

const capitalizeAWord = (input) =>
  isString(input)
    ? input.replace(/\b[a-z]/gi, (char) => char.toUpperCase())
    : undefined;

const minOrMax = (arr, predicateFun) => {
  if (isEmpty(arr)) return 0;
  predicateFun = predicateFun || ((a, b) => a < b);
  return arr.reduce((acc, cv) => (predicateFun(acc, cv) ? cv : acc));
};

const countOcc = (arr) =>
  arr.reduce((acc, cv) => {
    return {
      ...acc,
      [cv]: (acc[cv] || 0) + 1,
    };
  }, {});

const countWordLengh = (arr) =>
  arr.reduce((acc, cv) => ({ ...acc, [cv]: cv.length }), {});

const isAnagram = (str1, str2) => formatStr(str1) === formatStr(str2);

const flatArray = (tab) => flatten(tab);

const chengeLettres = (str) => {
  const newStr = str.replace(/[a-z]/gi, (c) => {
    if (c === "z" || c === "Z") return "a";
    return String.fromCharCode(c.charCodeAt() + 1);
  });
  return newStr.toLowerCase().replace(/a|e|i|o|u/gi, (c) => c.toUpperCase());
};

const until = (length) =>
  Array(length)
    .fill()
    .map((_, id) => id);

const isPrime = (i) => {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      return false;
    }
  }
  return true;
};
const sumAllPrimes = (tab) => {
  const sumPrimes = (acc, v) => (isPrime(v) ? acc + v : acc);
  return reduce(tab, sumPrimes, -1);
};

const factorial = (n) => (n == 0 ? 1 : n * factorial(n - 1));

//TODO
// count of pair composition for given number

module.exports = {
  sum,
  reverse,
  capitalizeString,
  capitalizeAWord,
  minOrMax,
  countOcc,
  countWordLengh,
  isAnagram,
  flatArray,
  chengeLettres,
  until,
  isPrime,
  factorial,
  sumWithReduce,
};
