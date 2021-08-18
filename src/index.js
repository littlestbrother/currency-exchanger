import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange'

function addElement(response, amount, currency) {
    if (response.result == "success") {
        $('h2#result').text(`${amount} USD is worth ${doMath(amount, Math.round(100 * response.conversion_rate))/100} ${currency}!`);
    } else {
        $('h2#result').text(`Error: ${JSON.stringify(response)}`);
    }
}

function doMath(amount, rate){
return amount * rate;
}

$(document).ready(function () {
    $("button").click(function () {
        let currency = $("#currency option:selected").val()
        let amount = $('input#amount').val();
        Exchange.getExchangeRate(currency).then(function (response) {
            addElement(response, amount, currency);
        })
    });
});