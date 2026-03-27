function child(name){
    return name
}

function parent(callback){
    console.log("Hello")
    setTimeout(() => {
     console.log( callback("Zaib"))  
    }, 2000);
}

parent(child)

const arr = [1,2,6,9,7,5,6,7,8,3,1,2,4,7,8]

const unique =[...new Set(arr)]

console.log(unique)

