/*
to place/spawn a piece using JavaScript:

var piece = document.createElement('div');            // create an empty div
piece.setAttribute('class', 'piece');                 // assign the div class="piece"
document.getElementById('board').appendChild(piece);  // add the div to the id="board"
piece.style.top = '0px';                              // assign the top/y position
piece.style.left = '0px';                             // assign the left/x position
*/


for (var j=1; j<2; j++){
        piece.style.top = j*100 + 'px';   
    for (var i=1; i<6 ;i++) {
            var piece = document.createElement('div');
            piece.setAttribute('class', 'piece');                 // assign the div class="piece"
            document.getElementById('board').appendChild(piece); // add the div to the id="board"
            piece.style.top = '0';                              // assign the top/y position
            piece.style.left = i*100 + 'px';
        }
}
