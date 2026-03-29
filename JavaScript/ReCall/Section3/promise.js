// async function dateFetch(something) {
//      try{
//         let res = await fetch("./api/something")
//         let data = await res.json()
//         console.log(data)
//      }catch(err){
//       console.log("Error", err)
//      }
// }

let p = new Promise((resolve,reject)=>{
      setTimeout(() => {
          let data =  resolve("Api arrived now")
      }, 3000);
})

p
.then((message) => console.log(message))
  .catch((error) => console.error(error));