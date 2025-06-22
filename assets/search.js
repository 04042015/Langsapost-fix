
async function loadArticles() {
  const res = await fetch('/assets/index.json');
  const data = await res.json();
  const list = document.getElementById('search-results');
  const input = document.getElementById('search-input');

  input.addEventListener('input', () => {
    const keyword = input.value.toLowerCase();
    list.innerHTML = '';
    data.filter(post => post.title.toLowerCase().includes(keyword))
        .forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${post.url}">${post.title}</a>`;
      list.appendChild(li);
    });
  });
}

window.addEventListener('DOMContentLoaded', loadArticles);
