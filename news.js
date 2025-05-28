<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Новости</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="news-page">

  <!-- HEADER -->
  <div class="header">
    <a href="./"><img class="header_logo" src="./img/SnapBG.ai_1744380875777.png" alt=""></a>
  </div>

  <!-- Навигация -->
  <div class="fixed_links">
    <a href="./news.html" class="fixed_links__item">Новости</a>
    <a href="./vacancy.html" class="fixed_links__item">Вакансий</a>
    <a href="./workers.html" class="fixed_links__item">Работники</a>
    <a href="./kabinet.html" class="fixed_links__item">Кабинет</a>
    <a href="#" class="fixed_links__item" id="open_modal_btn">Войти / Регистрация</a>
  </div>

  <!-- Обучающие материалы -->
  <div class="news-page fixed_tools">
    <h2 class="fixed_tools__title">🧠 Обучающие материалы</h2>
    <a href="https://learn.javascript.ru/" target="_blank" class="fixed_links__item">📘 Учебник JavaScript</a>
    <a href="https://eloquentjavascript.net/" target="_blank" class="fixed_links__item">📗 Книга по JS</a>
    <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="_blank" class="fixed_links__item">🛠 Документация MDN</a>
    <a href="https://www.freecodecamp.org/" target="_blank" class="fixed_links__item">🎓 FreeCodeCamp</a>
  </div>

  <!-- Модальное окно -->
  <div class="modal" id="modal">
    <div class="modal-window">
      <button id="close_modal_btn" class="modal-close-btn">×</button>
      <div class="modal-tabs">
        <button class="tab-btn active" data-tab="login">Вход</button>
        <button class="tab-btn" data-tab="register">Регистрация</button>
      </div>

      <div class="modal-content modal-login active">
        <input id="login-username" class="inp_modal" type="text" placeholder="Имя пользователя">
        <input id="login-password" class="inp_modal" type="password" placeholder="Пароль">
        <button id="login-btn" class="modal_btn">Войти</button>
        <p id="login-message" style="color:red; margin-top:10px;"></p>
      </div>

      <div class="modal-content modal-register">
        <input id="register-username" class="inp_modal" type="text" placeholder="Имя пользователя">
        <input id="register-email" class="inp_modal" type="email" placeholder="Email">
        <input id="register-password" class="inp_modal" type="password" placeholder="Пароль">
        <button id="register-btn" class="modal_btn">Зарегистрироваться</button>
        <p id="register-message" style="color:red; margin-top:10px;"></p>
      </div>
    </div>
    <div class="overlay"></div>
  </div>

  <!-- Основной контент -->
  <div class="main-container">
    <div class="content">
      <h1 class="header-title">Новости</h1>

      <div class="card card_space">
        <div class="user-info">
          <div class="profile">
            <div class="profile-img">
              <img src="./img/1.jpg" alt="" class="cover">
            </div>
            <h3>Olzhas Akzholbay<br><span>QA</span></h3>
          </div>
        </div>
        <div class="img">
          <img src="./img/2.jpg" alt="">
        </div>
        <div class="buttons">
          <img src="./img/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="">
          <img src="./img/comment_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="">
        </div>
        <h4 class="likes">20 likes</h4>
        <h4 class="message"><b>Lorem ipsum dolor sit amet.<br></b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptate?</h4>
      </div>

      <div class="card card_space">
        <div class="user-info">
          <div class="profile">
            <div class="profile-img">
              <img src="./img/1.jpg" alt="" class="cover">
            </div>
            <h3>Елена Кузнецова<br><span>Контент</span></h3>
          </div>
        </div>
        <div class="img">
          <img src="./img/4.jpg" alt="">
        </div>
        <div class="buttons">
          <img src="./img/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="">
          <img src="./img/comment_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="">
        </div>
        <h4 class="likes">20 likes</h4>
        <h4 class="message"><b>Lorem ipsum dolor sit amet.<br></b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptate?</h4>
      </div>

      <div class="card card_space">
        <div class="user-info">
          <div class="profile">
            <div class="profile-img">
              <img src="./img/1.jpg" alt="" class="cover">
            </div>
            <h3>Игорь Морозов<br><span>Контент</span></h3>
          </div>
        </div>
        <div class="img">
          <img src="./img/5.jpg" alt="">
        </div>
        <div class="buttons">
          <img src="./img/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="">
          <img src="./img/comment_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="">
        </div>
        <h4 class="likes">20 likes</h4>
        <h4 class="message"><b>Lorem ipsum dolor sit amet.<br></b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptate?</h4>
      </div>

    </div>
  </div>

  <!-- Подключение JS с версией -->
  <script src="main.js?v=2"></script>
</body>
</html>
