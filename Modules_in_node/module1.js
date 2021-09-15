const myvar = "soumya";

const factorial = (val) => {
  let element = 1;
  for (let i = 1; i <= val; i++) {
    element = element * i;
  }
  return element;
};

module.exports = factorial;
