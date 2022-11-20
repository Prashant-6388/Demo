import $ from 'jquery';
import 'jquery-ui';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/datepicker.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/datepicker';

$(function(){
  console.log("page2 is called");
  $("#mydatepicker").datepicker();

  $("#btn3").on("click", function() {
    console.log("btn3 clicked.....");
    console.log("date selected jq: " + $('#mydatepicker').attr('value'));
    console.log("date selected jq using dom element: " + $('#mydatepicker')[0].value);
    //to understand behaviour look at  https://stackoverflow.com/questions/74510980/get-element-using-jquery-with-webpack/74511005
    console.log("date selected jq using val() method: " + $('#mydatepicker').val());
    console.log("date selected js: " + document.getElementById("mydatepicker").value);
    $('#mydatepicker').val("01/01/1900");
  });
});