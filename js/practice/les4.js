let input = document.getElementById('input');

input.addEventListener('blur', checkCountWords);

function checkCountWords() {
  const value = this.value;

  this.value = countWords(value);
  div('Кол-во слов через пробел:' + countWords(value))
};

let input2 = document.getElementById('input2');

input2.addEventListener('blur', function(){
  const value = this.value;
  longestWord(value); 
});

function longestWord(count, word) {
  const arr = count.split(' ');
  let emptyWord = '';
  let emptyCount = 0;

  for (let x=0; x<arr.length; x++){
    let y = arr[x].length;

    if(y > emptyCount) {
      emptyCount = y;
    }
    if (arr[x].length == emptyCount) {
      emptyWord = arr[x];
    }
  }
  count = emptyCount;
  word = emptyWord;

  div("Самое длинное слово - " + word);
  div("и кол-во символов в нем - " + count);

  return count, word
}