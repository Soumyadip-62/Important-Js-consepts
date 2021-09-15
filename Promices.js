const Promise = (val) => {
  return new Promise((resolve, reject) => {
    if (val > 5) {
      resolve("promise resolved");
    } else {
      reject("promise rejected");
    }
  });
};

let a = Promise(6);
a.then;
{
  console.log(a);
}
