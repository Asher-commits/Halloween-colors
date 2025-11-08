let theme = {
 colors : ["red", "purple", "yellow", "black", "orange"], 
 emojis: ["🦇", "🕷️", "🎃", "👻", "🧛"]
}

// Accessing all that's required

const button = document.getElementById("button");

const clicked = document.getElementById("clicked");

const emoji = document.getElementById("emoji");

const resetBtn = document.getElementById("resetBtn");

let clickTimes = 0;


// Keep track of click times

function clickCount(){
    button.addEventListener("click", function(){
        clickTimes++
        clicked.textContent = `You clicked the button: ${clickTimes} times`;   
        
    });
}

clickCount();


// Change theme and also show reset button

button.addEventListener("click", function(){
    resetBtn.style.display = "block";
    let colorChanger = Math.floor(Math.random() * theme.colors.length);
    document.body.style.backgroundColor = theme.colors[colorChanger];
    
    let emojiChanger = Math.floor(Math.random() * theme.emojis.length);
    emoji.textContent = theme.emojis[emojiChanger];

});


// Reset everything and back to beginning

resetBtn.addEventListener("click", function(){
    location.reload();
});


