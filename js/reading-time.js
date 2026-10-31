(function () {
  'use strict';

  var article = document.querySelector('article .post-container');
  var labels = document.querySelectorAll('[data-reading-time-template]');
  if (!article || !labels.length) return;

  var content = article.cloneNode(true);
  content.querySelectorAll('script, style, .pager, .comment, .footnotes, .rouge-gutter, a.footnote').forEach(function (element) {
    element.remove();
  });

  var text = content.textContent || '';
  var chineseCharacters = text.match(/\p{Script=Han}/gu) || [];
  var words = text.replace(/\p{Script=Han}/gu, ' ').match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu) || [];
  // Count each language separately so mixed-language articles are estimated too.
  var minutes = Math.max(1, Math.ceil(chineseCharacters.length / 400 + words.length / 200));

  labels.forEach(function (label) {
    var template = label.getAttribute('data-reading-time-template');
    label.textContent = ' · ' + template.replace('{minutes}', minutes);
    label.hidden = false;
  });
}());
