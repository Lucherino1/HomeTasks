// Вариант с замыканием createSearchOption

const searchInput = document.querySelector(".search > input");
const endPoint = "https://jsonplaceholder.typicode.com/users";
let lastFetch = null;

searchInput.addEventListener("input", function () {
  const userContainer = document.getElementById("search-options-container");
  userContainer.innerHTML = "";

  const searchUser = this.value.trim().toLowerCase();
  const url = `${endPoint}?name_like=${searchUser}`;

  if (lastFetch !== null) {
    lastFetch.abort();
  }

  if (searchUser.length > 0) {
    lastFetch = fetch(url)
      .then((response) => response.json())
      .then((users) => displayUsers(users, userContainer))
      .catch((error) => console.error("Fetch Error:", error))
      .finally(() => {
        lastFetch = null;
      });
  }
});

function displayUsers(users, container) {
  const searchOptionsContainer = document.createElement("div");
  searchOptionsContainer.classList.add("search-options");

  if (users.length > 0) {
    users.forEach((user) => {
      const searchOption = createSearchOption(user);
      searchOptionsContainer.appendChild(searchOption);
    });
  } else {
    searchOptionsContainer.innerHTML = "User is not found.";
  }

  container.appendChild(searchOptionsContainer);
}

function createSearchOption(user) {
  const searchOption = document.createElement("div");
  searchOption.classList.add("search-option");
  searchOption.textContent = user.name;

  searchOption.addEventListener("click", function () {
    const userData = user;
    const searchedUserContainer = document.getElementById(
      "searched-user-container"
    );
    const phoneNumber = userData.phone.split(" x")[0];
    const phoneNumberHref = "+" + phoneNumber.replace(/\D/g, "");
    searchedUserContainer.innerHTML = `
      <h3 class="searched-user__name">${userData.name} (${userData.username}), ${userData.company.name}</h3>
      <p class="searched-user__address">${userData.address.city}, ${userData.address.street}, ${userData.address.suite}</p>
      <a href="mailto:${userData.email}" class="searched-user__contact-data">${userData.email}</a>,
      <a href="tel:${phoneNumberHref}" class="searched-user__contact-data">${phoneNumber}</a>`;
  });

  return searchOption;
}
