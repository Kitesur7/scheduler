//right now con
const now = moment();
//date con
const actual = now.format("MM DD YYYY");
//set date
$("actualDay").text("Today's Date: " + actual);

$(document).ready(function() {
    
         arrayHour = $('.hour').toArray();
        for (i = 0; i < arrayHour.length; i++) {
            $(arrayHour[i]).siblings('textarea').text(localStorage.getItem($(arrayHour[i]).attr('data-time')));
        }
    });
            //loop

    for (i = 0; i < 13; i++) {
        var row = $('<div>').addClass('row');
        var time = $('<div>').addClass('hour col-md-1').text(moment('7:00 AM', 'hh:mm A').add(i, 'hours').format('hA')); 
            time.attr('data-time', moment('7:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
        var toDo = $('<textarea>').addClass('col-md-9');
        var saveButton = $('<button>').addClass('saveButton col-md-2').html('<i class="fas fa-save"></i>');
   
        $('.container').append(row);
        $(row).append(time);
        $(time).after(toDo);
        $(toDo).after(saveButton);

            if (now.isSame(moment('7:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
                $(toDo).addClass('present');
            } else if (now.isBefore(moment('7:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
                $(toDo).addClass('future');
            } else if (now.isAfter(moment('7:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
                $(toDo).addClass('past');
            }
    }
    // Saving Feature
    $('.saveButton').on('click', function() {
   
        localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
    });
   
     

    