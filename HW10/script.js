window.onload = ()=>{
  let navAdapt = document.querySelector('.nav-adapt');
  let nav = document.querySelector('.transparate-nav');
  navAdapt.addEventListener('click', function(){
    navAdapt.classList.toggle('active');
    nav.classList.toggle('active')
  });
}