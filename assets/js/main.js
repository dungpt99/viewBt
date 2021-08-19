window.onload = () => {
  const owl = {
    init: function () {
      this.slider('.overview-carousel');
      this.slider('.client-carousel');
    },
    slider: function (target) {
      const mainWrap = $(target)
      let options = {}
      switch (target) {
        case '.overview-carousel':
          options = {
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '.client-carousel':
          options = {
            loop: false,
            margin: 10,
            autoplay: false,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
              0: {
                items: 2
              },
              425:{
                items:2
              },
              768:{
                items:3
              },
              1024:{
                items: 5
              },
              1520:{
                items: 6
              }
            }
          }
          break;
        default:
          return true
      }
      if (mainWrap) {
        $(mainWrap).owlCarousel(options)
      }
    },
  }
  owl.init();

  const category = {
    init: function() {
      this.openMenu()
    },
    openMenu: function() {
      const main = document.querySelector('#category-menu')
      if (main) {
        const menuLevel = main.querySelectorAll('.menu-level')

        menuLevel.forEach((item, index) => item.addEventListener('click', () => {
          item.classList.toggle('active')

          const menuChild = item.querySelector('.menu-item-child')
          if (menuChild) {
            menuChild.classList.toggle('active')
          }
        }))
      }
    },
  }
  category.init()
}
//modal box

const modalImg = document.querySelectorAll(".portfolio__body-item");

for(i=0;i<modalImg.length;i++){
  modalImg[i].addEventListener('click',function(){
    const modal = this.getAttribute("data-modal");
    document.getElementById(modal).style.display= "block";
    document.querySelector("body").style.overflow = 'hidden';
  })
}
const closeBtns = document.querySelectorAll(".modalTest__item-button");
const close = document.querySelectorAll(".modalTest__item-close");

close.forEach(btn => {
  btn.onclick = function() {
    let modal = btn.closest('.modalTest');
    modal.style.display = "none";
    document.querySelector("body").style.overflow = 'visible';
  }
});

closeBtns.forEach(btn => {
  btn.onclick = function() {
    let modal = btn.closest('.modalTest');
    modal.style.display = "none";
    document.querySelector("body").style.overflow = 'visible';
  }
});

//menu 
var select = document.querySelectorAll('.right__child-select');
var status="big";

window.addEventListener("scroll",function(){
  var x = pageYOffset;
  console.log(x);
  //Xử lý menu co dãn
  if(x>100){
    if(status == "big"){
      status = "small";
      this.document.querySelector('.header__item').style.paddingBottom = "25px";
      this.document.querySelector('.header__item').style.paddingTop = "25px";
      this.document.querySelector('.header__item-left').style.fontSize = "24px";
    }
  }
  else{
    if(status == "small"){
      status = "big";
      this.document.querySelector('.header__item').style.paddingBottom = "30px";
      this.document.querySelector('.header__item').style.paddingTop = "30px";
      this.document.querySelector('.header__item-left').style.fontSize = "28px";
    }
  }
  console.log(select);
  if(x>817&&x<1550){
    select[0].style.backgroundColor ="#1abc9c";
    select[1].style.backgroundColor ="";
  }
  else if(x>1550&x<2119){
    select[0].style.backgroundColor ="";
    select[1].style.backgroundColor ="#1abc9c";
    select[2].style.backgroundColor ="";
  }
  else if(x>2119){
    select[1].style.backgroundColor ="";
    select[2].style.backgroundColor ="#1abc9c";
    
  }
  else{
    select[0].style.backgroundColor ="";
    select[1].style.backgroundColor ="";
    select[2].style.backgroundColor ="";
  }

  //Xử lý vị trí
});

//Menu select
select.forEach(btn => {
  btn.onclick = function() {
    //Background remove select
    for(i=0;i<select.length;i++){
      select[i].style.backgroundColor = "transparent";
      select[i].style.color = "";
    }
    //Background select
    if(btn.textContent == "Portfolio")
    {
      window.scrollTo({
        top:818
      })
      btn.style.backgroundColor = "#1abc9c";
      btn.style.color = "white";
    }
    else if(btn.textContent == "About")
    {
      window.scrollTo({
        top:1551
      })
      btn.style.backgroundColor = "#1abc9c";
      btn.style.color = "white";
    }
    else if(btn.textContent == "Contact")
    {
      window.scrollTo({
        top:2120
      })
      btn.style.backgroundColor = "#1abc9c";
      btn.style.color = "white";
    }
  }
});

//Contact

var input = document.querySelectorAll(".contact__form-item input");
var label = [...document.querySelectorAll(".contact__form-item label")];



for(var index in input){
  if(input.hasOwnProperty(index) ==true){
    input[index].addEventListener("click",function(){
      // label[index].style.fontSize = "12px";
      console.log(index);
    })
  }
}






