

var xAxis = [];

var yAxis = [];

wholeBoard = [];

function increaseX(size) {
        if (size % 2 == 0) {
            for (var i = 0; i < size; i++) {
                i = xAxis.push(" ", "X");
            } 
            for (var j = 0; j< size; j++) {
                j = yAxis.push("X", " ");
            }
        } else if (size % 2 == 1) {
            for (var i = 0; i < size; i++) {
                i = xAxis.push(" ");
                if (xAxis.length == size) {
                    break;
                }
                xAxis.push("X");
            }
            for (var j = 0; j < size; j++) {
                    j = yAxis.push("X");
                    if (yAxis.length == size) {
                        break;
                    }
                    yAxis.push(" ");
                }
        } else {
            console.log("what?!!");
        }
}

var numberSpaces = 6;

increaseX(numberSpaces);

function shiftOverOne() {
    xAxis.pop();
    xAxis.unshift("X");
    console.log(xAxis);
}


function createBoard() {
    for (i = 0; i < numberSpaces; i++) {
        i = wholeBoard.push(xAxis);
        if (wholeBoard.length == numberSpaces) {
            break;
        }
        wholeBoard.push(yAxis);
    }    
}

createBoard();

console.log(wholeBoard);

