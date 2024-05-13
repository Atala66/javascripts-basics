

let count  = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log('val::', value);
console.log(btns);
console.log(typeof btns);

btns.forEach((btn) => {
    console.log('item::', btn);

 btn.addEventListener('click', (e) => {
    console.log(e.currentTarget.classList);
   const styles = e.currentTarget.classList;
    if(styles.contains('decrease')) {
       count --;
    } else if(styles.contains('increase')) {
        count ++;
     }
      else {
        count = 0;
     }
     if(count > 0) {
        value.style.color = 'green';
     }
     if(count < 0) {

        value.style.color = 'red';
     }

     if(count === 0) {
        console.log('cambia de color');
        value.style.color = '#222';
     }
     value.textContent = count; 
 })



})