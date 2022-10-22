import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConvert from './convert.js';

// Business Logic

async function getExchange(currency, amountUSD) {
  const response = await CurrencyConvert.getExchange(currency, amountUSD);
  if (response.result) {
    printElements(response, amountUSD);
  } else {
    printError(response, amountUSD);
  }
}

// UI Logic

function printElements(currency, amountUSD) {
  document.querySelector('#showResponse').innerText = `The exchange rate from USD to ${currency} is ${response.result}. Based on that rate,
  $${amountUSD} is equal to ${response.converstion_result} ${currency}.`;
}

function printError(currency, error) {
  document.querySelector('#showResponse').innerText = `Error! The currency you selected, ${currency}, is not supported. (${error}.)`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.getElementById('#currencies');
  const amountUSD = document.querySelector('#amountUSD').value;
  document.getElementById('#currencies').value = null;
  getExchange(currency, amountUSD);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});