/* global _ */
$(document).ready(function() {
  var oldGuardians = [{
    name: "Star Lord",
    notes: "Team leader"
  }, {
    name: "Drax the Destroyer"
  }, {
    name: "Adam Warlock"
  }, {
    name: "Quasar",
    notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
  }, {
    name: "Rocket",
    notes: "Served as temporary leader during Star-Lord's absence"
  }, {
    name: "Gamora"
  }];

  var newGuardians = [{
    name: "Mantis",
    notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
  }, {
    name: "Groot",
    notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
  }, {
    name: "Jack Flag"
  }, {
    name: "Quasar",
    notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
  }, {
    name: "Cosmo the Spacedog",
    notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
  }, {
    name: "Major Victory",
    notes: "Also member of the alternate reality Guardians of the Galaxy team."
  }, {
    name: "Bug"
  }, {
    name: "Moondragon",
    notes: "Resurrected by Drax and Phyla-Vell."
  }];

  // ALL YOUR CODE BELOW HERE //
  var allGs = oldGuardians.concat(newGuardians);
  console.dir(allGs);

  var names = _.pluck(allGs, 'name');
  console.dir(names);

var Bnames=names.sort();
console.dir(Bnames);

  var FirstNames = _.map(names, function(name) {
    return name.split(' ')[0];
  });
  console.dir(FirstNames);

  var ANames = FirstNames.sort();
  console.dir(ANames);

  var groot = _.filter(allGs, function(guardian) {
    return guardian.name.toLowerCase === groot;
  });
  console.dir(groot);

  function createNameFilter(name) {
    name = name.toLocaleLowerCase();
    return function(g) {
      return g === name;
    }
  }
var OG = _.sortBy(oldGuardians, function(o) { return o.name; });
console.dir(OG);

var NG = _.sortBy(newGuardians, function(o) { return o.name; });
console.dir(NG);

var AG = _.sortBy(allGs, function(o) { return o.name; });
console.dir(AG);

$( "<div id = Tables>Guardians Tables</div>" ).appendTo( "body" );

  var createTable = function(guardians) {
    var createRow = function(guardian) {
      var $row = $("<tr>");
      var $name = $("<td>").text(guardian.name);
      var $notes = $("<td>").text(guardian.notes || "No Data Available");
      $row.append($name);
      $row.append($notes);
      return $row;
    };
    var $table = $("<table>");
    var $rows = guardians.map(createRow);
    $table.append($rows);
    return $table;
  };

  createTable(OG).appendTo("#Tables");
  createTable(NG).appendTo("#Tables");

 $('<button>', {
      text: 'Big Table',
      id: 'BigTable',
      click: function() {
        $("#Tables").empty();
        createTable(AG).appendTo("#Tables");
      }      
  }).appendTo("#Tables");



  // ALL YOUR CODE ABOVE HERE //
});