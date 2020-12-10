//Right now variable
var now = moment();
//Date variable
var current = now.format("MM DD YYYY");
//set date
$("currentDay").text("Today's Date: " + current);

$(document).ready(function() {
    
    // storage
        hourArr = $('.hour').toArray();
        for (i = 0; i < hourArr.length; i++) {
            $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')));
        }
    });
    

    