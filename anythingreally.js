


class Clock {
    constructor() {
        const today = new Date();
        this.date = today
        this.hours = today.getHours();
        this.minutes = today.getMinutes();
        this.seconds = today.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000)
    }
    
    printTime() {
        // const n = this.date.toLocaleTimeString();
        const n = [this.hours, this.minutes, this.seconds].join(":");
        console.log(n);
    }
    
    _tick() {
        this._incrementSeconds();
        this.printTime();
    }

    _incrementSeconds() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this._incrementMinutes();
        }
    }

    _incrementMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._incrementHours();
        }
    }

    _incrementHours() {
        this.hours = (this.hours) % 24;   
    }
}

// const clock = new Clock();



// --------------------
// addNumbers
const readline = require('readline');




function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question("Please input number:", function (num1) { 
            let num = parseInt(num1)

            sum += num;
            console.log("Partial sum = " + sum);

            addNumbers(sum, numsLeft - 1, completionCallback);
            
        });
    } else {
        completeCallback(sum);
    }
};


addNumbers(0, 3, function (sum) {
    console.log("Total Sum: " + sum);
    reader.close();
    process.stdin.destroy();
});



// bubble sort 
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.
    reader.question(`is ${el1} > ${el2}?:`, ans => {
        if (ans === 'yes') {
            callback(true)
        } else {
            callback(false)
        }
    });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
    
    if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps)
    } else {
        askIfGreaterThan(arr[i], arr[i + 1], function isGreaterThan() {
            if (isGreaterthan) {
                const tmp = arr[i];
                arr[i] = arr[i + 1]
                arr[i + 1] = temp 
                madeAnySwaps = true
            }
            outerBubbleSortLoop(madeAnySwaps)
        }
    }

}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});