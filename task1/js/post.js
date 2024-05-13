export class Post {
  constructor(postData) {
    this.postData = postData;
  }

  get postDOMElement() {
    return `<div class="post">
    <span class="post__no"> Post №${this.postData.id} </span>
  
    <h3 class="post__title">${this.postData.title}</h3>
    <p class="post__body">${this.postData.body}</p>
  </div>`;
  }
}
