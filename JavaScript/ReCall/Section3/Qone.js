//   shallow copy 

const user1 ={
    name:"Zaib",
    address:{city:"Lucknow"}
}

// const user2 = {...user1}

// user2.address.city="Delhi"

// console.log(user1)

// deep copy 

let user2 = JSON.parse(JSON.stringify(user1));

user2.address.city="California"

console.log(user2)


const a = {x:1}
const b = a
b.x = 5

console.log(a)

