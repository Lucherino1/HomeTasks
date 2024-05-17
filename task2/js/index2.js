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
    const usersHTML = users
      .map(
        (user) => ` 
      <div class="search-option" data-user='${JSON.stringify(user)}'> 
        ${user.name} 
      </div>`
      )
      .join("");
    searchOptionsContainer.innerHTML = usersHTML;
  } else {
    searchOptionsContainer.innerHTML = "User is not found.";
  }

  container.appendChild(searchOptionsContainer);

  searchOptionsContainer.addEventListener("click", function (e) {
    const target = e.target.closest(".search-option");

    if (target) {
      const userData = JSON.parse(target.dataset.user);

      const searchedUser = document.createElement("div");
      searchedUser.classList.add("searched-user");
      const phoneNumber = userData.phone.split(" x")[0];
      const phoneNumberHref = "+" + phoneNumber.replace(/\D/g, "");
      $searchedUserContainer.innerHTML = ` 
        <h3 class="searched-user__name">${userData.name} (${userData.username}), ${userData.company.name}</h3> 
        <p class="searched-user__address">${userData.address.city}, ${userData.address.street}, ${userData.address.suite}</p> 
        <a href="mailto:${userData.email}" class="searched-user__contact-data">${userData.email}</a>, 
        <a href="tel:${phoneNumberHref}" class="searched-user__contact-data">${phoneNumber}</a>`;
    }
  });
}
