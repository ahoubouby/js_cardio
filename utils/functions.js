const log = value => console.log(value);
const def = x => typeof x !== "undefined";
const isAFun = f => typeof f === "function";
const isString = s => typeof s === "string";
const isEmpty = arr => arr.length === 0;
const isArray = x => Array.isArray(x);

const reduce = ([x, ...xs], fn, memo = 0, i = 0) =>
  def(x) ? reduce(xs, fn, fn(memo, x, i), i + 1) : memo;

const flatten = ([x, ...xs]) =>
  def(x)
    ? isArray(x)
      ? [...flatten(x), ...flatten(xs)]
      : [x, ...flatten(xs)]
    : [];

const formatStr = str =>
  str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

const swap = (a, i, j) =>
  a.map((val, index) => {
    if (index === i) return a[j];
    if (index === j) return a[i];
    return val;
  });

const swapAllTable = ([x, ...xs]) => (def(x) ? [...swapAllTable(xs), x] : []);

const filter = ([x, ...xs], fn) =>
  def(x) ? (fn(x) ? [x, ...filter(xs, fn)] : [...filter(xs, fn)]) : [];


const reject = ([x, ...xs], fn) => {
  if (undef(x)) return [];
  if (!fn(x)) {
    return [x, ...reject(xs, fn)];
  } else {
    return [...reject(xs, fn)];
  }
};

module.exports = {
  log,
  def,
  isAFun,
  isString,
  isEmpty,
  formatStr,
  flatten,
  isArray,
  swapAllTable,
  filter,
  reject,
  reduce
};
