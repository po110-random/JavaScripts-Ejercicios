const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    
    //Número aleatorio entre 0 y 3
    const RandomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[RandomNumber];
    color.textContent = colors[RandomNumber];

});

function getRandomNumber() {

    return Math.floor(Math.random() * colors.length);

}