// // what is object ? 

// console.log("Let's Start");

// //object
// //this is called object oriented programming
// let rectangle = {
//     //properties
//     length : 1,
//     breadth : 2,

//     // this is called the method of the object
//     // not a function called method
//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

// let rectangle1 = {
//     //properties
//     length : 1,
//     breadth : 2,

//     // this is called the method of the object
//     // not a function called method
//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

// let rectangle2 = {
//     //properties
//     length : 1,
//     breadth : 2,

//     // this is called the method of the object
//     // not a function called method
//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };
//agr mein aise hi krta gya to meri code ki readability km ho jaygi esliye 
// mein yeh chahta hu ki koi aisa function ho jo ki object create krta ho 

//object creation - how?
// factory function 
// constructor function



// factory function 
// //camel casing at function name create rectangle
// except first letter rest all letters of first word capital 
// function createRectangle(len,bre){
//     let rectangle = {
//             //properties
//             // length : length,
//             // breadth : breadth,
//             length : len,
//             breadth : bre,
//             // length,breadth,

        
//             // this is called the method of the object
//             // not a function called method
//             // draw: function(){
//             //     console.log('drawing rectangle');
//             // }
//             draw(){
//                 console.log('draw kro rectangle');
//             }
//         };
//     return rectangle;
// }
// let rectangleobj1 = createRectangle(5,4);
// // rectangleobj1 is a object 
// rectangleobj1.length;
// rectangleobj1.draw();



//constructor function 
// pascal notation - > first letter of every word is capital  
// constructor function is a function that is intializes your methods or properties
// // no need to return in constructor function 
// // //this refer to the current object
// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;

//     this.draw = function(){
//         console.log('drawing');
//     }
// }
// //object creation using constructor
// // new keyword in javascript return empty object
// let rectangleobj = new Rectangle();
// rectangleobj.length;
// rectangleobj.draw();
// rectangleobj.color = "Yellow";
// console.log(rectangleobj);
// delete rectangleobj.color;
// console.log(rectangleobj);

// //Dynamic nature of objects

//object cloning - clone #1 by iterating
// let src = {
//     a : 10,
//     b : 20,
//     c : 30
// };
// let dest = {};
// for(let key in src){
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

// // #2 - clone by assign 
// let src = {
//     a : 10,
//     b : 20,
//     c : 30
// };
// let src2 = { value : 25 };
// let dest = Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(dest);

// #3 - clone by spread 
// let src = {
//     a : 10,
//     b : 20,
//     c : 30
// };
// let dest = {...src};
// console.log(dest);
// src.a++;
// console.log(dest);