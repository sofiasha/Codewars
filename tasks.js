// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
	let j = 0;
	  for (let i = 0; i < arrayOfSheep.length; i++)
		{
		  if (arrayOfSheep[i])
			j += 1;
		}
	return (j);
  }

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

  function filter_list(l) {
	// Return a new array with the strings filtered out
	let res = l.filter(a => typeof a !== 'string');
	return res;
  }

  