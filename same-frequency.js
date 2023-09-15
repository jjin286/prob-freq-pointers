"use strict";

/**
 this function takes 2 positive integers to check if they have the same digit frequency
 input: num1, num2
 output: boolean
 */

function sameFrequency(num1, num2) {
  //set up the frequency function out of this function
  //get both inputs frequency objects
  const freqsNum1 = getFrequencyCounter(num1);
  const freqsNum2 = getFrequencyCounter(num2);

  //loop over num1's frequency object using for in loop
  //check if keys from num1obj are not in num2obj, return false
  //check if values from num1obj don't match values in num2 obj, return false
  //return true
  for (let key in freqsNum1) {
    if (!freqsNum2[key]) return false;
    if (freqsNum1[key] !== freqsNum2[key]) return false;
  }

  return true;
}

function getFrequencyCounter(items) {
  const freqs = {};
  const stringItems = '' + items;

  for (let item of stringItems) {
    const currItem = freqs[item] || 0;
    freqs[item] = currItem + 1;
  }
  return freqs;
}
