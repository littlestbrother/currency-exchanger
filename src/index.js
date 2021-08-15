import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange'
// $(console.log(`${process.env.KEY}`));

async function postResults(response) {
    if (response && response.result == "success") {
        console.log(`success! conversion rate = ${response.conversion_rate}`);
    } else {
        console.log(`failure! ${response}`)
    }
    
}

$(document).ready(function () {
    // let amount = $('input#amount');
    $("button").click(function () {
        let currency = $("#currency option:selected").val()
        Exchange.getExchangeRate(currency).then(function (response) {
            postResults(response)
        });
    });
});