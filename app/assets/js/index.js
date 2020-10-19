// menu animation (not implemented yet)
// var nav = document.getElementById('nav');
// var navlinks = nav.getElementsByTagName('a');

// function toggleNav() {
//     (nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
//   }

// document.getElementById('nav-icon').addEventListener('click', function(e) {
//     e.preventDefault();
//     toggleNav();
// });

// for(var i = 0; i < navlinks.length; i++) {
//     navlinks[i].addEventListener('click', function() {
//       toggleNav();
//   });
// }

// handle form validation 

const inputs = document.querySelectorAll('input, textarea')

for (let input of inputs) {
  input.addEventListener('blur', () => {
    input.checkValidity();
  });
  
  input.addEventListener('invalid', () => {
    input.classList.add('input-error');
  });
};

// submit color indicator

const btnsub = document.getElementById('btn-sub');
btnsub.addEventListener('click', () => {
  btnsub.style.backgroundColor = 'green';
  btnsub.style.color = '#fff';
  btnsub.style.borderColor = 'green';
});