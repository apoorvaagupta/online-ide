/**
 * Created by bhavyaagg on 03/04/18.
 */

var console2 = console;

console = {};


$(document).ready(() => {
  const $sourceCode = $('#sourceCode');
  const $runBtn = $('#runBtn');
  const $resetBtn = $('#resetBtn');
  const $outputDiv = $('#outputDiv');

  $outputDiv.hide();

  $('input[name="language"]').change(() => {
    $outputDiv.empty().hide();
  })

  console.log = function (input) {
    $outputDiv.show().append(input.toString());
  }

  $runBtn.click(() => {
    let lang = $('input[name="language"]:checked').val();
    if (lang === 'node') {
      $.post('/test', {sourceCode: $sourceCode.val()}, (data) => {
        console.log(data)
        $('#outputDiv').show().empty().append(data);
      })
    } else if (lang === 'py3') {
      $.post('/test2', {sourceCode: $sourceCode.val()}, (data) => {
        console.log(data)
        $('#outputDiv').show().empty().append(data);
      })
    } else if (lang === 'js') {
      console2.log(2);
      eval($sourceCode.val())
    }
  });

  $resetBtn.click(() => {
    $sourceCode.val('')
  })

})