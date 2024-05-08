// SELETTORI
/*

let element = document.getElementById("element");

console.log(element);

element.textContent = "Ciao mama";
element.innerHTML = "HELLOOO";
element.style.color = "red";
*/

/*
// SELETTORI
let elementoDaId = document.getElementById("element");
let elementoDallaClasse = document.getElementsByClassName("classe");
let elementoTag = document.getElementsByTagName("div");
let elementoQuery = document.querySelector("#id.classe");
let elementoQueryMultipla = document.querySelectorAll(".paperino");


// Modifica delle classi
elementoDaId.classList.add("ciao");
elementoDaId.classList.remove("red");

// Modifica dello stile
elementoDaId.style.backgroundColor
*/


/**
 * elementoDaId.addEventListener("click", function(){
    //console.log("ciao");
    elementoDaId.style.backgroundColor = "red"
    //elementoDaId.classList.toggle("red");


    })

*/

function changeColorRed(){
    document.getElementById("square").style.backgroundColor = "red";
}

function changeColorYellow(){
    document.getElementById("square").style.backgroundColor = "yellow";
}

function changeColorGreen(){
    document.getElementById("square").style.backgroundColor = "green";
}
