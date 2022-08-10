//Write a function and use 'call' to call the function

var obj = {num:2};
var fun = function(a,b){
   return this.num+a;
}; 
console.log(fun.call(obj,1,2));


//Write a program using apply
var arr = [1,2];
console.log(fun.apply(obj,arr));


//Write a program using bind
var bound = fun.bind(obj);
console.log(bound(1,2));


//Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
var student ={age:20};
var ageFun = function(){
   console.log('age of student is '+this.age);
};
var studentAge = ageFun.bind(student);
studentAge();


//Currying with bind
let multiply = function(x,y){
   console.log(x*y);
}
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

//let multiplyByThree = multiply.bind(this,3,3);
//multiplyByThree(5);

//let multiplyByFour = multiply.bind();
//multiplyByFour(4,3);

///multiply(5,3);


//currying with closure
let product = function(x){
   return function(y){
      console.log(x*y);
   };
};
let productByTwo = product(2);
productByTwo(3);

