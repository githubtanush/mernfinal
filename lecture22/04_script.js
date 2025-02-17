//hosting - it is the process of moving function declaration to the top of file
// done automatically by js engine
//function invoke or call
// run();
// //function declaration
// function run(){
//     console.log('Running');
// }
// //named function assignment
// let stand = function walk(){
//     console.log('walking');
// }
// stand();
// //don't call function assignment by walk();
// // and also if u create function by function assignment 
// // then declaration must be at upper side
// let jump = stand;
// jump();

// //Anonymous function assignment
// let stand2 = function(){
//     console.log('walking');
// }
// stand2();


//function assignment => named function assignment and anonymous function assignment
                            // let a = fn br()               let b = fn();


function sum(a,b){
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}
console.log(sum(1,2));
console.log(sum(1));
console.log(sum());
console.log(sum(1,2,3,4,5));
//does not give any error  js handle it 

// arguments is the special hmari javascript ka pass jisko hm kehta hai arguments
