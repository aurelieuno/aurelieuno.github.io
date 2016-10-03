/* global _ */

$(document).ready(function() { //when document is ready, this function will be executed
            $.getJSON('data/product.json', function(products) {
                console.dir(products);

///Method 1/////         
            function createonelineitem(line) {
                return $('<li>')
                    .attr("class", line)
                    .html(line);
            }

            function createProductList(product, id) {
                var $ul = $('<ul>')
                    .attr('id', 'product')
                    .append(_.map(product, function(line, index) {
                        return createonelineitem(line);
                    }));
                return $ul.css('color', 'coral').css('font-weight', 'bold');
            }

            createProductList(products[0], 'product').appendTo('body');

///Method 2////
    function createoneproduct(product){
    var $div=$('<div>').attr('id', 'product');
         .css('float','left').appendTo($div).appendTo('#productlist');
         $('<h4>').attr('class','desc').html(product['desc']).css('font-weight', 'bold').appendTo($div).appendTo('#productlist');
         $('<li>').attr('class','type').html(product['type']).appendTo($div).appendTo('#productlist');
         $('<li>').attr('class','price').html(product['price']).appendTo($div).appendTo('#productlist');
         $('<li>').attr('class','color').html(product['color']).appendTo($div).appendTo('#productlist');
    return $div;
  }




});

});