import $ from 'jquery';
import './start.js';

function getSomething() {
    return "if you have called getSomething you will get something....";
}

$(function() {
    console.log( "welcome to page !!!" );
    console.log(getSomething());

    $("#btn1").on("click", function(){
      console.log("btn1 clicked.....");
    });
});

export function testStartFunction() {
  console.log("test function called");
}

