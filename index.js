function selectText(element) {
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();        
      range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
  
  $('.controls > .select').click( function() {
    var signature_id = $($(this).parents('.controls')[0].data('sig') + '_container');
    selectText($('#' + signature_id)[0]);
  });
  
  $('.controls > .save').click(function() {
    var link = $(this).siblings('a')[0];
    var sig_div = $('#' + $(this).parents('.controls').data('sig') + '_container');
    var sig_html = $(sig_div).html();
    $(link).attr('href', 'data:text/html, ' + sig_html);
    $(this).hide();
    $(link).show();
  });
  
  // update per inputs
  $('#inputs input').keyup(function() {
    var input = $(this).attr('id');
    var val = $(this).val();
    $('.'+input).html(val);
    if (input == 'email') {
      $('.email').attr('href', 'mailto:'+val);
    }
    $('.controls > a').hide();
    $('.controls > .save').show();
  });

  //remove if not entered
  var mobileDiv = document.getElementById()
