document.addEventListener('DOMContentLoaded', () => {
      const username = localStorage.getItem('currentUser') || 'Гость';
      const userNameElem = document.querySelector('.kabinet_port_text h2');
      if (userNameElem) {
        userNameElem.textContent = username;
      }
    });