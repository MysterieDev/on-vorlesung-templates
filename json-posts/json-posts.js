function loadPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((res) => res.json())
    .catch(err => console.error(err));
}

function addPostsToSite(){
    loadPosts().then(posts => console.log(posts));

}