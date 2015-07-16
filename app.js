// same as $(document).ready(fn);
$(function () {
  'use strict';

  // https://api.jquery.com/category/events/

  //
  // Safely copy text from one field to the render area
  //
  $('body').on('keyup', '.js-text', function (ev) {
    var txt = $(this).val();

    $('.js-render').text(txt);
  });

  //
  // Unprotected Copy
  //
  $('body').on('keyup', '.js-hack-text', function (ev) {
    var txt = $(this).val();

    // you get script injection
    $('.js-render').html(txt);
  });

  //
  // Click a button, just for fun
  //
  $('body').on('click', '.js-button', function (ev) {
    window.alert('Hehehe! That tickles!');
  });

  //
  // Checkboxes are different
  //
  $('body').on('click', '.js-check', function (ev) {
    var val = $(this).val(); // wrong
    var attr = $(this).attr('checked'); // wrong
    var prop = $(this).prop('checked'); // correct

    window.alert(val + ' ' + attr + ' ' + prop);
  });

  //
  // Forms are different
  //
  $('body').on('submit', 'form.js-form', function (ev) {
    ev.preventDefault();
    ev.stopPropagation();

    window.alert('');
  });
});

// SECURITY
//
// Use <script src="path/to/app.js"></script>
// Don't use <script>alert('inline')</script>


// Selectors
// $(className)
// http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048
// 1. just use classes
// 2. don't get fancy
// 3. don't use ids for javascript

// events
// $('body').on(eventName, className, callback)
// 1. always attach to body
// 2. forms are different

// manipulation
//
