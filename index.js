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

function heresAFuckingCondition(child) {
  if (child.children.length == 0) {
    return true
  } else {
    return false
  }
}


function deepestChild(cond) {
  var current = document.querySelector('div#grand-node')
  while (current) {
    if (heresAFuckingCondition(current)) {
      return current
    } else {
      current = current.children[0]
    }
  }
}
