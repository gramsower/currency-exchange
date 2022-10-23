# Currency Converter

#### Convert USD into any supported currency using Currency Converter API

#### By Greg Ramsower

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* Currency Converter API
* Node Packet Manager (NPM)

## Description

This application allows a user to select from any of 161 currencies in common usage around the globe and return the exchange rate in United States Dollars (USD). (Note: Please see "Known Bugs" below for limitations and unsupported currencies.)

## Setup/Installation Requiremen

* Clone the repository located at: 'https://github.com/gramsower/currency-exchange'
* Navigate to the currency-exchange-main directory on your computer.
* Open with your preferred text editor (Visual Studio Code, Sublime Text, etc.)
* You will need a free API key for this project (it won't work without one). To get your unique key, navigate to www.exchangerate-api.com, and create a free account.
* Once you have verified your account, sign into www.exchangerate-api.com and retreive your API key.
* In the currency-exchange-main diretory, create a .env file and paste your API key into it labeled as "API_KEY=[your API key here]"
* Install the required packages by running the command "NPM install" in a terminal, taking care to ensure you are within the currency-exchange-main directory.
* Build out the project by running the command "NPM run build" in the terminal. (This step is optional but recommended.)
* Finally, run the command "NPM run start" to start a development server.

## Known Bugs

* The North Korean Wan (KPW) is unsupported and cannot be converted for geopolitical reasons.
* In addition, the following currencies may not return an accurate exchange rate due to heightened volatility and substantial differences between the official exchange rate and the informal (i.e., local) exchange rate. Use caution when interpreting your results:
- LYD: Libyan Dinar
- SSP: South Sudanese Pound
- SYP: Syrian Pound
- VES: Venezuelan Bolívar Soberano
- YER: Yemeni Rial
- ZWL: Zimbabwean Dollar


## License
MIT Fair Use license 
(c) 2022 - Greg Ramsower