// text counter for tweet form
let i = 140

$(document).ready(function () {
  const counter = $('.counter');
  const tweetText = $("#tweet-text");

  tweetText.on('input', function () {
    const textLength = tweetText.val().length;
    const remainingChars = i - textLength;
    counter.text(remainingChars);

    if (remainingChars < 0) {
      counter.addClass('exceededLimit');
    } else {
      counter.removeClass('exceededLimit');
    }
  });
});