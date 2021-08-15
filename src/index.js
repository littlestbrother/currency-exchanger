import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange'
// $(console.log(`${process.env.KEY}`));

function addElement(response, amount, currency) {
    if (response.result == "success") {
        $('p#result').text(`${amount} USD to ${amount} ${currency} is ${doMath(amount, response.conversion_rate)}!`);
    } else {
        $('p#result').text(`Error: ${JSON.stringify(response)}`);
    }
}

function doMath(amount, rate){
return amount * rate;
}

$(document).ready(function () {
    $("button").click(function () {
        let currency = $("#currency option:selected").val()
        let amount = $('input#amount').val();
        console.log(currency);
        Exchange.getExchangeRate(currency).then(function (response) {
            addElement(response, amount, currency);
        })
    });
});