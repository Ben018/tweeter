/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// create tweet html structure for page 
const createTweetElement = tweetData => {
  const { user: { name, avatars, handle }, content: { text }, created_at } = tweetData;

  const formattedDate = timeago.format(created_at); // formats time to days
  const $article = $("<article>");
  const $header = $("<header>").addClass("tweet-header");
  const $headerLeft = $("<div>").addClass("tweet-header-left");
  const $headerRight = $("<div>");
  const $body = $("<p>");
  const $footer = $("<footer>").addClass("tweet-footer");
  const $icons = $("<div>").addClass("tweet-icons");
  const $flagIcon = $("<i>").attr({ id: "flag", class: "fa-solid fa-flag fa-1xs" });
  const $retweetIcon = $("<i>").attr({ id: "retweet", class: "fa-solid fa-retweet fa-1xs" });
  const $heartIcon = $("<i>").attr({ id: "heart", class: "fa-solid fa-heart fa-1xs" });

  $headerRight.text(handle);
  $body.text(text);
  $footer.text(formattedDate);

  $article.append($header);
  
  $header.append($headerLeft);
  $headerLeft.append($("<img>").attr({ style: "margin: auto; background-color: transparent;", src: avatars, alt: "" }), name);
  $header.append($headerRight);
  
  $article.append($body);
  $article.append($footer);
  $footer.append($icons);

  $icons.append($flagIcon);
  $icons.append($retweetIcon);
  $icons.append($heartIcon);

  //adds event listener
  eventListener();

  return $article;
};

// add one tweet to page
const renderTweetsPostOne = (tweetData) => {
    const tweet = createTweetElement(tweetData)
  $(".tweet-element").prepend(tweet)
};

// add many tweets to page
const renderTweets = (tweetDataArray) => {
  for (const tweetData of tweetDataArray.reverse()) {
    const tweet = createTweetElement(tweetData)
    $("main").append(tweet)
  }
};

// check to see if tweet from form eceeds 140 limit
function checkCharacterLimit() {
  let error;
  const tweetTextarea = document.getElementById('tweet-text');
  const maxLength = 140;
  const remainingChars = maxLength - tweetTextarea.value.length;

  // if no text
  if (remainingChars === maxLength) {
    error = "Tweet is empty";
  }
  // if over 140 characters
  if (remainingChars < 0) {
    error = "Over 140 character limit";
  }
  return error;
}

// loads tweets
const loadTweets = function() {
  $.get("/tweets").then(res => {
    renderTweets(res,);
  });
};

// loads the most recent tweet post
const loadRecentTweet = function () {
  $.get("/tweets").then(res => {
      const latestTweet = res[res.length - 1]; // Get the lastest tweet from the array
    console.log(latestTweet)
      renderTweetsPostOne(latestTweet);
  });
};

// post a tweet to server
const postTweet = function () {
  $('#error').hide()
  $.ajax({
    method: "POST",
    url: "/tweets",
    data: serializedString
  }).then(res => {
    createTweetElement(res, loadRecentTweet());
  });
};

// waits for document to fully load before running
$(document).ready(() => {
  $('#error').hide()
  // prevents normal form submit
  $("form").on("submit", event => {
    event.preventDefault()
    let isTextValid = checkCharacterLimit();
    // serialized tweet data
    const serializedString = $(event.currentTarget).serialize();

    // if tweet text box is not > 140
    if (error) {
      $('#error').slideDown().text(isTextValid);
    }
    // use ajax to prevent page refresh
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: serializedString
    }).then(res => {
      createTweetElement(res, loadRecentTweet());
    });
    $("#tweet-text").val(""); // clear text area
  });

  // get initial tweets from server
  loadTweets();

});
