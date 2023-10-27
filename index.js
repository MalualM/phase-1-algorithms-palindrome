function isPalindrome(word) {
    // Write your algorithm here
      function stringReverse(string){
        return string.split('').reverse().join('');
    }
    const input = `robot`
    const reversedString=stringReverse(input) 
  
    function reverseChecker(){
        if(input===reversedString){
            console.log(true)
        }
        else(console.log(false))
    }
    reverseChecker()
  }
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
