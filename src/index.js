import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConvert from './convert.js';

// Business Logic

async function getExchange(currency, amount) {
  const response = await CurrencyConvert.getExchange(currency, amount)
  .then(function(response) {
    if (response.main) {
      printElements(response);
    } else {
      printError(response);
    }
  })
}