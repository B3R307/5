/**
 * reverseObject()
 *
 * Write a function called reverseObject(). It should take as input an object,
 * and it should output a new object where the keys and values are reversed.
 *
 * reverseObject({ shoe: 'Nike', type: 'soccer' })
 *  => {
 *   Nike: 'shoe',
 *   soccer: 'type'
 * }
 *
**/

//++ YOUR CODE HERE


function reverseObject(ordObj){
    var newReverseObject = []

    for(var prop in ordObj){
      newReverseObject[ordObj[prop]] = prop
    }
    console.log(newReverseObject);
    return newReverseObject
}









// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-04');
  console.log('%cFunction: reverseObject', 'background-color: green; color: white')
console.groupEnd();


var object1 = {
	 occupants: 4,
	 apartmentNo: "2b",
	 structuralIntegrity: "failing",
	 name: 'Oakridge'
}

var object2 = {
	name: "Abby",
	gender: "female",
	description: "dog",
}

var object3 = {
	make: "Ford",
	model: "Model-T",
	year: "1921",
	license: 'N89LP2'
}

var reversedObj1 = reverseObject(object1)
var reversedObj2 = reverseObject(object2)
var reversedObj3 = reverseObject(object3)


/* ----------------------- TEST-1a  ----------------------- */
// Confirms that reverseObject reverses the keys + values
/* ------------------------------------------------------ */
console.log('TEST-1a');

console.assert( reversedObj1.Oakridge === 'name' )
console.assert( reversedObj1['2b'] === 'apartmentNo' )
console.assert( reversedObj1.failing === 'structuralIntegrity' )

/* ----------------------- TEST-1b  ----------------------- */
// Confirms that reverseObject reverses the keys + values
/* ------------------------------------------------------ */
console.log('TEST-1b');

console.assert( reversedObj2.dog === 'description')
console.assert( reversedObj2.female === 'gender')
console.assert( reversedObj2.Abby === 'name')

/* ----------------------- TEST-1c  ----------------------- */
// Confirms that reverseObject reverses the keys + values
/* ------------------------------------------------------ */
console.log('TEST-1c');

console.assert( reversedObj3.Ford === 'make')
console.assert( reversedObj3['N89LP2'] === 'license')
console.assert( reversedObj3['1921'] === 'year')

/* ---------------------------------------------------- */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
