

const colors = ["skyblue", "coral", "green", "red", "lavender", "mintcream"];

const btn = document.getElementById("btn")
const text = document.querySelector("text")
const color = document.querySelector(".color")
const btn2 =document.getElementById("btn-2")

btn.addEventListener("click", () => {
    const randonNumber = getRandomNumber();
     console.log(randonNumber)
     document.body.style.backgroundColor = colors[randonNumber];
     color.textContent = colors[randonNumber];
    //  console.log(text);
    
})


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


// btn2.addEventListener("click", () => {
//     console.log('Hello from btn2')
// })

