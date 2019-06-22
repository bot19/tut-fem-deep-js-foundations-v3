/**
 * FEEDBACK
 * alternative: push matching values into return array
 * forgot to handle whitespace: value.trim() != '' handles both empty/whitespace-only
 */

/**
 * EXERCISE
  - exact matches (`Object.is(..)`)
	DONE strings (except "" or whitespace-only) can match numbers
	- numbers (except `NaN` and `+/- Infinity`) can match strings (hint: watch out for `-0`!)
	DONE `null` can match `undefined`, and vice versa
	DONE booleans can only match booleans
	- objects only match the exact same object
 */

// TODO: write `findAll(..)`
var findAll = (value, array) => {
  var matchItems = (searchValue, arrayItem) => {
    // check if -0
    function isNegZero(value) {
      return String(value) === "0" && 1 / value === -Infinity;
    }

    // match null & undefined
    if (
      typeof searchValue == "undefined" ||
      (typeof searchValue == "object" && String(searchValue) == "null")
    ) {
      return searchValue == arrayItem;
    }

    // match NaN
    if (searchValue != searchValue && arrayItem != arrayItem) {
      return true;
    }

    // match ""
    // match boolean
    // match Infinity
    // match -Infinity
    // match -0
    // match strings
    // match object
    if (
      (typeof searchValue == "string" && searchValue.length == 0) ||
      typeof searchValue == "boolean" ||
      (typeof searchValue == "number" && String(searchValue) == "Infinity") ||
      (typeof searchValue == "number" && String(searchValue) == "-Infinity") ||
      isNegZero(searchValue) ||
      typeof searchValue == "object"
    ) {
      return Object.is(searchValue, arrayItem);
    }

    // match 0
    // TRUE if searchValue is 0 (-0 dealt with above)
    // TRUE only if arrayItem is 0 (not -0)
    if (
      String(searchValue) == "0" &&
      String(arrayItem) == "0" &&
      !isNegZero(arrayItem)
    ) {
      return true;
    }

    // match numbers & strings if not 0
    if (
      String(searchValue) != "0" &&
      (typeof searchValue == "number" || typeof searchValue == "string")
    ) {
      return searchValue == arrayItem;
    }

    return false;
  };

  var result = array.filter(item => matchItems(value, item));
  console.log(value, result);

  return result;
};

// tests:
var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  "",
  "0",
  "42",
  "42hello",
  "true",
  "NaN",
  true,
  false,
  myObj
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);
console.log("--- test for false ---");
console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
  setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
