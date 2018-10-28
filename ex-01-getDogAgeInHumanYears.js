/**
 * getDogAgeInHumanYears()
 *
 * To get a dog's age in relation to human-years,
 * you need to multiply the number of years the dog
 * has lived by 7
 *
 * For example, if your dog is 3 years old,
 * then in human-years, your dog is 21.
 *
 * Write a method called getDogAgeInHumanYears() that
 *  gets a dog object's `.age` property and returns
 *  the human-years
 *
*/


let dog = {
  name: 'Abby',
  age: 5,
  legs: 4
}

/*
 * Write the logic '.getDogAgeInHumanYears()' method for `dog` below :
*/

dog.getDogAgeInHumanYears = function(){
  //++ YOUR CODE HERE

    var humanYears = (this.age * 7)
    console.log(humanYears);
    return humanYears


}



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-01');
  console.log('%cFunction: getDogAgeInHumanYears', 'background-color: green; color: white')
console.groupEnd();


/* ----------------------- TEST-1  ----------------------- */
// Function confirms that getDogAgeInHumanYears is a function
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert (typeof dog.getDogAgeInHumanYears === 'function')

/* ----------------------- TEST-2  ----------------------- */
// Function confirms that .getDogAgeInHumanYears() multiplies
//    `age` property's value by 7
/* ------------------------------------------------------ */
console.log('TEST-2');

console.assert (dog.getDogAgeInHumanYears() === 35)

console.assert( dog.getDogAgeInHumanYears.call({ age: 3, name: 'Jenny' }) === 21)
console.assert( dog.getDogAgeInHumanYears.call({ age: 10, name: 'Rufus' }) === 70)
console.assert( dog.getDogAgeInHumanYears.call({ age: 1, name: 'Mia' }) === 7)

/* ---------------------------------------------------- */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
