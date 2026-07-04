const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const postsContainer = document.getElementById("posts");

let posts = [];

window.onload = () => {
    loadPosts();
};

function loadPosts() {

    const savedPosts = localStorage.getItem("posts");

    if(savedPosts){

        posts = JSON.parse(savedPosts);

    }else{

        posts = [
            {
                user:"OpenAI",
                text:"Welcome to the Twitter Clone!",
                likes:0
            },
            {
                user:"Google",
                text:"Have a productive day!",
                likes:0
            }
        ];

        savePosts();
    }

    displayPosts();

}

function savePosts(){

    localStorage.setItem("posts",JSON.stringify(posts));

}

function displayPosts(){

    postsContainer.innerHTML="";

    posts.slice().reverse().forEach((post,index)=>{

        const div=document.createElement("div");

        div.className="post";

        div.innerHTML=`

        <div class="post-header">
            <h4>${post.user}</h4>
        </div>

        <div class="post-body">
            ${post.text}
        </div>

        <div class="post-footer">

            <button onclick="likePost(${posts.length-1-index})">
            ❤️ ${post.likes}
            </button>

            <button onclick="deletePost(${posts.length-1-index})">
            🗑 Delete
            </button>

        </div>

        `;

        postsContainer.appendChild(div);

    });

}

postBtn.addEventListener("click",()=>{

    const text=postInput.value.trim();

    if(text===""){

        alert("Write something first!");

        return;
    }

    const newPost={

        user:"You",
        text:text,
        likes:0

    };

    posts.push(newPost);

    savePosts();

    displayPosts();

    postInput.value="";

});

function likePost(index){

    posts[index].likes++;

    savePosts();

    displayPosts();

}

function deletePost(index){

    posts.splice(index,1);

    savePosts();

    displayPosts();

}
