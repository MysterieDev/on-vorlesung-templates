const postContainer = document.querySelector('#postWrapper');
function loadPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((res) => res.json())
    .catch(err => console.error(err));
}

function addPostsToSite(){
    loadPosts().then(posts => {
        for(let post of posts){
            const newPost = document.createElement("div");
            newPost.classList.add('column');
            newPost.innerHTML = `
            <div class="ui card">
                <div class="content">
                    <div class="header">${post.title.substr(0,15)}</div>
                    <div class="description">
                       ${post.body.substr(0,60)}..
                        <br/><button class="ui secondary button">read more</button>
                    </div>
                </div>
            </div>
            `;

            postContainer.appendChild(newPost);
        } 
    });
}

function makeThreeColumns(){
    if(postContainer.classList.contains('two')){
        postContainer.classList.replace('two', 'three')
    }
    else{
        postContainer.classList.replace('one', 'three')
    }
}

function makeTwoColumns(){
    if(postContainer.classList.contains('three')){
        postContainer.classList.replace('three', 'two')
    }
    else{
        postContainer.classList.replace('one', 'two')
    }
}

function makeOneColumns(){
    if(postContainer.classList.contains('three')){
        postContainer.classList.replace('three', 'one');
    }
    else if(postContainer.classList.contains('two')){
        postContainer.classList.replace('two', 'one');
    }
}