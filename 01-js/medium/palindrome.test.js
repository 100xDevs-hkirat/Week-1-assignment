const palindrome = require("./palindrome");

test("String is Palindrome.",()=>{
    expect(palindrome("Aabxddxbaa")).toBe(true);
})
test("String is Palindrome.",()=>{
    expect(palindrome("i'dontKnow")).toBe(false);
})
test("String is Palindrome.",()=>{
    expect(palindrome("134244231")).toBe(false);
})
test("String is Palindrome.",()=>{
    expect(palindrome("132422444231")).toBe(false);
})
test("String is Palindrome.",()=>{
    expect(palindrome("HItherethereIH")).toBe(false);
})
test("String is Palindrome.",()=>{
    expect(palindrome("123456654321")).toBe(true);
})
test("String is Palindrome.",()=>{
    expect(palindrome("axdcfcdxa")).toBe(true);
})