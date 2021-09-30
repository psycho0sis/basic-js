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
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
    let newArr = JSON.parse(JSON.stringify(arr));
        if (newArr[0] === '--discard-prev' || newArr[0] === '--double-prev'){
         newArr.splice(0, 1)
      }else if (newArr[newArr.length - 1] === '--double-next' || newArr[newArr.length - 1] === '--discard-next'){
        newArr.splice(-1, 1)
      }
    newArr.forEach(function(item, index){
      if (item === '--double-next'){
      newArr.splice(index, 1, newArr[index + 1])
      } else if (item === '--double-prev'){
        newArr.splice(index, 1, newArr[index - 2])
      } else if ((item === '--discard-next' && newArr[index + 2] === '--discard-prev') || (item === '--discard-next' && newArr[index + 2] === '--double-prev')){
       newArr.splice(index, 3);
      } else if (item === '--discard-next'){
       newArr.splice(index, 2);
      } else if (item === '--discard-prev'){
        newArr.splice(index - 1, 2)
      } 
   })
  return newArr;
}
