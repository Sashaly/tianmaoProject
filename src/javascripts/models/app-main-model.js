const api = require('../api')
// 获取电影
console.log(api);
const getFilmsList = () => {
    return api.request({ url: '/ajax/movieOnInfoList?token=' })
}

module.exports = {
    getFilmsList
}