const firstCurrency = document.getElementById("moedaUm");
const secondCurrency = document.getElementById("moedaDois");
const firstValue = document.getElementById("primeiraQuantia");
const secondValue = document.getElementById("segundaQuantia");

const ratePrimeiraMoeda = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currencyOne = firstCurrency.value;
  const currencyTwo = secondCurrency.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/95e9f52ea34af7f62c3a7cec/latest/${currencyOne}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwo];
      ratePrimeiraMoeda.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      secondValue.value = (firstValue.value * rate).toFixed(2);
      //      console.log(calculate);
    });
}

swap.addEventListener("click", () => {
  const temp = firstCurrency.value;
  firstCurrency.value = secondCurrency.value;
  secondCurrency.value = temp;
  calculate();
});
convert.addEventListener("click", () => {
  calculate();
});


