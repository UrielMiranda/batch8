var y = function(){
 return {a:5,
        b:function(){return 5},
        c:"Esto es un acadena",}};
};


//////////

var array_numbers = function(){
  return [1,2,3,4,5,6] // regresa un array de numeros
};
var suma = function(){
  return 4+6 // regresa una suma
};
var p = function(){
  return {
    a:array_numbers,
    b:[{a:1}, {b:2}, {c:3}, {d:4}, {f:5}], //Un array de objetos [{},{},{}]
    c:suma,
  }
};

/////////////
