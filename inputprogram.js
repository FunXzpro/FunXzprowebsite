const changeMainImage = (itemName) => {
  const objImages = {
    youtube: 'ya_ya_youtube.png' ,
    discord: 'ya_ya_discord.png' ,
    instagram: 'ya_ya_instagram.png' ,
    github: 'ya_ya_github.png' ,
    twitter: 'ya_ya_twitter.png' ,
    default: 'ya_ya_default.png' 
  };
  const img = document.getElementById('main-photo');
  let usedImage = objImages.default;
  if (itemName && objImages[itemName]) {
    usedImage = objImages[itemName];
  }
  img.src = `/images/${usedImage}`;
};
  

window.addEventListener('DOMContentLoaded', (event) => {
    changeMainImage('default');
    document.querySelectorAll("a[data-item]").forEach((item) => {
      console.log(item);
      const itemType = item.getAttribute('data-item');

      item.addEventListener('mouseover',() => {
        changeMainImage(itemType);
      });
      item.addEventListener('mouseout',() => {
        changeMainImage('default');
      });
    });
});
