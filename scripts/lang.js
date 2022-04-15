const open = document.getElementById("current");
const modal_container = document.getElementById("modal_container");
const usa = document.getElementById("usa");
const brazil = document.getElementById("brazil");

function lang_us() {
  document.getElementById("current").src =
    "./assets/United-States-Flag1-icon.png";
  document.getElementById("title").innerHTML = "Currency Converter";
  document.getElementById("sub").innerHTML =
    "Find out how much your money is worth<br>across the world!";
  document.getElementById("instruction").innerHTML =
    "Insert the desirable amount:";
  document.getElementById("swap").innerHTML = "Swap";
  document.getElementById("convert").innerHTML = "Convert";
  document.getElementById("follow").innerHTML = "FOLLOW &nbsp; ME:";
}

function lang_br() {
  document.getElementById("current").src =
    "./assets/Brazil-Flag-icon1.png";
  document.getElementById("title").innerHTML = "Conversor de Moedas";
  document.getElementById("sub").innerHTML =
    "Descubra quanto vale o seu dinheiro<br>ao redor do mundo!";
  document.getElementById("instruction").innerHTML = "Insira o valor desejado:";
  document.getElementById("swap").innerHTML = "Inverter";
  document.getElementById("convert").innerHTML = "Converter";
}

window.addEventListener("pageshow", () => {
  modal_container.classList.add("show");
});

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

usa.addEventListener("click", () => {
  modal_container.classList.remove("show");
  lang_us();
});

brazil.addEventListener("click", () => {
  modal_container.classList.remove("show");
  lang_br();
});