const images = document.querySelectorAll('.image-container img');

images.forEach(image => {
  image.addEventListener('click', () => {
    const src = image.getAttribute('src');
    if (src === 'assets/img/discord.png') {
      window.location.href = 'https://discord.com/';
    } else if (src === 'assets/img/github.png') {
      window.location.href = 'https://github.com/';
    } else if (src === 'assets/img/twitter.png') {
      window.location.href = 'https://twitter.com/';
    }
  });
});
