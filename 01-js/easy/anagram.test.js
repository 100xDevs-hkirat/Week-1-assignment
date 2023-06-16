//Import function
const anagram = require("./anagram");

test("Strings are anagram or not ?" , ()=>{
    expect(anagram("Adfqw24","4q2adwf")).toBe(true);
})
test("Strings are anagram or not ?" , ()=>{
    expect(anagram("Don't113","31dmkw';f")).toBe(false);
})
test("Strings are anagram or not ?" , ()=>{
    expect(anagram("!s3v:Vc.e","s3v!V:C.E")).toBe(true);
})
test("Strings are anagram or not ?" , ()=>{
    expect(anagram("1023456789","0192387465")).toBe(true);
})
test("Strings are anagram or not ?" , ()=>{
    expect(anagram("Mha","RPrab")).toBe(false);
})
