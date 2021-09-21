import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let min = 0;
  let arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++){
    arr[i] = Number(arr[i])
  } 
  if (arr.includes(0)) {
    min = 0;
  } else {
    min = Math.min.apply(null, arr)
  }
    let removed = arr.lastIndexOf(min)
    arr.splice(removed, 1);
    return Number(arr.join(""));
}
 
