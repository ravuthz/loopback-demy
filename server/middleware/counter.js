module.exports = function() {
  return function counter(req, res, next) {
    console.log('befores:route exports middleware');
    next();
  }
}
