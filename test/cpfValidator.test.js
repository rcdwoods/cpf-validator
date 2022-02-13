const isCpfValid = require("../service/cpfValidator.js");

test('must return false when cpf is null', () => {
    expect(isCpfValid(null)).toBe(false)
});

test('must return false when cpf is undefined', () => {
    expect(isCpfValid(undefined)).toBe(false)
});

test('must return false when cpf is empty', () => {
    expect(isCpfValid("")).toBe(false)
});

test ('must return false when cpf has size greater than 11', () => {
    expect(isCpfValid("123456789012")).toBe(false)
})

test ('must return false when cpf has size less than 11', () => {
    expect(isCpfValid("123456")).toBe(false)
})

test ('must return true when two digits is correct', () => {
    expect(isCpfValid("12345678909")).toBe(true)
})

test ('must return true when two digits is correct and has special characters', () => {
    expect(isCpfValid("123.456.789-09")).toBe(true)
})

test ('must return false when only a validator digit is correct', () => {
    expect(isCpfValid("123.456.789-19")).toBe(false)
})