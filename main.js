document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('open_modal_btn');
  const modal = document.getElementById('modal');
  const closeCross = document.getElementById('close_modal_btn');
  const overlay = modal?.querySelector('.overlay');

  const tabButtons = modal?.querySelectorAll('.tab-btn');
  const loginContent = modal?.querySelector('.modal-login');
  const registerContent = modal?.querySelector('.modal-register');

  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');

  const loginUsernameInput = document.getElementById('login-username');
  const loginPasswordInput = document.getElementById('login-password');
  const loginMessage = document.getElementById('login-message');

  const registerUsernameInput = document.getElementById('register-username');
  const registerEmailInput = document.getElementById('register-email');
  const registerPasswordInput = document.getElementById('register-password');
  const registerMessage = document.getElementById('register-message');

  function updateAuthLink() {
    const currentUser = localStorage.getItem('currentUser');
    if (!openModalBtn) return;

    if (currentUser) {
      openModalBtn.textContent = 'Выйти';
      openModalBtn.onclick = (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        updateAuthLink();
      };
    } else {
      openModalBtn.textContent = 'Войти / Регистрация';
      openModalBtn.onclick = (e) => {
        e.preventDefault();
        if (modal) modal.style.display = 'flex';
      };
    }
  }

  if (closeCross) closeCross.onclick = () => {
    modal.style.display = 'none';
  };

  if (overlay) overlay.onclick = () => {
    modal.style.display = 'none';
  };

  tabButtons?.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.tab === 'login') {
        loginContent?.classList.add('active');
        registerContent?.classList.remove('active');
      } else {
        registerContent?.classList.add('active');
        loginContent?.classList.remove('active');
      }
    });
  });

  registerBtn?.addEventListener('click', () => {
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

    users[username] = { username, email, password };
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', username);

    registerMessage.style.color = 'green';
    registerMessage.textContent = 'Регистрация успешна!';

    setTimeout(() => {
      modal.style.display = 'none';
      updateAuthLink();
    }, 1000);
  });

  loginBtn?.addEventListener('click', () => {
    const username = loginUsernameInput.value.trim();
    const password = loginPasswordInput.value;

    if (!username || !password) {
      loginMessage.textContent = 'Пожалуйста, заполните все поля';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};
    const user = users[username];
    if (!user || user.password !== password) {
      loginMessage.textContent = 'Неверное имя пользователя или пароль';
      return;
    }

    localStorage.setItem('currentUser', username);
    loginMessage.style.color = 'green';
    loginMessage.textContent = 'Вход успешен!';

    setTimeout(() => {
      modal.style.display = 'none';
      updateAuthLink();
    }, 1000);
  });

  updateAuthLink();
});
