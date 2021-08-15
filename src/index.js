import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange'
// $(console.log(`${process.env.KEY}`));

async function noError(currency){
    let response = await Exchange.getExchangeRate(currency)
    if(response){
        console.log(response);
        return true;
    } else {
        return false;
    }
}

async function doMath(amount, rate) {
    return amount * rate;
}

$(document).ready(function () {
    $("button").click(function () {
        let currency = $("#currency option:selected").val()
        let amount = $('input#amount').val();
        console.log(noError(currency));
        
    });
});