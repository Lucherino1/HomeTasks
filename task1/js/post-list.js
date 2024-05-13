export class PostList {
  constructor(selector) {
    this.selector = selector;
  }

  async fetchPosts(url, limit) {
    if (limit !== "All") {
      url += `?_limit=${limit}`;
    }

    let response = await fetch(url);

    if (response.ok) {
      let json = await response.json();
      return json;
    } else {
      alert("HTTP error: " + response.status);
    }
  }

  mountPosts(postsHTML) {
    this.selector.innerHTML = postsHTML;
  }
}
