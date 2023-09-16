"use strict";

/**
 * Separate positive from negative numbers in an array
 * Input: non-zero numbers
 * Output: Original array
 */
function separatePositive(unseparated) {
  //leftidx rightidx
  //while leftidx < rightidx
  //if leftidx > 0 leftidx++
  //if rightidx < 0 rightidx--

  //if leftidx < 0 and rightidx > 0
  //swap using array destructuring
  //return
  let leftIdx = 0;
  let rightIdx = unseparated.length - 1;

  while(leftIdx < rightIdx){
    if(unseparated[leftIdx] > 0){
      leftIdx++;
    }

    if(unseparated[rightIdx] > 0){
      rightIdx--;
    }

    if(unseparated[leftIdx] < 0 && unseparated[rightIdx] > 0){
      let [leftIdx, ...other ,rightIdx] = unseparated;
    }
  }
}
