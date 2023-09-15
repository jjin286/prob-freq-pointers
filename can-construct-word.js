"use strict";

// add whatever parameters you deem necessary & write doc comment
/**
 * Checks if word can be constructed using given letters
 * inputs: word, letter
 * output: boolean
 */
function canConstructWord(word, letter) {
  // Create frequency helper function

  // {a:2} {a:1, b:1, c:1}
  // check if word freq key is in letter freq; return false
  // check if word freq value is equal/less than in letter freq; return false;
  // return true;
  const wordFreq = frequencyCounter(word);
  const letterFreq = frequencyCounter(letter);
  
  console.log("Word Freq: ", wordFreq);
  console.log("Letter Freq: ", letterFreq);

  for(let char in wordFreq){
    if(!(char in letterFreq)) return false;

    if(wordFreq[char] > letterFreq[char]) return false;
  }

  return true;
}

/**
 * Creates an object containg char frequency, input string, output object
 */
function frequencyCounter(str) {
  const counter = {};

  for(let char of str){
    const curr = counter[char] || 0;
    counter[char] = curr + 1;
  }

  return counter;
}