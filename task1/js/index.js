import { Post } from "./post.js";
import { PostList } from "./post-list.js";

const selector = document.getElementById("post-list");
const select = document.getElementById("qty-select");
const refreshBtn = document.getElementById("refresh-btn");

let url = "https://jsonplaceholder.typicode.com/posts";
const postList = new PostList(selector);

startFetch();

async function startFetch() {
  const limit = select.value;
  const postsData = await postList.fetchPosts(url, limit);

  const posts = postsData
    .map((postData) => {
      const post = new Post(postData);
      return post.postDOMElement;
    })
    .join("");

  postList.mountPosts(posts);
}

select.onchange = startFetch;
refreshBtn.onclick = startFetch;
