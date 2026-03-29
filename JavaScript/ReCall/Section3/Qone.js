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

let orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "completed" },
  { id: 3, status: "pending" },
  { id: 4, status: "completed" },
  { id: 5, status: "pending" }
]

let lastAns = orders.reduce((acc, order) => {

    let key = order.status

    if(!acc[key]){
        acc[key] = {
            count: 0,
            orders: []
        }
    }

    acc[key].count += 1
    acc[key].orders.push(order)

    return acc

}, {})

console.log(lastAns)

async function dateFetch(something) {
     try{
        let res = await fetch("./api/something")
        let data = await res.json()
        console.log(data)
     }catch(err){
      console.log("Error", err)
     }
}

let p = new Promise((resolve,reject)=>{
      setTimeout(() => {
        let data =  resolve(400)
      }, 3000);
      console.log(data)
})



