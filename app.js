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