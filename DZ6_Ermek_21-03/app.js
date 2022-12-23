const minus = document.querySelector('.decrement')
const plus = document.querySelector('.increment')
const input = document.querySelector('input')

let min = 0;

plus.addEventListener('click', function (){
    min++
    input.value = min;
});
minus.addEventListener('click', function () {
    min--
    input.value = min;
})
