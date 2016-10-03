/* global _ */

$(document).ready(function() { //when document is ready, this function will be executed
            $.getJSON('data/product.json', function(products) {
                console.dir(products);
        
            /**
             * Search takes a collection (Array or Object), and a search term as the 
             * target, and will recursively search thru the collection for the target, 
             * returning an Array of all Objects of the parent collection whose 
             * nested values matched the target.
             * 
             * TO SOLVE: Iterate over the collection
             *  a. If your value is a string? does this string contain (substring) your target?
             *  b. If your value is not a string? 
             *      (you could exclude all other primatives, Number, Boolean)
             *      what if the value is another Array or Object?
             */

            function search(collection, target) {
                var output = [];
                _.each(collection, function(value) {
                    if (isCollection(value)) {
                        if (search(value, target).lentgh) {
                            output.push(value);
                        }
                    }
                    else if (typeof value === 'string') {
                        if (value.toLowerCase().indexOf(target.toLowerCase() > -1)) {
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

            function reduce(collection, target) {
                return _.reduce(collection, function(summary, value) {
                        if (isCollection(value)) {
                            if (search(value, target).lentgh) {
                                summary.push(value);
                            }
                        }
                        else if (typeof value === 'string') {
                            if (value.toLowerCase().indexOf(target.toLowerCase() > -1)) {
                                summary.push(value);
                            }
                            return summary;
                        }, []);
                }

                function isCollection1(value) {
                    if (value === null) return false;
                    if (value instanceof Date === true) return false;
                    if (typeof value === 'object') return false;
                    return true;
                }

    });

            });