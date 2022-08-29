/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 */
/**
 * Examples
  "the-stealth-warrior" gets converted to "theStealthWarrior"
  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */
function toCamelCase(str) {
  if (!str.length) return str;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      newStr = newStr + str[i + 1].toUpperCase();
      i++;
    } else {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

// complexity O(n)

describe("Tests", () => {
  it("test toSnakeCase", () => {
    expect(toCamelCase("")).toStrictEqual("");
    expect(toCamelCase("the_stealth_warrior")).toStrictEqual(
      "theStealthWarrior"
    );
    expect(toCamelCase("The-Stealth-Warrior")).toStrictEqual(
      "TheStealthWarrior"
    );
    expect(toCamelCase("A-B-C")).toStrictEqual("ABC");
  });
});
