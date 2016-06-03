function createGrid(rows,columns,attributes) {
  if(rows < 0 || typeof rows !== 'number') {
    throw new Error();
  }

  var containElem = document.createElement('div');
  containElem.className = 'containRow';

  for(var i=0; i<rows; i++){
    var firstChild = document.createElement('div');
    firstChild.className = 'firstRow';
    containElem.appendChild(firstChild);
  }

 return containElem;

}