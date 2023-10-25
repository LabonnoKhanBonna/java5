// function isJavaScriptFile (filename){
//     if (typeof filename != "string"){
//         retuen "please provide me a valid file name "
//     }
//     else {

//     }
// }
// console.log(isJavaScriptFile("hello.html"))

// problem 3 where i have given a function named mindgame 

function mindGame (x){
 if (typeof x != "number"){
    return "please provide a number"
 }
 else if (x <= 0){
    return "please provide a positive number"
 }
 else{
    const result = (((x*3) + 10 )/2) -5
    return result;
 }

}
console.log(mindGame(5))

//###########
function mindGame (x){
    if (typeof x != "number" || x<= 0){
       return "please provide a number"
    }
   
    else{
       const result = (((x*3) + 10 )/2) -5
       return result;
    }
   
   }
   console.log(mindGame(5))