function getFirstSelector(selector) {
  var result = document.querySelector(selector);
  return result;
}

function nestedTarget() {
  var result = document.getElementById('nested').getElementsByClassName('target')[0];
  return result;
}

function increaseRankBy(n) {
  var items = document.querySelectorAll('ul.ranked-list li')
  for (i = 0; i < items.length; i++) {
    var items[i].innerHTML = parseInt(items[i].innerHTML) + n
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
