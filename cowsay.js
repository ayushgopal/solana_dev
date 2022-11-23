var cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

//console.log(Quote.getQuote()); // returns quote (text and author)
//console.log(Quote.getQuote({ author: false })); // return quote without author
var quo = Quote.getRandomQuote(); // return any random quote

console.log(
  cowsay.say({
    text: quo,
    e: "ff",
    T: "U ",
  })
);
