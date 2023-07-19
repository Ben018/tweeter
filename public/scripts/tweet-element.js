// Shadow box for tweet articles
$(document).ready(function () {
  const article = $("article");
  article.hover(function () {
    article.addClass('article-hover');
  }, function () {
    article.removeClass('article-hover');
  });
});

// On hover icon colour flag
$(document).ready(function () {
  const flag = $("#flag");
  flag.hover(function () {
    flag.addClass('icons-hover');
  }, function () {
    flag.removeClass('icons-hover');
  });
});

// On hover icon colour retweet
$(document).ready(function () {
  const retweet = $("#retweet");
  retweet.hover(function () {
    retweet.addClass('icons-hover');
  }, function () {
    retweet.removeClass('icons-hover');
  });
});

// On hover icon colour heart
$(document).ready(function () {
  const heart = $("#heart");
  heart.hover(function () {
    heart.addClass('icons-hover');
  }, function () {
    heart.removeClass('icons-hover');
  });
});