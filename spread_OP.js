//spread operator:-
//by using spread operator we can pass the entire array elements one by one.
arr = [1, 2, 3];
const avg = (a, b, c) => {
  return (a + b + c) / 3;
};
const a = avg(...arr);
console.log("avg =", a);
/* other uses of spread operator */
//concatinate two arrays:-
ar1 = [1, 3, 5, 7];
ar2 = [2, 4, 6, 8];

let ar = [...ar1, ...ar2];
let ar3 = [11, 13, 15, ...ar1, 89];
let ar4 = [...arr];

console.log("ar =", ar);
console.log("ar3 =", ar3);
console.log("ar4 =", ar4);
