var quotes = [
  "Don\'t cry because it\'s over, smile because it happened.",
  "Live, laugh, love",
  "You have to look through the rain to see the rainbow.",
  "Sing like no one is listening. Love like you've never been hurt. Dance like nobody is watching.",
  "Yesterday is history, tomorrow a mystery and today is a gift. That\'s why we call it the present.",
  "Keep calm and carry on.",
  "Shoot for the moon. Even if you miss, you\'ll land among the stars.",
  "Everything happens for a reason.",
  "If life gives you lemons, make lemonade.",
  "You\'ll find love when you stop looking.",
  "It takes more muscles to frown than it does to smile.",
  "Life is not about waiting for the storm to pass. It\'s about learning to dance in the rain.",
  "YOLO",
  "Dream as if you\'ll live forever. Live as if you\'ll die today.",
  "Everyone wants happiness, no one wants pain. But you can\'t make a rainbow without a little rain.",
  "Be yourself, everyone else is already taken.",
  "Be the change you wish to see in the world.",
  "Do one thing every day that scares you.",
  "Real eyes realize real lies.",
  "Every girl is beautiful, sometimes it just takes the right guy to see it.",
  "Too blessed to be stressed",
  "It\'s not the number of breaths we take, but the number of moments that take our breath away.",
  "Life is what happens to you while you\'re busy making other plans.",
  "You have to kiss a lot of frogs before you find your prince.",
  "You\'re only as strong as the drinks you mix, the tables you dance on, and the friends you party with."
]

function newQuote() {
  var randomVal = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').innerHTML=quotes[randomVal];
  document.getElementById('twitter-share-button').href= "https://twitter.com/intent/tweet?text=" + quotes[randomVal];
}