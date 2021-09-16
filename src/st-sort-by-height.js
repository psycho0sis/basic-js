import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
 let n = arr.length;
    for (let i = 0; i < n - 1; i++){ 
      for (let j = 0; j < n - 1 - i; j++){ 
        if (arr[j + 1] === -1 && arr[j + 2]) {
          let t = arr[j + 2]; 
            arr[j + 2] = arr[j]; 
            arr[j] = t; 
        } else if (arr[j + 1] < arr[j]){ 
          let t = arr[j + 1]; 
            arr[j + 1] = arr[j]; 
            arr[j] = t; 
        }
       }
     }                     
    return arr;
}
