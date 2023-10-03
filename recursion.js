/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  let longestWord = words[0].length;
  return Math.max(longestWord, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (!str) return "";

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;
  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length < 2) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, str.length - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";

  return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  //base
  if (arr.length === 0) return -1;

  if (arr[0] === val) return 0;

  //pare down arr while tracking # of iterations; # corresponds to idx
  //["duck", "cat", "cat", "pony"] cat = 1
  //iteration 1: 0, false
  //iteration 2: 1, true -> return 1

  if (findIndex(arr.slice(1), val) === -1) {
    return -1;
  } else {
    return findIndex(arr.slice(1), val) + 1;
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  //base case: no values remaining, return [vals]
  //iterate through values in obj
  //if value is obj, iterate through values in obj (recursive)
  //else if typeof value === "string" push to [vals]
  let vals = [];
  for (let item in obj) {
    if (typeof obj[item] === "string") {
      vals.push(obj[item]);
    }
    if (typeof obj[item] === "object") {
      vals.push(...gatherStrings(obj[item]));
    }
  }
  return vals;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
