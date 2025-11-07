let colors = ["red", "purple", "yellow", "black", "orange"];

let emojis = ["🦇", "🕷️", "🎃", "👻", "🧛"];


const button = document.getElementById("button");

const faces = document.getElementById("faces");


// To change background color when button is clicked

function changeColor(){
    button.addEventListener("click", function(){
        const color = Math.floor(Math.random() * colors.length);
        const click = colors[color];
        document.body.style.backgroundColor = click;

    })
}

changeColor()


// To change emoji when button is clicked

function changeEmoji(){
    button.addEventListener("click", function(){
        const randomEmoji = Math.floor(Math.random() * emojis.length);
        const emoji = emojis[randomEmoji];
        faces.textContent = emoji;
})

}

changeEmoji()


