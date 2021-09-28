import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  if (names.length === 0) return [];
  let newArr = []; 
  newArr.push(names[0]);
 for (let i = 1; i < names.length; i++){
   let k = 0;
   let name = names[i];
   function rename(){
     if (newArr.includes(name)){
     k++; 
     name = names[i] + `(${k})`;
     rename();
   } else {
     newArr.push(name);
   }  
 }
   rename();
}
  return newArr;
}
