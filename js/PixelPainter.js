var createRows = document.createElement('div');
createRows.className = 'newRow';
document.getElementById('pixelPainter').appendChild(createRows);

function createGrid(rows,columns,attributes) {
  if(rows < 0 || typeof rows !== 'number') {
    throw new Error();
  }
  return createRows;
}