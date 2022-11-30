const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //Conseguimos un numero random entre 0-3 para que nos de un valor del array colors
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = color[randomNumber];
  color.textContent = colors[randomNumber];
});
//funcion para crear un numero random de la longitud de nuestro array colors y siendo un número entero 
const getRandomNumber =  () => {
    return Math.floor(Math.random()*colors.length);
};