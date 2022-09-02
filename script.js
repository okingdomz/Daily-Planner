

var announcementEl = $('storage');

var timeLeft = 4;
function clearAnnouncement() {
    var announcementInterval = setInterval(function() {
        timeLeft--;
        if(timeLeft === 0) {
            $('storage').text('')
            clearInterval(announcementInterval)
            timeLeft = 4;
        }
    }, 1000)

    }


// Current time and date analytics
var current = moment().format("MMM Do, YYY, h:mm:ss");
$("#currentDay").text(current);

function updateTime() {
    $("#currentDay").html(moment().format("MMM Do, YYYY, h:mm:ss"));
}
setInterval(updateTime, 1000);

// // planner function beginnings
$(document).ready(function () { 


    
    $('.saveBtn').on('click', function() {
        
        var text = $(this).siblings('.description').val();

        
        var time = $(this).parent().attr('id');
        
        
        
        localStorage.setItem(time, text);
        $('#storage').text('Saved to Local Storage')
        clearAnnouncement();
   
    })

    
    $('#8hr .description').val(localStorage.getItem('hour8'));

    $('#9hr .description').val(localStorage.getItem('hour9'));

    $('#10hr .description').val(localStorage.getItem('hour10'));

    $('#11hr .description').val(localStorage.getItem('hour11'));

    $('#12hr .description').val(localStorage.getItem('hour12'));

    $('#13hr .description').val(localStorage.getItem('hour13'));

    $('#14hr .description').val(localStorage.getItem('hour14'));

    $('#15hr .description').val(localStorage.getItem('hour15'));

    $('#16hr .description').val(localStorage.getItem('hour16'));

    $('#17hr .description').val(localStorage.getItem('hour17'));

    function trackHours () {

        
        var currentTime = moment().hour();

        

        $('.time-block').each(function () {
            
            var hourBlock = parseInt($(this).attr('id').split('hour')[1]);

            if (hourBlock < currentTime) {

                $(this).removeClass('present'); 

                $(this).removeClass('future'); 

                $(this).addClass('past');

            } else if (hourBlock === currentTime) {
             
                $(this).removeClass('past');

                $(this).removeClass('future');

                $(this).addClass('present');

            } else {

                $(this).removeClass('present');

                $(this).removeClass('past');

                $(this).addClass('future');

            }
        })
    }

    trackHours();
    headerClock();

})


// setting the time for the global clock that changes as time passes in the header

// $(document).ready(function () {

//     var current = moment().format("MMM Do, YYY, h:mm:ss");
//     $("#currentDay").text(current);

//     function updateTime() {
//         $("#currentDay").html(moment().format("MMM Do, YYYY, h:mm:ss"));
//     }
// setInterval(updateTime, 1000);

// $(".saveBtn").on("click"), function() {

//     var task = $(this).siblings(".taskInput").val();

//     var time = $(this).parent().attr("id");

//     const mainContainer = document.getElementById("jumbotron");

//     mainContainer.innerHTML = " ";
//     if (task === " ") {
//         window.alert("Enter Information Then Save");
//         return;
//     } else {
//         const saveAlert = document.createElement("h3");
//         saveAlert.textcontent = "Successful Save";
//         mainContainer.append(saveAlert);

//         localStorage.setItem(time, task);
//     }

// });


// $("#8hr .taskInput").val(localStorage.getItem("8hr"));
// $("#9hr .taskInput").val(localStorage.getItem("9hr"));
// $("#10hr .taskInput").val(localStorage.getItem("10hr"));
// $("#11hr .taskInput").val(localStorage.getItem("11hr"));
// $("#12hr .taskInput").val(localStorage.getItem("12hr"));
// $("#1hr .taskInput").val(localStorage.getItem("13hr"));
// $("#2hr .taskInput").val(localStorage.getItem("14hr"));
// $("#3hr .taskInput").val(localStorage.getItem("15hr"));
// $("#4hr .taskInput").val(localStorage.getItem("16hr"));
// $("#5hr .taskInput").val(localStorage.getItem("17hr"));

// function blockUpdate() {
//     var currentHour = moment().hour();
//     $(".time-block").each(function () {
//         var blockHour = parseInt($(this).attr("id").split("hr")[1]);

//         if (blockHour < currentHour) {
//             $(this).addClass("past");

//         } else if (blockHour === currentHour) {
//             $(this).removeClass("past");
//             $(this).addClass("present");

//         } else {
//             $(this).removeClass("past");
//             $(this).removeClass("present");
//             $(this).addClass("future");
//         }
//     })
// }

// blockUpdate();

// });



// ---------------------------------------------

// var current = moment().format("MMM Do, YYY, h:mm:ss");
// $("#currentDay").text(current);

// function updateTime() {
//     $("#currentDay").html(moment().format("MMM Do, YYYY, h:mm:ss"));
// }
// setInterval(updateTime, 1000);


// $(".saveBtn").on("click"), function() {

//     var task = $(this).siblings(".taskInput").val();

//     var time = $(this).parent().attr("id");

//     localStorage.setItem(time, text);
//     $("#storage").text("Saved to Local")
//     clearAnnouncement();



    
// }

// $("#8hr .taskInput").val(localStorage.getItem("8hr"));
// $("#9hr .taskInput").val(localStorage.getItem("9hr"));
// $("#10hr .taskInput").val(localStorage.getItem("10hr"));
// $("#11hr .taskInput").val(localStorage.getItem("11hr"));
// $("#12hr .taskInput").val(localStorage.getItem("12hr"));
// $("#1hr .taskInput").val(localStorage.getItem("13hr"));
// $("#2hr .taskInput").val(localStorage.getItem("14hr"));
// $("#3hr .taskInput").val(localStorage.getItem("15hr"));
// $("#4hr .taskInput").val(localStorage.getItem("16hr"));
// $("#5hr .taskInput").val(localStorage.getItem("17hr"));

// function trackHours () {
//     var currentTime = moment().hour();
//     $(".time-block").each(function() {

//         var hourBlock = parseInt($(this).attr("id").split("hour)[1]"));
//         if (hourBlock < currentTime) {
//             $(this).removeClass('present');
//             $(this).removeClass('future');
//             $(this).removeClass('past');

//         } else if (hourBlock === currentTime) {
//             $(this).removeClass('past');
//             $(this).removeClass('future');
//             $(this).removeClass('present');
//         }else {
//             $(this).removeClass('present');
//             $(this).removeClass('past');
//             $(this).removeClass('future');
//         }
//     })
// }
// trackHours();