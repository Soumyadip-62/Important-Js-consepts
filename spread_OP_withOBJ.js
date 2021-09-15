/**
 * Using Spread operator with objects
 */
let obj1 = {
  name: "Soumya",
  roll: "14",
  Sub: "Javascript",
};
let obj3 = { ...obj1 };
let obj2 = { ...obj1, Sub: "python" };
console.log(obj3);
console.log(obj2);

/** Destructuring the OBjects with spread operator */
let { name, roll, Sub } = obj2;
console.log(name, roll, Sub);
