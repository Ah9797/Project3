function init(){

function Picclick(){
  var picture = document.getElementById('sudoku');
  picture.setAttribute(src, 'image/sudoku_solved')
  
  }
var b = document.getElementById('sudoku');
b.addEventListener('click', Picclick);
}
window.addEventListener('load', init);