
// Shadow box for tweet articles
$(document).ready(function () {
  $("article").on("mouseenter", event => {
    $(event.currentTarget).addClass('article-hover');
  }).on("mouseleave", event => {
    $(event.currentTarget).removeClass('article-hover');
  });
});

// On hover icon colour flag
$(document).ready(function () {
  $("#flag").on("mouseenter", event => {
    $(event.currentTarget).addClass('icons-hover');
  }).on("mouseleave", event => {
    $(event.currentTarget).removeClass('icons-hover');
  });
});

// On hover icon colour retweet
$(document).ready(function () {
  $("#retweet").on("mouseenter", event => {
    $(event.currentTarget).addClass('icons-hover');
  }).on("mouseleave", event => {
    $(event.currentTarget).removeClass('icons-hover');
  });
});

// On hover icon colour heart
$(document).ready(function () {
  $("#heart").on("mouseenter", event => {
    $(event.currentTarget).addClass('icons-hover');
  }).on("mouseleave", event => {
    $(event.currentTarget).removeClass('icons-hover');
  });
});
