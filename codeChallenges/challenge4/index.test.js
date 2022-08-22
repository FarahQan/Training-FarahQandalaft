/**
 * Complete the method/function so that it converts dash/underscore delimited words or any type from camel casing to snake case
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 */

/**
 * Examples
  "theStealthWarrior"  gets converted to "the-stealth-warrior"
  "TheStealthWarrior"  gets converted to "The_Stealth_Warrior"
 */

function toSnakeCase(str) {
  if (!str.length) {
    return "";
  }
  let snakeCase = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      if (i == 0) {
        snakeCase = snakeCase + `${str[i].toLowerCase()}`;
      } else {
        snakeCase = snakeCase + `_${str[i].toLowerCase()}`;
      }
    } else {
      snakeCase = snakeCase + str[i];
    }
  }
  return snakeCase;
}

// complexity is O(n)

describe("toSnakeCase ", () => {
  describe("When toSnake methode is invoked", () => {
    it("should convert empty string to empty string", () => {
      expect(toSnakeCase("")).toStrictEqual("");
    });

    it("should convert non-empty string to snake_case string", () => {
      expect(toSnakeCase("theStealthWarrior")).toStrictEqual(
        "the_stealth_warrior"
      );
      expect(toSnakeCase("TheStealthWarrior")).toStrictEqual(
        "the_stealth_warrior"
      );
      expect(toSnakeCase("ABC")).toStrictEqual("a_b_c");
    });
  });
});
