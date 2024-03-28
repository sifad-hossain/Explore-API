function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
        .then(data => displayPosts(data))
}


/**
 * 1.get the container element where you want to add the new elements
 * 2.creat child element
 * 3.set innerText or innerHtml
 * 4. appendchild
 */
function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    console.log(posts);
    for (const post of posts) {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post')
      postDiv.innerHTML= `
      <h4> users-${post.userId}</h4>
      <h5>Post: ${post.title}</h5>
      <p>Post Description: ${post.body}</p>
      `;
      postsContainer.appendChild(postDiv);
    }
}

loadPosts()