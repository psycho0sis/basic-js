import { NotImplementedError } from "../extensions/index.js";

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
  str = String(str);
  let repitTimes = options.repeatTimes || 1;
  let addition = String(options.addition);
  let separator = options.separator || "+";
  let addSep = options.additionSeparator || "|";
  let addTimes = options.additionRepeatTimes || 1;

  if (addition == "undefined") addition = "";

  let repeatingAdd = (addition + addSep).repeat(addTimes - 1) + addition;

  return (
    (str + repeatingAdd + separator).repeat(repitTimes - 1) + str + repeatingAdd
  );
}
