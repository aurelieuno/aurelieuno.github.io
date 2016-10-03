/* global _ */

$(document).ready(function(){//when document is ready, this function will be executed
    $.getJSON('data/product.json',function(products){
        console.dir(products);
 
//FUNCTION 1   createListProduct    
    function createListProduct(products) {
      var $ul = $('<ul>')
          .attr('id', 'productlist')
          .css( 'list-style','none') //hide the bullet items
          .append(_.map(products, function(product, index) {
              return $('<li>').attr('class',product['id']).css('color','coral').css('font-weight', 'bold')
              .append($('<img src= img/product/thumbs/' + product['image']+ '>'))
              .append(product.desc)
          }));
      return $ul;
  }

createListProduct(products).appendTo('body');
  
//FUNCTION 2   create a Filter option on the fly
//Method: Looking at the html code for a filter option & create it w JQUERY
//HTML
//  <form method="post">Filter By:        
//     <select name="Select1">
//         <option class= "case">cases</option>
//         <option class = "phone">phones</option>
//         <option>all</option>
//     </select>
// </form>

var arrayType= _.uniq(_.pluck(products,'type'));

// $('<div>').prependTo('#productlist')
// .attr('class','btn-group').attr('id','filter1');
// $('<button>').attr('class','btn btn-secondary dropdown-toggle').attr('data-toggle','dropdown').attr('aria-haspopup','true').attr('aria-expanded','false').attr('id','select1.1').html('Filter by').appendTo('#filter1');
// $('<div>').attr('class','dropdown-menu').attr('id','dp').appendTo('#filter1');
// var Alltypes2=_.map(arrayType,function(value){
//     return $('<a id=' +value+'>').attr('class','dropdown-item').attr('href','#').html(value); 
// });
// $('#dp').append(Alltypes2);

$(document).on('click', '.dropdown-menu a id', function () {
     var filter = $('this').text();
     _.each(products,function(product){
         if (filter===product.type)  { $('li[class = '+ product.id +']').show();
         } else { $('li[class = '+ product.id +']').hide();
         }
     });  
});

$(".dropdown-menu a id").click(function () {
    var filter = $('this').text();
     _.each(products,function(product){
         if (filter===product.type)  { $('li[class = '+ product.id +']').show();
         } else { $('li[class = '+ product.id +']').hide();
         }
     });   
})


$('<form>').prependTo('#productlist')
.attr('method','post').attr('id','form1').append("Filter By:");
$('<select>').attr('name','select').attr('id','select1').appendTo('#form1');
var Alltypes=_.map(arrayType,function(value){
    return $('<option class=' +value+'>').append(value); // .phone === class = 'phone'
});
$('select').append(Alltypes);

//FUNCTION 3
//on clicking on select get the function moving
$("#select1").change(function () {
    var filter = $( this ).val();//or $(this).val()?$( "#select1" ).val();
     _.each(products,function(product){
         if (filter===product.type)  { $('li[class = '+ product.id +']').show();
         } else { $('li[class = '+ product.id +']').hide();
         }
     });   
})




function FilterByType (collection,target){
return _.filter(collection,function(value,position){
      if (target===value['type']) {return collection[position];
      }
 });
}
  
console.log(FilterByType (products,'phone'));  


//FUNCTION 4 SEARCH
//  <form>
//     <input type="text" placeholder="Search..." required>
//     <input type="button" value="Search">
// </form>
$('<form>').prependTo('#productlist')
.attr('id','form2').attr('class','form-inline pull-xs-right');
$('<input>').attr('type','text').attr('class','form-control').attr('placeholder','Search ...').attr('id','input1').appendTo('#form2');
$('<button>').append('Search').attr('id','button1').attr('class','btn btn-success-outline').attr('type','submit').appendTo('#form2');
  
//FUNCTION 5 
$('#button1').click(function () {
    var myValue= $('#input1').val();
    var search1=search(products,myValue);
    var search2=_.pluck(search1,'id');
    _.each(products,function(product) { 
         if (search2.indexOf(product.id) > -1)
         { $('li[class = '+ product.id +']').show();
         } else  { $('li[class = '+ product.id +']').hide();
         }
});
})

//FUNCTION 6 THE SEARCH FUNCTION

  function search(collection, target) { // === [Objects]
                var output = [];
                _.each(collection, function(value) {
                    if (isCollection(value)) {
                        if (search(value, target).length) {
                            output.push(value);
                        }
                    }
                    else if (typeof value === 'string') {
                        if (value.toLowerCase().indexOf(target.toLowerCase()) > -1) {
                            output.push(value);
                        }
                    }
                });
                return output;
            }
  
  function isCollection(value) {
                if (value !== null && value instanceof Date === false && typeof value === 'object') return true;
                return false;
            }
  console.dir(search(products,'Super slim design'));
  

//FUNCTION 7 THE LIGHTBOX 
// $('img').click(function () {
 
 
 
 
 
 
 
 
 
 
 
 
     });    
});