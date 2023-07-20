/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// create tweet html structure for page 
const createTweetElement = tweetData => {
  const formattedDate = timeago.format(tweetData.created_at); // formats time to days
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
    ${formattedDate}
    <div class="tweet-icons">
      <i id="flag" class="fa-solid fa-flag fa-1xs"></i>
      <i id="retweet" class="fa-solid fa-retweet fa-1xs"></i>
      <i id="heart" class="fa-solid fa-heart fa-1xs"></i>
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

  // get tweets from server
  $.get("http://localhost:8080/tweets").then(res => {
    renderTweets(res);
  })

});
