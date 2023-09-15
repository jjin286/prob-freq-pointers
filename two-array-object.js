"use strict";


/**
 function twoArrayObject takes 2 arrays, might be different lengths, return an object with keys from first array and values from second array
 and values from second array
 input:keys, values
 output:object
 */

function twoArrayObject(keys, values) {
  //declare a const variable as the final object
  const mergedObj = {};


  //loop over keys array to access all elements as keys - index for loop
  //use the index of the keys array to access elements from values as the values of the obj property
  //create object[element of keys] = values[i]
  //if values at index is undefined, reassign object[element of keys] to null
  for (let i = 0; i < keys.length; i++) {

    mergedObj[keys[i]] = values[i];

    if (values[i] === undefined) {
      mergedObj[keys[i]] = null;
    }
  }
  //return final object
  return mergedObj;
}
