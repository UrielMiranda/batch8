
var num = prompt("Escribe un número");

function fibonacci(num){
  var a = 1, b = 0, temp;
  while(num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;

  }
  console.log(b);
  document.write(b);
  return b;
}

fibonacci(num);
