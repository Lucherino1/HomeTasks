import { PostList } from "./post-list.js";
const postList = new PostList("#post-list");

const url = "https://jsonplaceholder.typicode.com/posts";

const $qtySelect = document.getElementById("qty-select");
$qtySelect.addEventListener("change", async function () {
  const limit = $qtySelect.value;
  await postList.fetchPosts(url, limit);
  postList.mountPosts();
});

const $refsreshBtn = document.getElementById("refresh-btn");
$refsreshBtn.addEventListener("click", async function () {
  const limit = $qtySelect.value;
  await postList.fetchPosts(url, limit);
  postList.mountPosts();
});

$qtySelect.dispatchEvent(new Event("change"));
