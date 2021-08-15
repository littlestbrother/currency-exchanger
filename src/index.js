import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange'
// $(console.log(`${process.env.KEY}`));


$(document).ready(function () {
    $("button").click(function () {
        let currency = $("#currency option:selected").val()
        let amount = $('input#amount').val();
        Exchange.getExchangeRate(currency).then(function(response){
            console.log(response);
            $('p#result').text(JSON.stringify(response));
        })
    });
});