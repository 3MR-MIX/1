const wrapper = document.querySelector('.wrapper');
const regesterLink = document.querySelector('.regester-link');
const loginlink= document.querySelector('.login-link');

regesterLink.onclick=()=> {
    wrapper.classList.add('active'); 
}
loginlink.onclick=()=> {
    wrapper.classList.remove('active');  
}
