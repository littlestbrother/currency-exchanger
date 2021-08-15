import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange'
$(console.log(`${process.env.KEY}`));

$(document).ready(function () {
    $("button").click(function () {
        console.log(Exchange.getExchangeRate());
    });
});