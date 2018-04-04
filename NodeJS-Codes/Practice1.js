//ES6 compliant
let sub = () => ('Hello World');
console.log(sub());


let you = (me =>  'Welcome  ' + me);
console.log(you('Ade'));

// For Usage
 for (let i = 1; i < 5; i++) {
  console.log(i)
  setTimeout(function () {
    console.log(i)
  }, 1000)
};


// Array Usage
let array = [1,7,98,5,4,2,25]
// ES6 way
let moreThan20 = array.filter(num => num > 20)

console.log(moreThan20);