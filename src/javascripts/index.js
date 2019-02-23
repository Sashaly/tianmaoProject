
const appController = require('./controllers/app-controller');
console.log(appController.render);
appController.render();

// let promise=new promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve(123)
//   }, 2000);
// })

//  const a= async()=>{
//    let hshssh=await promise.then((data)=>{
//      return data;
//    })
//   console.log(hahaha,"777");
//  }