// message = "Good global"

// function hello1(){
//     // message = "Good Morning"
//     console.log("Hello 1One" + " "+ message)
// }

// hello1()

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}
const fn = outer();
fn();
fn();
