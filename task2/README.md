# Task 2

- На странице есть кастомный поисковой инпут - `.search`, при вводе текста в инпут нужно сделать запрос на пользователей по эндпоинту `https://jsonplaceholder.typicode.com/users`, и с помощью квери параметров найти пользователей чье имя содержит в себе значение инпута
- После получения пользователей в элемент `#search-options-container` нужно вставить их список, пример списка:

```html
<div class="search-options">
  <div class="search-option">Leanne Graham</div>
</div>
```

- При клике на элемент `.search-option` в элемент `#searched-user-container` должна вставиться карточка с данными пользователя выбраной опции. В элементе `.searched-user__name` должны находиться имя, никнейм и компания пользователя. В элементе `searched-user__address` должны находиться город, улица и дом пользователя. В элементах `.searched-user__contact-data` - имейл и номер телефона, контактные данные при клике должны выполнять соответствующие даным действия.
  Пример карточки:

```html
<div class="searched-user">
  <h3 class="searched-user__name">Leanne Graham (Bret), Romaguera-Crona</h3>

  <p class="searched-user__address">Gwenborough, Kulas Light, Apt. 556</p>

  <a class="searched-user__contact-data">Sincere@april.biz</a>,

  <a class="searched-user__contact-data">1-770-736-8031</a>
</div>
```

Весь необходимый html описан в index.html, готовый css подключен, вся работа должна быть в js файлах. Код писать не класами, а функциями, каждая функция должна отвечать за определенную часть функционала.
