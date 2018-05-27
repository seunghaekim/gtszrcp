(function(markdown){
  var md_container = document.getElementsByClassName(markdown)
  var converter = new showdown.Converter({
    ghCodeBlocks: false,
    omitExtraWLInCodeBlocks: false
  });
  for (let i = 0; i < md_container.length; i++) {
    let text = md_container[i].innerHTML.replace(/^\s+(\W)/, '$1')
    md_container[i].innerHTML = converter.makeHtml(text)
  }
})('markdown');
