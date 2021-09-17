import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(str) {
  let arr = str.split('');
  let newStr;
  let index = arr.lastIndexOf("@");
  newStr = arr.slice(index + 1);
  return newStr.join(""); 
}
