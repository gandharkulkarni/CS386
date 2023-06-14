let a = +prompt('Enter side a',0); //+ changes input type to int (implicit conversion)
let b = +prompt('Enter side b',0);
let hypo = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
alert(`The hypotenuse = ${hypo}`)