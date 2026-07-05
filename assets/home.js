const tweetInput = document.getElementById("tweetInput");
const postBtn = document.getElementById("postBtn");
const tweetsContainer = document.getElementById("tweetsContainer");

let tweets = JSON.parse(localStorage.getItem("tweets")) || [];

renderTweets();

postBtn.addEventListener("click", addTweet);

function addTweet() {

    const text = tweetInput.value.trim();

    if (text === "") {
        alert("Please enter a tweet.");
        return;
    }

    const tweet = {
        id: Date.now(),
        username: "Ramya",
        handle: "@ramya",
        text: text,
        likes: 0,
        time: "Just now"
    };

    tweets.unshift(tweet);

    localStorage.setItem("tweets", JSON.stringify(tweets));

    tweetInput.value = "";

    renderTweets();
}

function renderTweets() {

    tweetsContainer.innerHTML = "";

    tweets.forEach(tweet => {

        const article = document.createElement("article");

        article.className = "tweet";

        article.innerHTML = `

            <div class="avatar">
                ${tweet.username.charAt(0)}
            </div>

            <div class="tweet-content">

                <h3>
                    ${tweet.username}
                    <span>${tweet.handle} · ${tweet.time}</span>
                </h3>

                <p>${tweet.text}</p>

                <div class="tweet-icons">

                    <i class="fa-regular fa-comment"></i>

                    <i class="fa-solid fa-retweet"></i>

                    <span onclick="likeTweet(${tweet.id})" style="cursor:pointer;">
                        ❤️ ${tweet.likes}
                    </span>

                    <span onclick="deleteTweet(${tweet.id})" style="cursor:pointer;margin-left:15px;">
                        🗑
                    </span>

                    <i class="fa-solid fa-share"></i>

                </div>

            </div>

        `;

        tweetsContainer.appendChild(article);

    });

}

function likeTweet(id) {

    tweets = tweets.map(tweet => {

        if (tweet.id === id) {
            tweet.likes++;
        }

        return tweet;

    });

    localStorage.setItem("tweets", JSON.stringify(tweets));

    renderTweets();

}

function deleteTweet(id) {

    tweets = tweets.filter(tweet => tweet.id !== id);

    localStorage.setItem("tweets", JSON.stringify(tweets));

    renderTweets();

}
