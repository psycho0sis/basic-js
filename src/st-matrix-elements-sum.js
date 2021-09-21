import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let sum1 = 0;
  let sum2 = 0;   
  if (matrix.flat(2).includes(0)){
      for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++) {
        sum1 += matrix[0][j];
        if (matrix[i] !== undefined && matrix[i][j] !== 0){
          sum2 += matrix[i + 1][j];
        } 
      }
        return sum1 + sum2; 
     } 
    } else {
      let newArr = matrix.flat(2);
      let result = newArr.reduce(function(acc, item) {
        return acc + item;
      }, 0);
      return result;
    }
}
