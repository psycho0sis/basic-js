import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let ruArr = [];
  let secondArr = [];
  let thirdArr = [];
  let obj = {};
  if (domains.length < 1) return {};

  domains.forEach((item) => {
    let splitItem = item.split(".").reverse();
    let [first, second, third] = splitItem;
    ruArr.push(first);
    obj[`.${first}`] = ruArr.length;

    secondArr.push(`${first}.${second}`);
    obj[`.${first}.${second}`] = secondArr.length;

    if (third) {
      thirdArr.push(`${first}.${second}.${third}`);
      obj[`.${first}.${second}.${third}`] = thirdArr.length;
    } else {
      return;
    }
  });
  return obj;
}
