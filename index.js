function isPalindrome(word) {
  const split = word.split("");
  const split2 = split.reverse();
  const split3 = split2.join("")

  if(word === split3){
    return true 
  } else {
    return false
  }
}

/* 
function to take in one string
if the string equals to the string backwards
then return true
otherwise return false
*/

/*
  conver the string argument into array of characters, reverse the array using the reverse method, join the array of characters into a single string, then check the conditions to see if it equals to the input. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
