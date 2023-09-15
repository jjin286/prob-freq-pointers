"use strict";
// add whatever parameters you deem necessary & write docstring
/**
 * Find pair/pairs of numbers that average to target number
 * Input: sorted array of numbers, target number
 * Output: Boolean
 */
function averagePair(nums, targetAvg) {
  // Multiple pointers
  //check empty array, return false
  //left index and right index
  //check if index values average to target number return true
  //if average of pair is < target value, move left index
  //if average of pair is > target value, move right index
// averagePair([1, 2, 3], 2.5);         // true
// averagePair([3, 3, 6, 12, 19], 8);   // false
// averagePair([1, 2, 3], 2);           // true
// averagePair([], 4);

  if(nums.length === 0) return false;

  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while(leftIdx < rightIdx){
    let average = (nums[leftIdx] + nums[rightIdx]) / 2;

    if(average === targetAvg) return true;

    if(average < targetAvg){
      leftIdx++;
    }

    if(average > targetAvg){
      rightIdx--;
    }
  }

  return false;
}

