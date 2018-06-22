var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

var changeBackground = function() {
     body.style.background = "linear-gradient(to right, "
     + color1.value +
     ", "
     + color2.value +
     ")";
     css.textContent = body.style.background + ";"
}

function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

randomButton.addEventListener("click", function() {
     var randomColor1 = getRandomColor();
     var randomColor2 = getRandomColor();

     color1.value = randomColor1;
     color2.value = randomColor2;
     changeBackground();
})

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);
