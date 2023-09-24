function firstChar(text) {
  // your code here
	let ans = text.trim().charAt(0);
	ans = `'` + ans + `'`;
	return ans;
	
}


// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));


