/**
 * FEEDBACK
 * didn't know about Infinity in JS (for -0)
 * NaN test below might work, but there was better solution from teaching
 * NaN is only value that doesn't equal itself.
 */

// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
  Object.is = function ObjectIs(value1, value2) {
    // NaN test
    if (
      (typeof value1 === "number" && Number(value1).toString() === "NaN") ||
      (typeof value1 === "number" && Number(value2).toString() === "NaN")
    ) {
      return Number(value1).toString() === Number(value2).toString();
    }

    // -0 test

    return value1 === value2;
  };
}

// tests:
console.log("1", Object.is(42, 42) === true);
console.log("2", Object.is("foo", "foo") === true);
console.log("3", Object.is(false, false) === true);
console.log("4", Object.is(null, null) === true);
console.log("5", Object.is(undefined, undefined) === true);
console.log("6", Object.is(NaN, NaN) === true);
console.log("7", Object.is(-0, -0) === true);
console.log("8", Object.is(0, 0) === true);

console.log("9", Object.is(-0, 0) === false);
console.log("10", Object.is(0, -0) === false);
console.log("11", Object.is(0, NaN) === false);
console.log("12", Object.is(NaN, 0) === false);
console.log("13", Object.is(42, "42") === false);
console.log("14", Object.is("42", 42) === false);
console.log("15", Object.is("foo", "bar") === false);
console.log("16", Object.is(false, true) === false);
console.log("17", Object.is(null, undefined) === false);
console.log("18", Object.is(undefined, null) === false);
