/** array mapping helps us traverse an array without using a for loop */

const arr = [1, 3, 5];
var arr1 = arr.map((val) => {
  return val * 3;
});
console.log(...arr1);
//the map function multiplies every element of the array by 3
