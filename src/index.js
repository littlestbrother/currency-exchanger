import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange'
// $(console.log(`${process.env.KEY}`));

async function getResults(response){
    if(response.result=="success"){
        console.log(`success! ${response}`);
    } else {
        console.log(`failure! ${response}`)
    }
}

$(document).ready(function () {
    $("button").click(function () {
        Exchange.getExchangeRate().then(function(response){
            getResults(response)
        });

    });
});