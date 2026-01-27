function main(){
    // console.log("hello");
var x= 10;
// var only variable will able to access in any scope in code
// let and const only in one scope
     var a = 1;
    let b = 2;
/*
console.log(window.a); // ✅ 1
console.log(window.b); // ❌ undefined
*/ 

if(true){var y =30;}
console.log(y);


};
main();

