function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for (let i = 0; i < theArray.length; i++) {
		total += theArray[i];
	}

	return total;
}

console.log(sumTheElements([10,20,5,15,4]));