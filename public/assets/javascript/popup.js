const myPopup = document.getElementById('popup');

var show = false;

  function showIn(){
    myPopup.addEventListener('click', () => {
  
      if (show === false) {
      myPopup.style.marginLeft = "60%"
      myPopup.style.transition = "1500ms"
      show = true;

      }else{
      myPopup.style.marginLeft = "99%"
      myPopup.style.transition = "1500ms"
      show = false;
      
    };
  });
};
showIn();
