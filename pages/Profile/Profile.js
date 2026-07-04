document.addEventListener("DOMContentLoaded", () => {

    const backBtn = document.getElementById("backBtn");

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            window.history.back();
        });
    }

    const editBtn = document.getElementById("editBtn");

    if (editBtn) {
        editBtn.addEventListener("click", () => {
            alert("Edit Profile feature coming soon!");
        });
    }

    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));

            tab.classList.add("active");

            const currentTab = tab.getAttribute("data-tab");

            contents.forEach(content => {

                if (content.id === currentTab) {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }

            });

        });

    });

    const likes = document.querySelectorAll(".like");

    likes.forEach(like => {

        like.addEventListener("click", () => {

            const icon = like.querySelector("i");
            const count = like.querySelector(".like-count");

            let current = parseInt(count.innerText);

            if (icon.classList.contains("fa-regular")) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

                like.style.color = "#f91880";

                count.innerText = current + 1;

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

                like.style.color = "#71767b";

                count.innerText = current - 1;

            }

        });

    });

    const bookmarks = document.querySelectorAll(".bookmark");

    bookmarks.forEach(bookmark => {

        bookmark.addEventListener("click", () => {

            const icon = bookmark.querySelector("i");

            if (icon.classList.contains("fa-regular")) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

                bookmark.style.color = "#1d9bf0";

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

                bookmark.style.color = "#71767b";

            }

        });

    });

    const retweets = document.querySelectorAll(".retweet");

    retweets.forEach(retweet => {

        retweet.addEventListener("click", () => {

            if (retweet.classList.contains("retweeted")) {

                retweet.classList.remove("retweeted");

                retweet.style.color = "#71767b";

            } else {

                retweet.classList.add("retweeted");

                retweet.style.color = "#00ba7c";

            }

        });

    });

    const shares = document.querySelectorAll(".fa-share");

    shares.forEach(share => {

        share.parentElement.addEventListener("click", () => {

            if (navigator.share) {

                navigator.share({
                    title: "Twitter Clone",
                    text: "Check out this profile!",
                    url: window.location.href
                });

            } else {

                navigator.clipboard.writeText(window.location.href);

                alert("Profile link copied!");

            }

        });

    });

});
