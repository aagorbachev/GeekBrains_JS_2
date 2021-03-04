const calculator = require("../../../calc/calc.js");

const add = calculator.add;
const subtract = calculator.subtract;
const multiply = calculator.multiply;
const divide = calculator.divide;

describe("Функция сложения", () => {
  it("должна возвращать 6 при аргументах (3, 3)", () => {
    expect(add(3, 3)).toBe(6);
  });
  it("должна возвращать NaN, когда одним из аргументов передается undefined", () => {
    expect(add(undefined, 3)).toBeNaN;
  });
  it("должна возвращать NaN, когда одним из аргументов передается null", () => {
    expect(add(null, 5)).toBeNaN;
  });
  it("должна возвращать NaN, когда один из аргументов строчного типа", () => {
    expect(add("123", 5)).toBeNaN();
  });
  it("должна возвращать NaN, когда один из аргументов содержит undefined", () => {
    expect(add(undefined, 4)).toBeNaN();
  });
});

describe("Функция вычитания", () => {
  it("должна возвращать 2 при аргументах (6, 4)", () => {
    expect(subtract(6, 4)).toBe(2);
  });
  it("должна возвращать NaN, когда одним из аргументов передается undefined", () => {
    expect(subtract(undefined, 3)).toBeNaN;
  });
  it("должна возвращать NaN, когда одним из аргументов передается null", () => {
    expect(subtract(null, 5)).toBeNaN;
  });
  it("должна возвращать NaN, когда один из аргументов строчного типа", () => {
    expect(subtract("123", 5)).toBeNaN();
  });
  it("должна возвращать NaN, когда один из аргументов содержит undefined", () => {
    expect(subtract(undefined, 4)).toBeNaN();
  });
});

describe("Функция умножения", () => {
  it("должна возвращать 18 при аргументах (6, 3)", () => {
    expect(multiply(6, 3)).toBe(18);
  });
  it("должна возвращать NaN, когда одним из аргументов передается undefined", () => {
    expect(multiply(undefined, 3)).toBeNaN;
  });
  it("должна возвращать NaN, когда одним из аргументов передается null", () => {
    expect(multiply(null, 5)).toBeNaN;
  });
  it("должна возвращать NaN, когда один из аргументов строчного типа", () => {
    expect(multiply("123", 5)).toBeNaN();
  });
  it("должна возвращать NaN, когда один из аргументов содержит undefined", () => {
    expect(multiply(undefined, 4)).toBeNaN();
  });
});

describe("Функция деления", () => {
  it("должна возвращать 2 при аргументах (6, 3)", () => {
    expect(divide(6, 3)).toBe(2);
  });
  it("должна возвращать NaN, когда одним из аргументов передается undefined", () => {
    expect(divide(undefined, 3)).toBeNaN;
  });
  it("должна возвращать NaN, когда одним из аргументов передается null", () => {
    expect(divide(null, 5)).toBeNaN;
  });
  it("должна возвращать NaN, когда один из аргументов строчного типа", () => {
    expect(divide("123", 5)).toBeNaN();
  });
  it("должна возвращать NaN, когда один из аргументов содержит undefined", () => {
    expect(divide(undefined, 4)).toBeNaN();
  });
});
