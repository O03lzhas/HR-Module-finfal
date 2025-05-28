document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('open_modal_btn');
  const modal = document.getElementById('modal');
  const closeCross = document.getElementById('close_modal_btn');
  const overlay = modal.querySelector('.overlay');

  // Скрываем модалку по умолчанию
  modal.style.display = 'none';

  // Открытие модального окна
  openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  // Закрытие по крестику
  closeCross.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Закрытие при клике на фон
  overlay.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Переключение вкладок Вход / Регистрация
  const tabButtons = modal.querySelectorAll('.tab-btn');
  const loginContent = modal.querySelector('.modal-login');
  const registerContent = modal.querySelector('.modal-register');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (btn.dataset.tab === 'login') {
        loginContent.classList.add('active');
        registerContent.classList.remove('active');
      } else {
        registerContent.classList.add('active');
        loginContent.classList.remove('active');
      }
    });
  });

  // Реальная регистрация и вход с localStorage
  const registerBtn = document.getElementById('register-btn');
  const loginBtn = document.getElementById('login-btn');

  const registerMessage = document.getElementById('register-message');
  const loginMessage = document.getElementById('login-message');

  registerBtn.addEventListener('click', () => {
    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();

    if (!username || !email || !password) {
      registerMessage.style.color = 'red';
      registerMessage.textContent = 'Пожалуйста, заполните все поля.';
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(u => u.username === username)) {
      registerMessage.style.color = 'red';
      registerMessage.textContent = 'Пользователь с таким именем уже существует.';
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    registerMessage.style.color = 'green';
    registerMessage.textContent = 'Регистрация успешна! Можете войти.';

    // Очистка полей
    document.getElementById('register-username').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
  });

  loginBtn.addEventListener('click', () => {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!username || !password) {
    loginMessage.style.color = 'red';
    loginMessage.textContent = 'Пожалуйста, заполните все поля.';
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];
  let user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    loginMessage.style.color = 'red';
    loginMessage.textContent = 'Неверное имя пользователя или пароль.';
    return;
  }

  loginMessage.style.color = 'green';
  loginMessage.textContent = `Добро пожаловать, ${user.username}!`;

  // Сохраняем текущего пользователя в localStorage и обновляем страницу
  localStorage.setItem('currentUser', user.username);
  location.reload();
});

  
/*После регистрации или входа*/
  function updateAuthLink() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      openModalBtn.textContent = 'Выйти';
      openModalBtn.href = '#logout';
      openModalBtn.removeEventListener('click', openModalHandler);
      openModalBtn.addEventListener('click', logoutHandler);
    } else {
      openModalBtn.textContent = 'Войти / Регистрация';
      openModalBtn.href = '#';
      openModalBtn.removeEventListener('click', logoutHandler);
      openModalBtn.addEventListener('click', openModalHandler);
    }
  }

  function openModalHandler(e) {
    e.preventDefault();
    if (modal) modal.style.display = 'flex';
  }

  function logoutHandler(e) {
    e.preventDefault();
    localStorage.removeItem('currentUser');
    updateAuthLink();
  }

  // Изначально навесим открытие модалки
  openModalBtn.addEventListener('click', openModalHandler);

  // После успешного входа или регистрации вызывай updateAuthLink()
  // Например, в твоих функциях входа/регистрации после успешного действия
  // уже есть вызовы updateUserNameOnPage(), добавь туда updateAuthLink()

  // Вызовем при загрузке
  updateAuthLink();

  // После успешного входа
  localStorage.setItem('currentUser', user.username);
  location.reload();


});





// Получаем элементы
const modal = document.getElementById('modal');
const loginTabBtn = document.querySelector('.tab-btn[data-tab="login"]');
const registerTabBtn = document.querySelector('.tab-btn[data-tab="register"]');

const loginContent = document.querySelector('.modal-login');
const registerContent = document.querySelector('.modal-register');

const loginUsernameInput = document.getElementById('login-username');
const loginPasswordInput = document.getElementById('login-password');
const loginBtn = document.getElementById('login-btn');
const loginMessage = document.getElementById('login-message');

