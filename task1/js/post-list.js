import { Post } from "./post.js";

export class PostList {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.posts = [];
  }

  async fetchPosts(url, limit) {
    try {
      const queryParams = limit === "All" ? "" : `?_limit=${limit}`;
      const response = await fetch(`${url}${queryParams}`);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      this.posts = data.map((postData) => new Post(postData));
    } catch (error) {
      console.error(`Error fetching posts: ${error}`);
    }
  }

  mountPosts() {
    this.container.innerHTML = "";
    this.posts.forEach((post) => {
      this.container.insertAdjacentHTML("beforeend", post.postDOMElement);
    });
  }
}
