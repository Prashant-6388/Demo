import $ from 'jquery';

function getSomething() {
    return "if you have called getSomething you will get something....";
}

$(function() {
    console.log( "welcome to page !!!" );
    console.log(getSomething());
});

export function testStartFunction() {
  console.log("test function called");
}

$("#btn1").on("click", function(){
  console.log("btn1 clicked.....");
});