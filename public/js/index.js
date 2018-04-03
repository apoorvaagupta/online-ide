/**
 * Created by bhavyaagg on 03/04/18.
 */

$(document).ready(() => {
  const $sourceCode = $('#sourceCode');
  const $runBtn = $('#runBtn');
  const $outputDiv = $('#outputDiv');
  $outputDiv.hide();


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
      console.log(2);
    }

  });

})