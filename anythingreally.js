


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

const reader = readline.createInterface(process.stdin, process.stdout);

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