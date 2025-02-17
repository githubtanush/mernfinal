// // // // inbuilt objects and arrays 
// // // // math objects
// // // let lastname = 'Babbar';
// // // let message = 'This is my first message';
// // // String object with refrence type
// // // let message = new String('Babbar);
// // // //if we do with this ` sign then assitice this format will shown in console
// // // lastname.trim();
// // // lastname.replace('Babb','car');
// // // let messages = `This 
// // // is 
// // // my 
// // // first
// // // message`;

// // // let thanks = 
// // // `Hello Tanush ,

// // // Thanks for the opportunity

// // // Regards,
// // // Tanush`;
// // // console.log(thanks);
// // // console.log(messages);
// // // let words = message.split(' ');
// // // console.log(words);
// // // message.replace('first','second');
// // // console.log(words); 

// // // //Template literal 


// // //Date and Time
// // let date = new Date();
// // let date1 = new Date('September 28 2003 04:50');
// // let date2 = new Date(2003 , 8 , 28, 4);
// // console.log(date1);
// // console.log(date2);

// //function / methods - getters or setters at that case when we use and function or method 
// // value receiving / fetching - getters and setting - setters 

// //Arrays  - objects / Refrence type 
// // Adding new elements          splitting elements
// // finding elements             combining elements
// // removing elements


// // Arrays
// // let numbers = [1,4,5,7];
// // console.log(numbers);
// // console.log(numbers.length);

// // //insertion 
// // // end = numbers.push(9);                                end      =    push
// // // begin = numbers.unshift(8);                          beginning =    unshift
// // // middle = numbers.splice(2,0,'a','b','c')              middle   =    splice
// // //                        index,deletecount
// // if(numbers.indexOf(4) != -1) console.log("Present");
// // console.log(numbers.indexOf(4,2));

// // console.log(numbers.includes(7));
// // numbers.push(9);
// // numbers.unshift(8);
// // numbers.splice(2,0,'a','b','c','d');
// // console.log(numbers);


// // let courses = [
// //     {no: 1 , name : 'Love'},
// //     {no: 2 , name : 'Rahul'}
// // ];
// // console.log(courses);
// // console.log(courses.includes({no: 1, name : 'Love'}));



// //Searching on primitives - index of / includes
// //Searching on Object/Refrence - callback / functions 
// // A callback function is a function passed into another function as an argument, which 
// // is then invoked  inside the  outer function to complete some kind of routine or action
 

// //function1 -> function2 (call) ===> callback function
// // 1st action done when 2nd action is done already

// // let courses = [
// //     {no: 1 , naam : 'Tanush'},
// //     {no: 2 , naam : 'Arora'}
// // ];
// // console.log(courses);
// // let course = courses.find(function(courses) {
// //     return courses.naam == 'Tanush';
// // });
// // console.log(course);

// //object search - find() syntax
// // objectname.find(predicate function) Arrayname.find(callback function or predicate function) ==> return object
// //predicate object =>  function(course)

// //Arrow function 
// // let courses = [
// //     {no: 1 , naam : 'Tanush'},
// //     {no: 2 , naam : 'Arora'}
// // ];
// // console.log(courses);
// // let course = courses.find(course => courses.naam == 'kilvish');
// // console.log(course);

// // as course is a object or refrence type 
// // target - to find a course / object with name 'Tanush'
// //objects - find will work  indexof/include does not work
// // so we use courses . find and inside find method there is predicate function

// //Arrow functions - at this we remove function and brackets add arrow after array name then remove curly brackets then simply 
// // become its one liner



// //Removing element
// //end - pop()
// //beginning - shift()
// //middle - splice(index number, count - number of elements you want to delete)

// // let numbers=[1,2,3,4,5,6,7];
// // console.log(numbers);
// // //end
// // numbers.pop();
// // //beginning
// // numbers.shift();
// // //middle
// // numbers.splice(2,1);
// // console.log(numbers);


// //Emptying an Array
// let numbers = [1,2,3,4,5];
// //objects / refrences copy address hua value nahi 
// let numbers2  = numbers;


// // numbers = [];
// // numbers.length = 0; //readability and code wise most suitable best practice is this then splice

// //splice method

// // numbers.splice(0,numbers.length);

// while(numbers.length > 0) numbers.pop();

// //both are empty
// console.log(numbers);
// console.log(numbers2);


// // combining and slicing Arrays 
// // combining methods
// let first    = [1,2,3];
// let second   = [4,5,6];
// let combined = first.concat(second);
// // console.log(combined);
// // console.log(first); 

// //slicing methods
// let marks = [10,20,30,40,50]
// let slice = marks.slice(2);

// let sliced = combined.sliced()



// //Iterating an Array 
// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(arr);
// }
// // arr.forEach(function(number){
// //     console.log(number);
// // });
// arr.forEach(number => console.log(number));
// let numbers = [10,20,30,40,50];
// // const joined = numbers.join(',');
// // console.log(joined);
// let joined = numbers.join('_');
// console.log(joined);



//sorting arrays
// let numbers = [4,3,1,2,5];
// numbers.sort();
// console.log(numbers);


//filtering arrays 
// let numbers = [1,2,-3,-4];
// let filtered = numbers.filter(function(value){
//     return value >= 0;
// });
// let filte = numbers.filter(value => value < 0);
// console.log(filtered);
// console.log(filte);


//Mapping arrays 
// map method 
// map each element of array to something else
// map()
// let numbers = [ 7,8,9,10 ];
// let hero = numbers.map(function(value){
//     return 'student_no ' + value ;
// });
// let zero = numbers.map(value => 'student_no ' + value);
// console.log(hero);
// console.log(zero);


//Mapping with objects
let numbers = [1,2,-6,-9];
let filtered = numbers.filter( value => value >= 0 );
let items = filtered.map(function(num){
    return { value : num };
});
console.log(items);