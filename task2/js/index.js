// Вариант с замыканием createSearchOption

const $searchInput = document.querySelector(".search > input");
const $searchedUserContainer = document.getElementById(
  "searched-user-container"
);
const $userContainer = document.getElementById("search-options-container");
const endPoint = "https://jsonplaceholder.typicode.com/users";

function displayUsers(users, container) {
  const searchOptionsContainer = document.createElement("div");
  searchOptionsContainer.classList.add("search-options");

  function createSearchOption(user) {
    const searchOption = document.createElement("div");
    searchOption.classList.add("search-option");
    searchOption.textContent = user.name;

    searchOption.addEventListener("click", () => {
      displaySelectedUser(user);
    });

    return searchOption;
  }

  if (users.length > 0) {
    users.forEach((user) => {
      const searchOption = createSearchOption(user);
      searchOptionsContainer.appendChild(searchOption);
    });
  } else {
    searchOptionsContainer.textContent = "User is not found.";
  }

  container.appendChild(searchOptionsContainer);
}

function fetchData(searchUser, container) {
  const url = `${endPoint}?name_like=${searchUser}`;
  fetch(url)
    .then((response) => response.json())
    .then((users) => displayUsers(users, container))
    .catch((error) => console.error("Fetch Error:", error));
}

function debounceFetchData(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

$searchInput.addEventListener(
  "input",
  debounceFetchData(displayUsersOnInput, 400)
);

function displayUsersOnInput() {
  $userContainer.innerHTML = "";
  const searchUser = $searchInput.value.trim().toLowerCase();
  if (searchUser.length > 0) {
    fetchData(searchUser, $userContainer);
  }
}

function displaySelectedUser(userData) {
  $searchedUserContainer.innerHTML = "";

  const searchedUser = document.createElement("div");
  searchedUser.classList.add("searched-user");
  $searchedUserContainer.appendChild(searchedUser);

  const {
    name,
    username,
    company: { name: companyName },
    address: { city, street, suite },
    email,
    phone,
  } = userData;

  const phoneNumber = phone.split(" x")[0];
  const phoneNumberHref = "+" + phoneNumber.replace(/\D/g, "");

  searchedUser.innerHTML = `
    <h3 class="searched-user__name">${name} (${username}), ${companyName}</h3>
    <p class="searched-user__address">${city}, ${street}, ${suite}</p>
    <a href="mailto:${email}" class="searched-user__contact-data">${email}</a>,
    <a href="tel:${phoneNumberHref}" class="searched-user__contact-data">${phoneNumber}</a>
  `;
}
