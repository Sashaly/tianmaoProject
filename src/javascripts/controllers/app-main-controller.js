
const { getFilmsList } = require('../models/app-main-model')
 
const render = async () => {
    let appMainView = require('../views/app-main.html');//是个字符串

    // 渲染首页的电影列表
    let filmsList = await getFilmsList()
   
    let template = Handlebars.compile(appMainView);//将字符串放进去 template是个方法
    console.log(template);
     console.log(filmsList.movieList);
    $('#app #main').html(template({ films: filmsList.movieList}))

}

module.exports = { render }