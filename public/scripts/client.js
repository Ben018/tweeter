/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

// create tweet html structure for page 
const createTweetElement = tweetData => {
  const html = `
<article>
  <header class="tweet-header">
  <div class="tweet-header-right">
    <img style="margin: auto; background-color: transparent;" src="${tweetData.user.avatars}" alt="">
    ${tweetData.user.name}
  </div>
  ${tweetData.user.handle}
  </header>

  <p>${tweetData.content.text}</p>

  <footer class="tweet-footer">
    ${tweetData.created_at}
    <div class="tweet-icons">
      <i id="flag" class="fa-solid fa-flag fa-2xs"></i>
      <i id="retweet" class="fa-solid fa-retweet fa-2xs"></i>
      <i id="heart" class="fa-solid fa-heart fa-2xs"></i>
    </div>
  </footer>
  
</article>
`

  return html
};

// add one tweet to page
const renderTweetsPostOne = (tweetData) => {
    const tweet = createTweetElement(tweetData)
    $("main").append(tweet)
};

// add many tweets to page
const renderTweets = (tweetDataArray) => {
  for (const tweetData of tweetDataArray) {
    const tweet = createTweetElement(tweetData)
    $("main").append(tweet)
  }
};

// waits for document to fully load before running
$(document).ready(() => {
  renderTweets(tweetData)

  // prevents normal form submit
  $("form").on("submit", event => {
    event.preventDefault()

    // use ajax to prevent page refresh
    const serializedString = $(event.currentTarget).serialize();

    $.ajax({
      method: "POST",
      url: "http://localhost:8080/tweets",
      data: serializedString
    }).then(res => {
      createTweetElement(res)
    })
  })

});
