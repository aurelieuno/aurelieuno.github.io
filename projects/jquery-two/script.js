/* global _ */

$(function(){
  var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

function createAvengersList(avengers, id) {
       var $ul = $('<ul>')
           .attr('id', 'avenger')
           .append(_.map(avengers, function(avenger, index) {
               return createAvengerListItem(avenger);
           }));
       return $ul.css('color','coral').css('font-weight', 'bold');
   }


   function createAvengerListItem(avenger) {
       return $('<li>')
           .attr("class", toDashCase(avenger))
           .html(avenger);
   }

   function toDashCase(str) {
       return str.split(" ").join("-").toLowerCase();
   }

   createAvengersList(avengers, 'avenger').appendTo('body');

   //Write and call a new function that removes the <li>s for Ant Man 
   //and Wasp, and adds an <li> for Captain America.
   var changeMembers = function(array) {
       $('.wasp').remove();
       $('.ant-man').remove();
       $('<li>').html('Captain America').attr('class', "captain-america").appendTo('#avenger');
   };
   changeMembers(avengers);

   //Sort the array alphabetically before adding the elements to the DOM
   //Sort the elements alphabetically after they're in the DOM
   //Create a button that moves the first element to the bottom of the list when clicked
   //Add Set Timeout so that items appear on the page one at a time.


   function sortListAlpha(id) {
       // var $listItems = $('#' + id + ' li').sort(function(a, b) {
       //     return ($(b).text()) < ($(a).text()) ? 1 : -1;
       // });
       // $listItems.appendTo('#' + id);

       $('#' + id + ' li').sort(ascSort).appendTo('#' + id);

       function ascSort(a, b) {
           return ($(b).text()) < ($(a).text()) ? 1 : -1;
       }
   }
   sortListAlpha('avenger');

   $('<button>', {
       text: 'One At a Time',
       id: 'btnOneAtATime',
       click: function() {
           var listAvengers = $('#avenger');
           listAvengers.empty();
           avengers.forEach(function(avenger, index) {
               setTimeout(function() {
                   listAvengers.append(createAvengerListItem(avenger));
               }, 500 * index);
           });
       }
   }).appendTo('body');

 $('<button>', {
      text: 'One Down At a Time',
      id: 'btnonedown',
      click: function() {
      $( "ul#avenger" ).children().eq( 0 ).appendTo('#avenger');
}
      
  }).appendTo('body');

 $('<button>', {
      text: 'Fade Out',
      id: 'FadeOUt',
      click: function() {
	$('#avenger').fadeOut('200');
      }
  }).appendTo('body');

 $('<button>', {
      text: 'Fade To',
      id: 'FadeTo',
      click: function() {
	$('#avenger').fadeTo('200',0.50);
      }
  }).appendTo('body');

});