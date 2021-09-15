/** Set Timeout function is used to set a time in the function, after that time (seconds) the code will be execuited  */
console.log("Soumyadip");
setTimeout(() => {
  console.log("Inside SettimeOut");
}, 1000);
console.log("Outside SettimeOut"); // this line will be executed first becoz the settimeout function will not wait till 1 second and will pass to next line of code.
// this nature of JavaScript is called Async.
