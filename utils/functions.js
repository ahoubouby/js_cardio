const log = value => console.log(value);
const def = x => typeof x !== "undefined";
const isAFun = f => typeof f === "function";
const isString = s => typeof s === "string";
const isEmpty = arr => arr.length === 0;
const isArray = x => Array.isArray(x);

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

module.exports = {
  log,
  def,
  isAFun,
  isString,
  isEmpty,
  formatStr,
  flatten,
  isArray
};