const registerUsernameInput = document.getElementById('register-username');
const registerEmailInput = document.getElementById('register-email');
const registerPasswordInput = document.getElementById('register-password');
const registerBtn = document.getElementById('register-btn');
const registerMessage = document.getElementById('register-message');

const closeModalBtn = document.getElementById('close_modal_btn');
const overlay = modal.querySelector('.overlay');

// Переключение табов Вход/Регистрация
function switchTab(tab) {
  if (tab === 'login') {
    loginTabBtn.classList.add('active');
    registerTabBtn.classList.remove('active');
    loginContent.classList.add('active');
    registerContent.classList.remove('active');
  } else {
    registerTabBtn.classList.add('active');
    loginTabBtn.classList.remove('active');
    registerContent.classList.add('active');
    loginContent.classList.remove('active');
  }
}

loginTabBtn.addEventListener('click', () => switchTab('login'));
registerTabBtn.addEventListener('click', () => switchTab('register'));

// Функция сохранения пользователя (локальное хранилище)
function saveUser(user) {
  // Берем всех юзеров из localStorage или пустой объект
  let users = JSON.parse(localStorage.getItem('users')) || {};
  users[user.username] = user; // ключ - имя пользователя
  localStorage.setItem('users', JSON.stringify(users));
}

// Функция проверки пользователя
function checkUser(username, password) {
  let users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username] && users[username].password === password) {
    return users[username];
  }
  return null;
}

// Обработчик регистрации
registerBtn.addEventListener('click', () => {
  const username = registerUsernameInput.value.trim();
  const email = registerEmailInput.value.trim();
  const password = registerPasswordInput.value;

  if (!username || !email || !password) {
    registerMessage.textContent = 'Пожалуйста, заполните все поля';
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username]) {
    registerMessage.textContent = 'Пользователь с таким именем уже существует';
    return;
  }

  // Сохраняем нового пользователя
  saveUser({ username, email, password });

  registerMessage.style.color = 'green';
  registerMessage.textContent = 'Регистрация успешна!';

  // Устанавливаем текущего пользователя в localStorage
  localStorage.setItem('currentUser', username);

  setTimeout(() => {
    modal.style.display = 'none';
    updateUserNameOnPage();
  }, 1000);
});

// Обработчик входа
loginBtn.addEventListener('click', () => {
  const username = loginUsernameInput.value.trim();
  const password = loginPasswordInput.value;

  if (!username || !password) {
    loginMessage.textContent = 'Пожалуйста, заполните все поля';
    return;
  }

  const user = checkUser(username, password);

  if (user) {
    loginMessage.style.color = 'green';
    loginMessage.textContent = 'Вход успешен!';

    // Записываем текущего пользователя
    localStorage.setItem('currentUser', username);

    setTimeout(() => {
      modal.style.display = 'none';
      updateUserNameOnPage();
    }, 1000);
  } else {
    loginMessage.textContent = 'Неверное имя пользователя или пароль';
  }
});

// Функция обновления имени пользователя на странице
function updateUserNameOnPage() {
  const currentUser = localStorage.getItem('currentUser');
  if (!currentUser) return;

  // На странице кабинета и новости нужно заменить имя

  // Кабинет
  const kabinetName = document.querySelector('.kabinet_port_text h2');
  if (kabinetName) {
    kabinetName.textContent = currentUser;
  }

  // Новости (пример)
  const newsUserNames = document.querySelectorAll('.profile h3');
  newsUserNames.forEach(el => {
    if (el.textContent.includes('Olzhas Akzholbay')) {
      el.textContent = currentUser + '\nQA'; // или любое другое описание
    }
  });
}

// При загрузке страницы сразу обновляем, если юзер уже залогинен
window.addEventListener('DOMContentLoaded', () => {
  updateUserNameOnPage();
});

// Закрытие модалки
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
overlay.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
  updateUserNameOnPage(); // Обновляем имя, если пользователь вошёл
});

function updateUserNameOnPage() {
  const currentUser = localStorage.getItem('currentUser');
  if (!currentUser) return;

  const kabinetName = document.querySelector('.kabinet_port_text h2');
  if (kabinetName) {
    kabinetName.textContent = currentUser;
  }
}


/*Смена на Выход*/