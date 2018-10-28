/**
 * getKeys()
 *
 * Create a function called getKeys() that accepts an object
 * as an argument and returns an array of strings of
 * the object's proerties
 *
 * getKeys({pid: 1238, title: 'Gold Necklace', price: 33})
 *   => ['pid', 'title', 'price']
 *
*/

//++ YOUR CODE HERE


function getKeys(someObj){
	// console.log(someObj);
	var arrOfProperties = []

	for(var prop in someObj){
		console.log(prop);
		arrOfProperties.push(prop)

	}
	console.log(arrOfProperties);
	return arrOfProperties
}






//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var exampleObj = {
	firstName:"John",
	lastName: "Doe",
	age: 50,
	eyeColor:"blue"
}

var exampleObj2 = {
	_id:"588b560",
	name: 'Sally Pittman',
	gender:"male",
	favoriteFruit: "apple",
	company: "Ersum"
}

var output_1 = getKeys(exampleObj)
// expected output: ['firstName', 'lastName', 'age', 'eyeColor']


var output_2 = getKeys(exampleObj2)
// expected output: ['_id', 'name', 'gender', 'favoriteFruit', 'company']



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-03');
  console.log('%cFunction: getKeys', 'background-color: green; color: white')
console.groupEnd();


/* ----------------------- TEST-1  ----------------------- */
// Function confirms that the returned value is an array with a length
//   that is the same number of properties from the argument object
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert( Array.isArray(output_1) === true )
console.assert( Array.isArray(output_2) === true )

console.assert( output_1.length === 4 )
console.assert( output_2.length === 5 )



/* ----------------------- TEST-2a  ----------------------- */
// confirms that 'age', 'firstName', 'lastName', etc...
//   are in returned array for getKeys(exampleObj)
/* ------------------------------------------------------ */
console.log('TEST-2a');


console.assert( output_1.indexOf('age') >= 0 )
console.assert( output_1.indexOf('firstName') >= 0 )
console.assert( output_1.indexOf('lastName') >= 0 )

console.assert( output_1.indexOf('Doe') === -1 )



/* ----------------------- TEST-2  ----------------------- */
// confirms that '_id', 'favoriteFruit', 'name'
//   are in returned array for getKeys(exampleObj2)
/* ------------------------------------------------------ */
console.log('TEST-2b');

console.assert( output_2.indexOf('favoriteFruit') >= 0 )
console.assert( output_2.indexOf('_id') >= 0 )
console.assert( output_2.indexOf('name') >= 0 )
console.assert( output_2.indexOf('gender') >= 0 )

console.assert( output_2.indexOf('age') === -1 )
console.assert( output_2.indexOf('eyeColor') === -1 )


/* ---------------------------------------------------- */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
