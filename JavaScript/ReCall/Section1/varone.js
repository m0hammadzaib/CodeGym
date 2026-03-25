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
