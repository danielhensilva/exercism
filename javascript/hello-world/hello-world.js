var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
  input = input || "World";
  return "Hello, " + input + "!";
};

module.exports = HelloWorld;