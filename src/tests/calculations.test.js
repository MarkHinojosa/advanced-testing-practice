import {add, subtract, multiple,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 2 from 3 and return 1", () => {
    expect(subtract(3, 2)).toBe(1);
  });
});

describe("multiply", () => {
  it("multiply 3 time 3 an/d should return 9", () => {
    expect(multiple(1, 2)).toBe(2);
  });
});


describe("divide", () => {
  it("should divide 4 by 2 and should return 2", () => {
    expect(divide(2, 2)).toBe(1);
  });
});
