const add = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return NaN;
  } else {
    return a + b;
  }
};

const subtract = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return NaN;
  } else {
    return a - b;
  }
};

const multiply = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return NaN;
  } else {
    return a * b;
  }
};

const divide = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return NaN;
  } else {
    return a / b;
  }
};

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};
