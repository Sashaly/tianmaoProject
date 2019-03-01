//准备开发路由
let routes=require('./routes');
class Router{
  constructor(){
    this.routes=routes;//路由表
  }
  init(){
    this.listenHashChange();
  }
  handleNavLink(path){//当a标签切换时添加类名active
    $('.nav-link').removeClass('active');
    $('.nav-link').each(function(i,item){//i 默认第一个参数是index
      if($(item).data('path')===path) $(item).addClass('active');
    })
  }
  listenHashChange(){
    window.addEventListener('hashchange',()=>{
      let path=location.hash.replace("#",'');
      let handle=this.routes[path];
      if(handle) {
        handle();
        this.handleNavLink(path);
      }
      console.log(path);
    })
  }
}

module.exports=Router