

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color")
console.log(color);

btn.addEventListener("click", () => {
       getRandomColor()
    
})

// porque el bucle corre 6 veces? : porque en hexadecimal los valores se representan  como #f1f5f2
function getRandomColor() {
    let hexColor = "#"
    for(let i=0; i<6; i++) {
       // hexColor += hex[15];
        hexColor += hex[getRandomNumber()];
        console.log('hexColor::', hexColor);  
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}


   function getRandomNumber() {
       return Math.floor(Math.random() * hex.length);
   }

