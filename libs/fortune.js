const fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
  ];

//exports = module.exports
//both points to an empty object
//therefore exports.a is same as module.exports.a
//by default module.exports is an empty object like module.exports = {}, when you require a module in another file it gives an object
//but if we make module.exports = function then the require a module will return a function

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[idx];
}
