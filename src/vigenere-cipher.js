import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(mod = true) {
    this.mod = mod;
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    return this.code(str.toUpperCase(), key.toUpperCase(), "encrypt");
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    return this.code(str.toUpperCase(), key.toUpperCase(), "decrypt");
  }
  code(str, key, method) {
    const result = [];
    for (let i = 0, j = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/)) {
        if (method == "decrypt") {
          result.push(
            String.fromCharCode(
              ((str[i].charCodeAt(0) -
                "A".charCodeAt(0) +
                (26 -
                  (key[j % key.length].charCodeAt(0) - "A".charCodeAt(0)))) %
                26) +
                "A".charCodeAt(0)
            )
          );
        } else {
          result.push(
            String.fromCharCode(
              ((str[i].charCodeAt(0) -
                "A".charCodeAt(0) +
                (key[j % key.length].charCodeAt(0) - "A".charCodeAt(0))) %
                26) +
                "A".charCodeAt(0)
            )
          );
        }
        j++;
      } else {
        result.push(str[i]);
      }
    }
    return this.mod ? result.join("") : result.reverse().join("");
  }
}
