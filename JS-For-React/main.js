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

if(true){let x =30;}
// console.log(y);
console.log(x);



const book={title : 'hello world'};

book.title='hello world 2';
console.log(book.title)
console.log(book)
};






function addTraditional(a,b ) {
    
    

    return console.log(a+b);
}

const test = () => console.log('test');
// console.log(addTraditional(5,4));
console.log('---------------');
addTraditional(3,5);
console.log('---------------');


test();
main();






console.log('---------------');



const ids=[1,2,3,4];


ids.forEach((id)=>{id++;
    console.log(id);
});

console.log(ids[0]);
console.log('----<<<Arrow Function>>>------');
// Arrow funcation

// test1(); while make a error becuase it's const can't access 

const test1 =() => {console.log('test Arrow Function')}

test1();


console.log('-------<<<Rest Operator------');

// Rest Operator
function RestOPTest(x,z,...y){
    console.log(x);
    console.log(z);
    console.log(y);


}

RestOPTest('ahmed','ali','mohamed','noah','zina')
console.log('-------<<<>>>--------');
