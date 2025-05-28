document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('openPostModalBtn');
  const closeModalBtn = document.getElementById('closePostModalBtn');
  const postModal = document.getElementById('postModal');

  const form = document.getElementById('newsForm');
  const newsContainer = document.getElementById('userNewsContainer');
  const titleInput = document.getElementById('newsTitle');
  const textInput = document.getElementById('newsText');
  const imageInput = document.getElementById('newsImage');

  let newsList = JSON.parse(localStorage.getItem('newsList') || '[]');
  const currentUser = localStorage.getItem('currentUser');

  function renderNews() {
    newsContainer.innerHTML = '';
    newsList.filter(n => n.createdBy === currentUser).forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.text}</p>
        ${post.image ? `<img src="${post.image}" alt="Изображение">` : ''}
        <button class="delete-btn">Удалить</button>
      `;

      postDiv.querySelector('.delete-btn').addEventListener('click', () => {
        newsList = newsList.filter(n => n.id !== post.id);
        localStorage.setItem('newsList', JSON.stringify(newsList));
        renderNews();
      });

      newsContainer.appendChild(postDiv);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const text = textInput.value.trim();
    const file = imageInput.files[0];

    if (!title || !text) {
      alert('Заполните заголовок и текст');
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = reader.result;
        addNews(title, text, image);
      };
      reader.readAsDataURL(file);
    } else {
      addNews(title, text, '');
    }
  });

  function addNews(title, text, image) {
    const id = 'post_' + Date.now();
    const newPost = { id, title, text, image, createdBy: currentUser, likes: 0 };
    newsList.push(newPost);
    localStorage.setItem('newsList', JSON.stringify(newsList));
    form.reset();
    renderNews();
    postModal.style.display = 'none';
  }

  openModalBtn.addEventListener('click', () => {
    postModal.style.display = 'flex';
  });

  closeModalBtn.addEventListener('click', () => {
    postModal.style.display = 'none';
  });

  // Закрыть модалку при клике вне контента
  postModal.addEventListener('click', (e) => {
    if (e.target === postModal) {
      postModal.style.display = 'none';
    }
  });

  renderNews();
});
