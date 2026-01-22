const { error } = require("console");
const fs = require("fs")

console.log(fs);

// console.log("starting")
// // fs.writeFileSync("zaib.txt","zaib is a programmer")  // synchornous approach
// console.log("ending")

fs.writeFile("new.txt","this is a new file by zaib",()=>{
    console.log("File created successfully")
    fs.readFile("new.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})

