import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let newArr = JSON.parse(JSON.stringify(arr));
  for(let i = 0; i < newArr.length; i++){
    if (Array.isArray(newArr[i])) {
      let j = newArr[i].length;
      while (j--) {
        if (newArr[i][j] === '--double-next' && newArr[i][j + 1]){
            newArr[i].splice(newArr[i][j + 1], 0, newArr[i][j + 1])
       } else if (newArr[i][j] === '--double-prev' && newArr[i][j - 1]){
         newArr[i].splice(newArr[i][j - 1], 0, newArr[i][j - 1])
       }
      } 
    } else {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }
  }
   return newArr;
}
