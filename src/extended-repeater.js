import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    const {repeatTimes, separator = "+", addition = "", additionRepeatTimes, additionSeparator = ""} = options;
  let mediumResult = str.toString() + (`${addition.toString()}${additionSeparator}`.repeat(additionRepeatTimes));
  console.log(mediumResult)
  let i = 0;
  let result = "";
  let index = 0;
  while (repeatTimes > i){
    if(index === repeatTimes - 1){
      return result += mediumResult;
    }
    i++;
    index++;
    result += mediumResult + separator;
    
  }
  return result;
}
