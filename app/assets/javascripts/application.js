// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(function() {
  $('#btn-signup').on('click', function() {
    $.ajax('http://localhost:3001/users', {
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        password: $('#password').val(),
        username: $('#username').val(),
        email: $('#email').val()
      })
    })
    .done(function(user) {
      console.log(user);
    })
    .fail(function() {
      console.log('error');
    })
    .always(function() {
      console.log('complete');;
    });
  });
})

function addToCart() {
  $.ajax('http://localhost:3001/users', {
    method: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      productId
    })
  })
  .done(function(user) {
    console.log(user);
  })
  .fail(function() {
    console.log('error');
  })
  .always(function() {
    console.log('complete');;
  });
})

$(function() {
  var items = $("#items")

    $.ajax('http://localhost:3001/menus/57a90c8c228ef0dd0425c50e', {
      method: 'GET',
      dataType: 'json',
      contentType: 'application/json',
    })
    .done(function(menu) {
      console.log(menu);
      $.each(menu.items, function (index, menuItem){
        var item = $("<li><h2></h2><h3></h3><p></p><a></a></li>");
        item.find('h2').html(menuItem.title);
        item.find('h3').html(menuItem.price);
        item.find('p').html(menuItem.ingredients);
        item.find('a').on('click', function(){

        });
        items.append(item);
      });
    })
    .fail(function() {
      console.log('error');
    })
    .always(function() {
      console.log('complete');;
    });
})
