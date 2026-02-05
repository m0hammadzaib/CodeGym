let k = prompt("Enter key");
let v = prompt("Enter value");

localStorage.setItem(k,v);

if(k==="Home"){
    localStorage.removeItem(k);
}

console.log(`The value of ${k} is ${v} is defined`);
