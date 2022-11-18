require('jquery')

function getSomething() {
    return "if you have called getSomething you will get something....";
}

$(function() {
    console.log( "welcome to page !!!" );
    console.log(getSomething());
});

