// 1 вернуть кол-во вызовов
function showCalls() {
  let calls = 1; 
  return function() {
    return calls++
  }
} 

let fn = showCalls();

div( 'fn(): ' + fn(), document.getElementById('result1') );
div( 'fn(): ' + fn(), document.getElementById('result1') );
div( 'fn(): ' + fn(), document.getElementById('result1') );

// 2 


