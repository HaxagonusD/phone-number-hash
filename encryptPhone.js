/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */


const encryptPhoneNumber = (something)=>
  something
  .split("")
  .reduce((acc, curr,index, array)=>{
    return index <= 6 && curr !== "-"? acc + "*" : acc + curr; 
  },"")

module.exports = encryptPhoneNumber;
