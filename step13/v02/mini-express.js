/*
4월 26일 수요일- 미니 익스프레스 만들기

*/

module.exports = function() {
  return {
    get() {
      console.log('get()...')
    },
    post() {
      console.log('post()...')
    }
  }
}
