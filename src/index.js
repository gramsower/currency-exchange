import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConvert from './convert.js';

// Business Logic

async function getExchange(currency, amount) {
  const response = await CurrencyConvert.getExchange(currency, amount);
  if (response.main) {
      printElements(response, amount);
  } else {
    printError(response, amount);
  }
}



// UI Logic

function printElements(currency, amount) {
  document.querySelector('#showResponse').innerText = `The exchange from USD to ${currency} is ${response.conversion_rate}.
  $${amountUSD} is equal to ${amount}.`;
}


function printError(currency, error) {
  document.querySelector('#showResponse').innerText = `Error! The currency you selected, ${currency}, is not supported. (${error}.)`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.getElementById('#currencies');
  const amount = document.querySelector('#amountUSD').value;
  document.getElementById('#currencies').value = null;
  getExchange(currency, amount)
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});