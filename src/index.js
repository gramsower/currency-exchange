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
    printError(response);
  }
}

// UI Logic

function printElements(response, currency) {
  document.querySelector('#showResponse').innerText = `The exchange rate from USD to ${response["target_code"]} is 1 to ${response.conversion_rate}.
  Based on that rate, ${currency} USD is equal to ${response.conversion_result} ${response["target_code"]}.`;
}

function printError(currency, error) {
  document.querySelector('#showResponse').innerText = `Error! The currency you selected, ${currency}, is not supported. (${error}.)`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currencies').value;
  const amountUSD = document.querySelector('#amountUSD').value;
  getExchange(currency, amountUSD);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});