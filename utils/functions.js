 const log = value => console.log(value);
 const def = x => typeof x !== "undefined";
 const isAFun = f => typeof f === "function";
 const isString = s => typeof s === "string";
 const isEmpty = arr => arr.length === 0;
 
 module.exports = {
     log,
     def,
     isAFun,
     isString,
    isEmpty
 }