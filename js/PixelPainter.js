function createGrid(rows,columns,attributes) {
  if(rows < 0 || typeof rows !== 'number') {
    throw new Error();
  }
  
  var columnLength = columns;

  if(columns < 0 || typeof columns !== 'number'){
    columnLength = rows;
  }
    if(typeof columns === 'object'){
      // no columns provided use second argument as a attribute
      attributes = columnLength;
    }

  var containElem = document.createElement('div');
      containElem.className = 'containGrid';

  for(var i=0; i<rows; i++){
    var row = document.createElement('div');
        row.className = 'row';
        containElem.appendChild(row);

    for(var j=0; j<columnLength; j++){
      var column = document.createElement('div');
          column.className = 'column';
          row.appendChild(column);
          
      for(var key in attributes){
        if(typeof attributes === 'object'){
          column.setAttribute(key,attributes[key].length);
        }
      }
    }
  }
 return containElem;
}

  function addAttributes(element, attributes){
    if(typeof attributes === 'object'){
      Object.keys(attributes).forEach(function(attribute){
        element[attribute] = attributes[attribute];
      });
    }else{
      throw new TypeError('attributes must be an Object!!!');
    }
  }

 var colors = [
      '#663399',
      '#9acd32',
      '#f5f5f5',
      '#ee82ee',
      '#40e0d0',
      '#ff6347',
 ];

function PixelPainter(width, height){
  var ppCanvas = document.getElementById('pixelPainter');
      ppCanvas.id = 'pp-canvas';
      ppCanvas.appendChild(createGrid);
}

var buttonOne = document.querySelector('button');
var eraseButton = {
  style: 'width: 90px; height: 30px; background-color: #dda0dd',
  onclick: eraseButtonOne,
};

function eraseButtonOne(event){
}

addAttributes(buttonOne,eraseButton);
  
var buttons = document.querySelectorAll('button');
var clearButton = buttons[1];
var clearButtonOpt = {
  style: 'width: 90px; height: 30px; background-color: #7fffd4',
  onclick: clearButtonTwo,
};
function clearButtonTwo(event){
  event.target.onclick = 'clear';
}

addAttributes(clearButton,clearButtonOpt);
