// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// e.g. "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

function order(words){
	return words.split(' ').sort(function(a,b)
	{
	  return a.match(/\d/) - b.match(/\d/);
	}).join(' ');
	}

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
	let i = 0;
	 if ((pin.length == 4 || pin.length == 6) && (pin.match(/^\d+$/))) //  Регулярные выражения. ^ - начало строки,\d+ находит цифры, $ конец строки 
	   return true;
	 else
	   return false;
  }
  
  let p = '1234';
  console.log(p);
  console.log (validatePIN(p));

// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
	let j = 0;
	  for (let i = 0; i < arrayOfSheep.length; i++)
		{
		  if (arrayOfSheep[i])
			j += 1;
		}
	return (j);
  }

// In this kata you will create a function that takes a list of non-negative integers and 
// strings and returns a new list with the strings filtered out.

  function filter_list(l) {
	// Return a new array with the strings filtered out
	let res = l.filter(a => typeof a !== 'string');
	return res;
  }

  // You are going to be given a word. Your job is to return the middle character of the word. 
  // If the word's length is odd, return the middle character. 
  // If the word's length is even, return the middle 2 characters.

  function getMiddle(s) {
	var mid = s.length / 2;
	return (s.length % 2) 
	  ? s.charAt(Math.floor(mid)) // charat returns sym with the index given as a param
	  : s.slice(mid - 1, mid + 1); // slice returns new array, 1 param - starting point, 2 param - finishing point 
  }