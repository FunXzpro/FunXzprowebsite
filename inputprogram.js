const changeMainImage = (itemName) => {
    const objImages = {
      youtube: 'ya ya 1.png' ,
      discord: 'ya ya 5.png' ,
      instagram: 'ya ya 3.png' ,
      github: 'ya ya 4.png' ,
      twitter: 'ya ya 2.png' ,
      default: 'ya ya.png' 
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
