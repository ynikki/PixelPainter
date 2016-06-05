function createGrid(rows,columns,attributes) {
  if(rows < 0 || typeof rows !== 'number') {
    throw new Error();
  }
  var columnLength = columns;

  if(columns < 0 || typeof columns !== 'number'){
    columnLength = rows;
    if(typeof columns === 'object'){
      // no columns provided use second argument as a attribute
      attributes = columns;
    }
  }

  var containElem = document.createElement('div');
  // containElem.className = 'containRow';

  for(var i=0; i<rows; i++){
    var firstRow = document.createElement('div');
    // firstChild.className = 'firstRow';
    containElem.appendChild(firstRow);

    for(var j=0; j<columnLength; j++){
      var firstColumn = document.createElement('div');
      // firstColumn.className = 'firstColumn';
      firstRow.appendChild(firstColumn);
      }
    }
      function newAttributes(element, attributes){
        if(typeof attributes === 'object'){
          Object.keys(attributes).forEach(function(attribute){
            element[attribute] = attributes[attribute];
          });
        }
  }


 return containElem;

}