// Arreydagi sonlarni bir biriga qo`shib natijani qaytaruvchi funksiya --->

var numbers = [1, 3, 5, 9];

function calculateSum(result) {
  sum = 0;
  for (var number of numbers) {
    sum += number;
  }
  return sum;
}
// console.log('Given elements are: ' + numbers)
// console.log('Sum of these elements is: ' + calculateSum(numbers));


// <---- Matndagi eng uzun so`zni topib beruvchi funksiya 


var words = 'assalomu aleykum, xush kelibsiz O`zbekistonga!';


  function findLongestWord(word) {
    var text = []
    text = words.split(' ');
    var maxLength = '';
  
    for (var name of text) {
      if (name.length > maxLength.length) {
        maxLength = name;
      }
    }
    return maxLength;
  }
  
  
console.log(findLongestWord(words))
