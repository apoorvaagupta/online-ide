/**
 * Created by bhavyaagg on 03/04/18.
 */

$(document).ready(() => {
  const $sourceCode = $('#sourceCode');
  const $runBtn = $('#runBtn');


  $runBtn.click(() => {
    // console.log(eval($sourceCode.val()))
    $.post('/test', {sourceCode: $sourceCode.val()}, (data) => {
      console.log(data);
    })
  });

})