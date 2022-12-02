let gnb = document.querySelector('#gnb');
let gnb_bg = document.querySelector('#gnb_bg');

let lnb = document.querySelectorAll('.lnb');
console.log(lnb);

gnb.addEventListener('mouseover', event => {
  gnb_bg.style.height = '190px';
  for (i = 0; i < lnb.length; i++) {
    lnb[i].style.height = '190px';
  }
});

gnb.addEventListener('mouseleave', event => {
  gnb_bg.style.height = '0px';
  for (i = 0; i < lnb.length; i++) {
    lnb[i].style.height = '0px';
  }
});

let list = document.querySelectorAll('.list');
for (let j = 0; j < list.length; j++) {
  list[j].addEventListener('mouseover', event => {
    list[j].src = `img/main3-on${j + 1}.jpg`;
  });
  list[j].addEventListener('mouseleave', event => {
    list[j].src = `img/main3-img${j + 1}.jpg`;
  });
}

let box_cont = document.querySelectorAll('.box_cont');
for (i < 0; i < box_cont.length; i++) {
  box_cont.style.backgroundImage = '../img/floorplan-icon.png';
  box_cont.style.backgroundColor = '#fff';
  box_cont.style.color = '#181c1c';
}
