const changeMainImage = (itemName) => {
    const objImages = {
      youtube: '../images/ya ya 1.png',
      discord: '../images/ya ya 5.png',
      instagram: '../images/ya ya 3.png',
      github: '../images/ya ya 4.png',
      twitter: '../images/ya ya 2.png',
      default: '../images/ya ya.png'
    };
    const img = document.getElementById('main-photo')
    if (itemName && objImages[itemName]) {
      img.src = objImages[itemName];
    } else {
      img.src = objImages.default;
    }
  };
  
  
  window.addEventListener('DOMContentLoaded', (event) => {
      changeMainImage('default');
      document.querySelectorAll("a[data-item]").forEach((item) => {
        console.log(item);
        const itemType = item.getAttribute('data-item');
  
        item.addEventListener('mouseover',()=>{
          changeMainImage(itemType);
        });
        item.addEventListener('mouseout',()=>{
          changeMainImage('default');
        });
      });
  });
