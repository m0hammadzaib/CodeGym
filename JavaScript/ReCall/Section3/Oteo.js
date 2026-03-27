let users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 20 }
]


function group(users){
    return users.reduce((acc,user)=>{
      if(!acc[user.age]){
        acc[user.age] =[]
      }

      acc[user.age].push(user)

      return acc
    },{})
}

let result = group(users)

console.log(result)

let arr = [1,2,3,4,5,6];

let ans = arr.reduce((acc,num)=>{
    
    if(num%2===0){
      if(!acc["even"]){
        acc["even"]=[]
      }
        acc["even"].push(num)
    }else{
        if(!acc["odd"]){
        acc["odd"]=[]
      }
        acc["odd"].push(num)
    }

    return acc
},{})

console.log(ans)

let useage = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 20 }
]





