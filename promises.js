const { reject } = require("lodash");
const { resolve } = require("path");

let p =new Promise((resolve,reject)=>{

let a=1+1;
if(a===2){
    resolve(`a= ${a} is true`);
}
else{
    reject(`a=${a} is false`);
}
})


p.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(`error = ${message}`);

})

// then() and catch() are methods used to handle the outcome of a Promise in JavaScript.

// The then() method is used to handle the resolved value of the Promise. When the Promise is resolved, the function passed to then() is called and the resolved value is passed to it as an argument. The returned value from the function passed to then() becomes the new resolved value of the Promise. The then() method can be chained to handle multiple resolved values in a sequence.

// The catch() method is used to handle the rejection of a Promise. When the Promise is rejected, the function passed to catch() is called and the rejection reason is passed to it as an argument. The returned value from the function passed to catch() becomes the new resolved value of the Promise. The catch() method can also be chained to handle multiple rejection reasons in a sequence.

// In the example code provided earlier, then() is used to handle the resolved value of the Promise and catch() is used to handle the rejection of the Promise.