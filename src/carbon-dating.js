import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  let MODERN_ACTIVITY = 15;
  let HALF_LIFE_PERIOD = 5730;
  if (sampleActivity === undefined) return false;
  if (typeof sampleActivity === "string"){ 
      if (Number(sampleActivity) > 0 && Number(sampleActivity) < 15) {
        let result =  Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD)); 
      return result;
      } else {
        return false;
    } 
  } else {
        return false;
    } 
}

