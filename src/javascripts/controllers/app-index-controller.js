
const { getFilmsList } = require('../models/app-index-model');
let appHeaderView = require('../views/app-header.html');//首页渲染自己的头部
const appMainView = require('../views/app-main.html');//是个字符串
const render = async () => {
    //1.渲染头部
    $('#app #header').html(
        Handlebars.compile(appHeaderView)({ title: '猫眼电影' })
    );
    // $("#loader").removeClass("hide");//显示loading加载图
    // 渲染首页的电影列表
    let filmsList = await getFilmsList()
    console.log(filmsList);
    //handlebars字符模板
    let template = Handlebars.compile(appMainView);//将字符串放进去 template是个方法
     console.log(filmsList.movieList);
    $('#app #main').html(template({ films: filmsList.movieList}));

    // $("#loader").addClass("hide");
}

module.exports = { render }