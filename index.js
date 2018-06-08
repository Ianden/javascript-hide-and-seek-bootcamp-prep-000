function getFirstSelector(selector) {
  var result = document.querySelector(selector);
  return result;
}

function nestedTarget() {
  var result = document.getElementById('nested').getElementsByClassName('target')[0];
  return result;
}

function increaseRankBy(n) {
  items = document.querySelectorAll('ul.ranked-list li')
  for (i = 0; i <= items.length; i++) {
    items[0].innerHTML = parseInt(items[0].innerHTML) + n
  }
}

