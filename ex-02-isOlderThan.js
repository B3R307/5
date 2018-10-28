/**
 * isOlderThan()
 *
 * Write a method called .isOlderThan() that accepts a number argument
 * and returns a boolean value of `false` if the input number is less
 * than the value of the `.age` property
 *
**/

let someGirl = {
  name: 'Lisa',
  age: 20
}

/*
 * On the `someGirl` object, write the '.isOlderThan' method and its logic  below :
*/

//++ YOUR CODE HERE


someGirl.isOlderThan = function(someNum){

   var isOlder = true

   if(someNum >= this.age){
     isOlder = false

   }
    console.log(isOlder);
    return isOlder
}








// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-02');
  console.log('%cFunction: isOlderThan', 'background-color: green; color: white')
console.groupEnd();


/* ----------------------- TEST-1  ----------------------- */
// Function confirms that isOlderThan is a function
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert (typeof someGirl.isOlderThan === 'function')


/* ----------------------- TEST-2  ----------------------- */
// Function confirms that .isOlderThan(arg) operates
//    on `age` property and returns boolean
/* ------------------------------------------------------ */
console.log('TEST-2');

console.assert (someGirl.isOlderThan(21) === false)
console.assert (someGirl.isOlderThan(44) === false)
console.assert (someGirl.isOlderThan(14) === true)
console.assert (someGirl.isOlderThan(8) === true)
console.assert (someGirl.isOlderThan(20) === false)


/* ----------------------- TEST-2  ----------------------- */
// checking `isOlderThan` method with other object context
//   using .call method
/* ------------------------------------------------------ */
console.log('TEST-3');

console.assert( someGirl.isOlderThan.call({ age: 20 }, 35) === false)
console.assert( someGirl.isOlderThan.call({ age: 30 }, 40) === false)
console.assert( someGirl.isOlderThan.call({ age: 15 }, 10) === true)


/* ---------------------------------------------------- */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
