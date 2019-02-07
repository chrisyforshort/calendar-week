$(document).ready(function() {
    // Date Div JS //
    var choosenWeek
    var selected
    var alreadySelected

// These are the values that are shown in the date box //
    var weeks = [
        {
            date: '01 May - 06 May',
        },

        {
            date: '07 May - 13 May',
        },
        {
            date: '14 May - 20 May',
        },
        {
            date: '21 May - 27 May',
        },
        {
            date: '28 May - 31 May',
        },
        {
            date: '01 Jun - 03 Jun',
        },
        {
            date: '04 Jun - 10 Jun',
        },
        {
            date: '11 Jun - 17 Jun',
        },
        {
            date: '18 Jun - 24 Jun',
        },
        {
            date: '25 Jun - 30 Jun',
        },
        {
            date: '01 Jul - 01 Jul',
        },
        {
            date: '02 Jul - 08 Jul',
        },
        {
            date: '09 Jul - 15 Jul',
        },
        {
            date: '16 Jul - 22 Jul',
        },
        {
            date: '23 Jul - 29 Jul',
        },
        {
            date: '30 Jul - 31 Jul',
        },
        {
            date: '01 Aug - 05 Aug',
        },
        {
            date: '06 Aug - 12 Aug',
        },
        {
            date: '13 Aug - 19 Aug',
        },
        {
            date: '20 Aug - 26 Aug',
        },
        {
            date: '27 Aug - 31 Aug',
        },
        {
            date: '01 Sep - 02 Sep',
        },
        {
            date: '03 Sep - 09 Sep',
        },
        {
            date: '10 Sep - 16 Sep',
        },
        {
            date: '17 Sep - 23 Sep',
        },
        {
            date: '24 Sep - 30 Sep',
        },
        {
            date: '01 Oct - 07 Oct',
        },
        {
            date: '08 Oct - 14 Oct',
        },
        {
            date: '15 Oct - 21 Oct',
        },
        {
            date: '22 Oct - 28 Oct',
        },
        {
            date: '29 Oct - 31 Oct',
        },
        {
            date: '01 Nov - 04 Nov',
        },
        {
            date: '05 Nov - 11 Nov',
        },
        {
            date: '12 Nov - 18 Nov',
        },
        {
            date: '19 Nov - 25 Nov',
        },
        {
            date: '26 Nov - 30 Nov',
        },
        {
            date: '01 Dec - 02 Dec',
        },
        {
            date: '03 Dec - 09 Dec',
        },
        {
            date: '10 Dec - 16 Dec',
        },
        {
            date: '17 Dec - 23 Dec',
        },
        {
            date: '24 Dec - 30 Dec',
        },
        {
            date: '31 Dec - 31 Dec',
        },
        {
            date: '01 Jan - 06 Jan',
        },
        {
            date: '07 Jan - 13 Jan',
        },
        {
            date: '14 Jan - 20 Jan',
        },
        {
            date: '21 Jan - 27 Jan',
        },
        {
            date: '28 Jan - 31 Jan',
        },
        {
            date: '01 Feb - 03 Feb',
        },
        {
            date: '04 Feb - 10 Feb',
        },
        {
            date: '11 Feb - 17 Feb',
        },
        {
            date: '18 Feb - 24 Feb',
        },
        {
            date: '25 Feb - 28 Feb',
        },
        {
            date: '01 Mar - 03 Mar',
        },
        {
            date: '04 Mar - 10 Mar',
        },
        {
            date: '11 Mar - 17 Mar',
        },
        {
            date: '18 Mar - 24 Mar',
        },
        {
            date: '25 Mar - 31 Mar',
        },
        {
            date: '01 Apr - 07 Apr',
        },
        {
            date: '08 Apr - 14 Apr',
        },
        {
            date: '15 Apr - 21 Apr',
        },
        {
            date: '22 Apr - 28 Apr',
        },
        {
            date: '29 Apr - 30 Apr',
        },
    ]

// Function to allow hover to show the weeks in the date box //
    // $('th').hover(".tooltip", function () {
    //         chosenWeek = weeks[$(this).attr("value")]
    //         $("#datesDiv").html("<p id= 'choosenWeekCSS'>" + chosenWeek.date + "</p>")
    // });

// Function to color out the date when a date is selected //
    $(document).on("click", ".tooltip", function () {
        chosenWeek = weeks[$(this).attr("value")]
        $("#datesDiv").html("<p id= 'choosenWeekCSS'>" + chosenWeek.date + "</p>")
        $(".tooltip").addClass("whitebg")
        $(this).removeClass("whitebg")
        $(this).addClass("darkbg");
    });

// Attempt 1 //
// $(document).on("click", ".tooltip", function () {
//     chosenWeek = weeks[$(this).attr("value")]
//     console.log(chosenWeek)
//     $("#datesDiv").html("<p id= 'choosenWeekCSS'>" + chosenWeek.date + "</p>")
// });

// Date Picker //
// $(function() {
//     document.addEventListener('DOMContentLoaded', function() {
//         var elems = document.querySelectorAll('.dropdown-trigger');
//         var instances = M.Dropdown.init(elems, options);
//       });
    
//       // Or with jQuery
    
//       $('.dropdown-trigger').dropdown();

//     $(".selector").datepicker ({
//         changeMonth:true
//     });
    
//     date = 'today',

//     originalWeek = $.datepicker.iso8601Week( date )

//     if (todaysDate > firstMondayofMay || todaysDate < firstSundayofJanuary) {originalWeek = originalWeek - 17
//         }

//     if (todaysDate > firstMondayofJanuary || todaysDate < firstSundayofMay) { originalWeek = originalWeek + 34
//     }

//     $("#datepicker").datepicker({
//       showWeek: true,
//       firstDay: 1,
//       maxDate: 'today',

//       beforeShow: function(elem, ui) {
//         $(ui.dpDiv).on('click', 'tbody .ui-datepicker-week-col', function() {
//             $(elem).val('Week ' + $(this).text()).datepicker( "hide" );
//         });
        
//       }
//     });
//   });

//   $(function () {
//     i = 0;
//     month_set = 5;
//     var d = new Date();
//     week = (Math.ceil(Math.round(((new Date(d.getFullYear() + 1, 1)) - (new Date(d.getFullYear(), 1))) / 86400000) / 4));
//     current_year = ((d.getMonth() + 1) >= month_set) ? d.getFullYear() : d.getFullYear() - 1;

//     function myWeekCalc() {
//         i++;
//         return i = (i > week) ? 0 : i;
//     }
//     $("#d1").datepicker({
//         showWeek: true,
//         defaultDate: new Date(current_year, month_set-1, 1),
//         calculateWeek: myWeekCalc,
//         onClose: function () {
//             i = 0;
//         },
//         onChangeMonthYear: function (year, month) {
//             var diff = month - month_set;
//             var d = new Date(month + ' 1' + ',' + year);
//             if (d.getDay() != '0') {
//                 i--;
//             }
//             if (month == month_set) {
//                 i = 0;
//             }
//             if (current_year != year && month == month_set) {
//                 week = (Math.ceil(Math.round(((new Date(year + 1, 1)) - (new Date(year, 1))) / 86400000) / 4));
//             }
//         }
//     })
// });


// $('#datepicker').datepicker({
//           showWeek: true,
//     onSelect: function(dat,inst){
//         var week=$.datepicker.iso8601Week(new Date(dat));
//         $('#datepicker').val($.datepicker.formatDate('yy-',new Date(dat))+(week<10?'0':'')+week)
//     }
// });
// });
});