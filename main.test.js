const Convert = require ('./Main.js');

const convert = new Convert();

test ('Convert Celcius to Farenheit', () => {
  expect(convert.fromCelcius ('far', 10)).toBe (50);
})

test ('Convert Celcius to Reamur', () => {
  expect(convert.fromCelcius ('rea', 20)).toBe (25);
})

test ('Convert Celcius to Celcius', () => {
  expect(convert.fromCelcius ('cel', 20)).toBe (20);
})

test ('Convert Farenheit to Celcius', () => {
  expect(convert.fromCelcius ('cel', 20)).toBe (1128.888888888889);
})

test ('Convert Farenheit to Reamur', () => {
  expect(convert.fromCelcius ('rea', 20)).toBe (-5.333333333333333);
})

test ('Convert Farenheit to Farenheit', () => {
  expect(convert.fromCelcius ('far', 20)).toBe (20);
})

test ('Convert Reamur to Celcius', () => {
  expect(convert.fromCelcius ('cel', 20)).toBe (25);
})
test ('Convert Reamur to Farenheit', () => {
  expect(convert.fromCelcius ('far', 20)).toBe (77);
})
test ('Convert Reamur to Reamur', () => {
  expect(convert.fromCelcius ('rea', 20)).toBe (20);
})
