// function for event listeners
const eventListener = function () {

  // Shadow box for tweet articles
  $(document).ready(function () {
    $("article").on("mouseenter", event => {
      $(event.currentTarget).addClass('article-hover');
    }).on("mouseleave", event => {
      $(event.currentTarget).removeClass('article-hover');
    });

    // On hover icon colour flag
    $("#flag").on("mouseenter", event => {
      $(event.currentTarget).addClass('icons-hover');
    }).on("mouseleave", event => {
      $(event.currentTarget).removeClass('icons-hover');
    });

    // On hover icon colour retweet
    $("#retweet").on("mouseenter", event => {
      $(event.currentTarget).addClass('icons-hover');
    }).on("mouseleave", event => {
      $(event.currentTarget).removeClass('icons-hover');
    });

    // On hover icon colour heart
    $("#heart").on("mouseenter", event => {
      $(event.currentTarget).addClass('icons-hover');
    }).on("mouseleave", event => {
      $(event.currentTarget).removeClass('icons-hover');
    });

    //click body to close error message
    $('#tweet-text').on('click', function () {
      $('#error').slideUp().text('');

    });

  });
};