document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('newsContainer');
  const newsList = JSON.parse(localStorage.getItem('newsList') || '[]');
  const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');

  newsContainer.innerHTML = '';

  newsList.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.dataset.id = post.id;

    postDiv.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.text}</p>
      ${post.image ? `<img src="${post.image}" alt="news image">` : ''}
      <button class="like-btn ${likedPosts.includes(post.id) ? 'liked' : ''}">
        ❤️ <span class="like-count">${post.likes || 0}</span>
      </button>
    `;

    const likeBtn = postDiv.querySelector('.like-btn');
    const likeCount = postDiv.querySelector('.like-count');

    likeBtn.addEventListener('click', () => {
      if (likedPosts.includes(post.id)) return;

      post.likes = (post.likes || 0) + 1;
      likeCount.textContent = post.likes;
      likedPosts.push(post.id);

      localStorage.setItem('newsList', JSON.stringify(newsList));
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts));

      likeBtn.classList.add('liked');
    });

    newsContainer.appendChild(postDiv);
  });
});
