



var i = 0;
var speed = 80;
var txt = "ARE YOU IN?";


function typeWriter() {
  



    if (i < txt.length) {
        document.getElementById("catchPhrase").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}



typeWriter()