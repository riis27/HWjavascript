var parent = document.getElementById('container').getElementsByTagName('ul')[0];

var child = parent.getElementsByTagName('li')[0];

var removed = parent.removeChild(child);

parent.appendChild(removed);