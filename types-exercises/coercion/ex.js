/**
 * FEEDBACK
 * 1) forgot to use typeof check
 * 2) can use js methods not introduced, like trim(), Number.isInteger(value)
 * 3) instead of if statement inception, just do a huge if conditional && chain
 */

// TODO: write the validation functions
var isValidName = name => {
  if (Number(name) !== Number(name)) {
    // is NaN; either string, undefined, array or obj
    if (
      String(name) !== "undefined" &&
      String(name) !== "" &&
      String(name) !== "[object Object]"
    ) {
      // not undefined
      // not array or empty string
      // not obj
      if (name.length > 2) {
        return true;
      }
      return false;
    }
    return false;
  }
  return false;
};

/**
 *
 * @param {*} value1: attended (must be <= length)
 * @param {*} value2: length
 */
var hoursAttended = (value1, value2) => {
  if (filter1(value1) && filter1(value2)) {
    // not undefined, null, emptry string, array, obj, true or false

    if (!isNanValue(value1) && !isNanValue(value2)) {
      // not NaN;

      if (!isNegZero(value1) && !isNegZero(value2)) {
        // not -0

        var attended = Number(value1);
        var length = Number(value2);

        if (
          Number.isInteger(attended) &&
          Number.isInteger(length) &&
          attended >= 0 &&
          length >= 0
        ) {
          // must be 0 or higher
          // TODO: must be whole, how? => google; Number.isInteger()

          if (attended <= length) {
            // value1 vs value2

            return true;
          }

          return false;
        }

        return false;
      }

      return false;
    }

    return false;
  }

  return false;

  function filter1(value) {
    if (
      String(value) !== "" &&
      String(value) !== "null" &&
      String(value) !== "undefined" &&
      String(value) !== "[object Object]" &&
      String(value) !== "true" &&
      String(value) !== "false"
    ) {
      return true;
    }

    return false;
  }

  function isNanValue(value) {
    return value !== value;
  }

  function isNegZero(value) {
    /**
     * need to check for 1 of the 2 '0' values
     * otherwise 1/Infinity, also = Infinity, apparently
     * though in FF, it doesn't = Infinity...
     */
    return String(value) === "0" && 1 / value === -Infinity;
  }

  function filter2(value) {
    if (value >= 0) {
      return true;
    }

    return false;
  }
};

// tests:
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log("---");

console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
