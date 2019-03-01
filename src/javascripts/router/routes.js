const appIndexController=require('../controllers/app-index-controller');
const appCinemaController=require('../controllers/app-cinema-controller');
//写路由表
let routes={
  "/index":appIndexController.render,
  "/cinema":appCinemaController.render
  
}
module.exports=routes