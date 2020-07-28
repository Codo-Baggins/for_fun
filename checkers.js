

var xAxis = []

function increaseX(size) {
        if (size % 2 == 0) {
            while (xAxis.length < size) {
                xAxis.push(" ", "X");
            } 
        } else if (size % 2 == 1) {
            while (xAxis.length < size) {
                xAxis.push(" ");
                if (xAxis.length == size) {
                    break;
                }
                xAxis.push("X");
            }
        } else {
            console.log("what?!!");
        }
}

console.log(xAxis);

var numberSpaces = 3;

increaseX(numberSpaces);

var everyOther = xAxis.pop(xAxis.unshift("X"));

for (i = 0; i < numberSpaces; i++) {
    console.log(xAxis);
    console.log(everyOther);
    
}

 