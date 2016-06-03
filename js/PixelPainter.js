function createGrid(rows,columns,attributes) {
  if(rows < 0 || typeof rows !== 'number') {
    throw new Error();
  }
  var columnLength = columns;

  if(columns < 0 || typeof columns !== 'number'){
    columnLength = rows;
  }

  var containElem = document.createElement('div');
  containElem.className = 'containRow';

  for(var i=0; i<rows; i++){
    var firstChild = document.createElement('div');
    firstChild.className = 'firstRow';
    containElem.appendChild(firstChild);

    for(var j=0; j<columnLength; j++){
      var firstColumn = document.createElement('div');
      firstColumn.className = 'firstColumn';
      firstChild.appendChild(firstColumn);
    }

  }



 return containElem;

}