module.exports = function Gigasecond(utcDate) {
  return {
    date: function() {
      var giga = Math.pow(10, 9);
      var milli = giga * 1000;
      var date = utcDate -(-milli);
      return new Date(date);
    }
  }
};