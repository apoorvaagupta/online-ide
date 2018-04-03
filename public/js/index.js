/**
 * Created by bhavyaagg on 03/04/18.
 */

var console2 = console;
console2.log = console.log;

console = {};


$(document).ready(() => {
  const $sourceCode = $('#sourceCode');
  const $runBtn = $('#runBtn');
  const $outputDiv = $('#outputDiv');
  $outputDiv.hide();

  console.log = function (input) {
    $outputDiv.show().append(input.toString());
  }

  $runBtn.click(() => {
    // console.log(eval($sourceCode.val()))
    let lang = $('input[name="language"]:checked').val();
    if (lang === 'node') {
      $.post('/test', {sourceCode: $sourceCode.val()}, (data) => {
        console.log(data)
        $('#outputDiv').show().empty().append(data);
      })
    }
    else if (lang === 'js') {
      console2.log(2);
      eval($sourceCode.val())
    }

  });

})