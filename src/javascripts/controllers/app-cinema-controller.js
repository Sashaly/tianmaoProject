
const { getFilmsList } = require('../models/app-index-model');
let appHeaderView = require('../views/app-header.html');//首页渲染自己的头部
const render =() => {
    //1.渲染头部
    $('#app #header').html(
        Handlebars.compile(appHeaderView)({ title: '影院' })
    );

    $("#app #main").html("jjjj");

}

module.exports = { render }